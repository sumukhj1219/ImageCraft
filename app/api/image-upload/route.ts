import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { auth} from '@clerk/nextjs/server';
import prisma from '@/utils/db';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET 
});

interface CloudinaryUploadResult {
    public_id: string;
    [key: string]: any;
    url:string;
    width:number
    height:number
}

export async function POST(request: NextRequest) {
    const {userId} = auth()

    if(!userId){
        return NextResponse.json({error:'Unauthorized'}, {status:403})
    }

    const user = await prisma.user.findUnique({
        where:{
            id: userId
        }
    })

    if(!user)
    {
        await prisma.user.create({
            data:{
                id: userId,
            }
        })
    }
    

    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const name = formData.get("name") as string;

        if(!file){
            return NextResponse.json({error: "File not found"}, {status: 400})
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const result = await new Promise<CloudinaryUploadResult>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {folder: "next-cloudinary-uploads"},
                    (error, result) => {
                        if(error) reject(error);
                        else resolve(result as CloudinaryUploadResult);
                    }
                )
                uploadStream.end(buffer)
            }
        )
        console.log(result)
        await prisma.images.create({
            data:{
                public_id:result.public_id,
                url:result.url,
                name:name,
                width:result.width,
                height:result.height,
                uploadedById: userId,
            }
        })
        return NextResponse.json(
            {
                publicId: result.public_id
            },
            {
                status: 200
            }
        )

    } catch (error) {
        console.log("UPload image failed", error)
        return NextResponse.json({error: "Upload image failed"}, {status: 500})
    }

}
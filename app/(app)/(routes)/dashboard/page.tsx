'use server'
import ImagesDisplay from '@/components/ui/ImagesDisplay'
import SearchBar from '@/components/ui/SearchBar'
import prisma from '@/utils/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

interface HomePageProps {
  searchParams: {
    name: string
  }
}



const Dashboard = async ({ searchParams }: HomePageProps) => {
  const {userId} = auth()
  if(!userId)
  {
    return ;
  }
  const images = await prisma.images.findMany({
    where: {
      name: {
        search: searchParams.name
      },
      uploadedById:userId
    }
  })
  
  return (
    <div>
      <SearchBar />
      <ImagesDisplay images={images} />
    </div>
  )
}

export default Dashboard

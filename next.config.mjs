/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
      eslint:{
        ignoreDuringBuilds:true
      }
};

export default nextConfig;

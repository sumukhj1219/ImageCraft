'use server'
import ImagesDisplay from '@/components/ui/ImagesDisplay'
import SearchBar from '@/components/ui/SearchBar'
import prisma from '@/utils/db'
import React from 'react'

interface HomePageProps {
  searchParams: {
    name: string
  }
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const images = await prisma.images.findMany({
    where: {
      name: {
        search: searchParams.name
      },
    }
  })
  
  console.log(searchParams.name)

  return (
    <div>
      <SearchBar />
      <ImagesDisplay images={images} />
    </div>
  )
}

export default HomePage

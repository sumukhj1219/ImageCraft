import React from 'react'
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
      <html lang="en">
      <body
      >
        <Navbar />
        <div className="flex bg-base-100">
          <Sidebar />
          
          <main className="flex-1 mt-14 overflow-y-auto ">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default layout

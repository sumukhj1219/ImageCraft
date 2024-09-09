'use client'
import { randomUUID } from "crypto";
import { Home, Image, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname()
  const routes: any[] = [
    {
      icon: <Home />,
      label: 'Home Page',
      href: '/'
    },
    {
      icon: <Video />,
      label: 'Video Upload',
      href: '/video-upload'
    },
    {
      icon: <Image />,
      label: 'Image Upload',
      href: '/image-upload'
    },
  ]
  return (
    <div className="flex h-screen">
      <aside data-theme="luxury" className="w-64 m-1 rounded-md h-full text-white">
        {
          routes.map((route) => (
            <div key={route.href} className={`p-3 ${pathname === route.href ? 'bg-neutral' : ''} hover:bg-neutral m-2 rounded-xl border-1`}>
              <Link href={route.href} className="flex items-center justify-center gap-x-2">
                <span className="mr-5">{route.icon}</span>
                <span>{route.label}</span>
              </Link>
            </div>
          ))
        }
      </aside>
    </div>
  );
};

export default Sidebar;

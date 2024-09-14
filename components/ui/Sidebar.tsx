'use client';
import { Home, Image, Video } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const routes: any[] = [
    {
      icon: <Home />,
      label: 'Home Page',
      href: '/',
    },
    {
      icon: <Video />,
      label: 'Video Upload',
      href: '/video-upload',
    },
    {
      icon: <Image />,
      label: 'Image Upload',
      href: '/image-upload',
    },
  ];

  return (
    <div className="flex h-screen">
      <aside
        data-theme="luxury"
        className="fixed top-0 left-0 w-64 h-screen m-0 rounded-md text-white mt-14"
      >
        {routes.map((route) => (
          <div
            key={route.href}
            className={`p-3 ${
              pathname === route.href ? 'bg-neutral' : ''
            } hover:bg-neutral m-2 rounded-xl border-1`}
          >
            <Link href={route.href} className="flex items-center justify-center gap-x-2">
              <span className="mr-5">{route.icon}</span>
              <span>{route.label}</span>
            </Link>
          </div>
        ))}
      </aside>
      <div className="flex-1 p-4 ml-64">
      </div>
    </div>
  );
};

export default Sidebar;

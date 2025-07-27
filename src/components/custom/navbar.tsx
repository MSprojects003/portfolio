import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User, Info, Folder, Phone, ToolCase, ToolCaseIcon, Brain, Paintbrush, Paperclip } from 'lucide-react';
import cv from "../../assets/cv/FATHIMA SHAREENA new cv.pdf";
const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Profile', href: '#profile', icon: User },
    { name: 'Skills', href: '#skills', icon: Paintbrush },
    { 
      name: 'Resume', 
      href:cv , // Path to your PDF file in public folder
      icon: Paperclip,
      download: true 
    },
    { name: 'Projects', href: '#designs', icon: Folder },
  ];

  const handleDownload = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = href;
    link.download = 'Shareena_Faleel.pdf'; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 bg-slate-900 shadow-sm',
        'sm:top-0 sm:py-4 sm:flex sm:justify-center',
        'bottom-0 py-2 flex justify-around sm:bottom-auto'
      )}
    >
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant="ghost"
          className={cn(
            'text-gray-100 hover:text-blue-500 hover:bg-transparent',
            'sm:text-base sm:px-4',
            'text-sm p-2'
          )}
          asChild
        >
          {item.download ? (
            <a 
              href={item.href} 
              onClick={(e) => handleDownload(e, item.href)}
              download
            >
              <span className="sm:hidden">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ) : (
            <a href={item.href}>
              <span className="sm:hidden">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="hidden sm:inline">{item.name}</span>
              
            </a>
          )}
        </Button>
      ))}
    </nav>
  );
};

export default Navbar;
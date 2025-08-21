import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Figma, Palette, Map } from 'lucide-react';
import profileImage from "../../assets/shareena2.jpg"

const Profile: React.FC = () => {
  const profileData = {
    fullName: 'Shareena Faleel',
    position: 'Graphic Designer | UI-UX Designer',
    description: 'I am a Graphic and UI/UX Designer passionate about crafting clean, modern, and user-friendly designs. Skilled in tools like Figma, Photoshop, and Canva, I focus on turning ideas into visually appealing and functional digital products. I enjoy working on logo design, social media graphics, and mobile/web interfaces. Always eager to learn and grow, I continuously explore new design trends and techniques to improve my skills. My goal is to create meaningful and effective design solutions that enhance user experience and help clients achieve their objectives.',
    email: 'shareenafaleel37@gmail.com',
    
    address: '164 D Muslim Colony welipenna',
    phone: '+94 78 609 7763',
    linkedin: 'https://www.linkedin.com/in/shareena-faleel-03a75925a/',
    figma: 'https://www.figma.com/team_invite/redeem/otyHjgxHu0BDJUr2DVcp43',
    behance: 'https://www.behance.net/shareenafaleel',
    
  };

  return (
    <section className="min-h-screen md:mt-10 w-full bg-transparent flex items-center justify-center p-4" id="profile">
      <div className="w-full max-w-6xl"> {/* Increased max-width */}
        <Card className="w-full shadow-lg overflow-hidden border border-gray-700">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row"> {/* Changed to lg breakpoint */}
              {/* Profile Image - Left Side */}
              <div className="w-full lg:w-1/3 bg-gray-800 p-8 flex flex-col md:m-4 shadow-2xl items-center justify-center">
                <div className="relative mb-6">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="text-center text-white space-y-2">
                  <h1 className="text-2xl font-bold">{profileData.fullName}</h1>
                  <p className="text-gray-300 font-medium">{profileData.position}</p>
                  
                  {/* Contact Info */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-gray-300" />
                      <a href={`mailto:${profileData.email}`} className="text-sm text-gray-300 hover:text-white">
                        {profileData.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-gray-300" />
                      <a href={`tel:${profileData.phone}`} className="text-sm text-gray-300 hover:text-white">
                        {profileData.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Map className="h-4 w-4 text-gray-300" />
                      
                      <a href="https://maps.app.goo.gl/H3YdVwXrhupCQhrR9" className="text-sm text-gray-300 hover:text-white">
                        {profileData.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Details - Right Side */}
              <div className="w-full lg:w-2/3 p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-gray-100">About Me</CardTitle>
                </CardHeader>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {profileData.description}
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Working AS Freelance UI UX Designer in <a href="https://amss.vercel.app/" className='font-bold'>AM Solutions</a>
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Professional Links</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 hover:bg-gray-50 hover:text-slate-900"
                      >
                        <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 hover:bg-gray-50 hover:text-slate-900"
                      >
                        <a href={profileData.figma} target="_blank" rel="noopener noreferrer">
                          <Figma className="h-4 w-4 mr-2 text-purple-600" />
                          Figma
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 hover:bg-gray-50 hover:text-slate-900"
                      >
                        <a href={profileData.behance} target="_blank" rel="noopener noreferrer">
                          <Palette className="h-4 w-4 mr-2 text-blue-500" />
                          Behance
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
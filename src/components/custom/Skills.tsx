import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Img } from 'react-image';
import { Code, Layout, Cpu, Globe, PenTool, Palette, Figma } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      name: 'Adobe Photoshop', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      fallbackIcon: <Layout className="w-6 h-6" />
    },
    { 
      name: 'Adobe Illustrator', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      fallbackIcon: <PenTool className="w-6 h-6" />
    },
    { 
      name: 'Canva', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
      fallbackIcon: <Palette className="w-6 h-6" />
    },
    { 
      name: 'Figma', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      fallbackIcon: <Figma className="w-6 h-6" />
    },
    { 
      name: 'UI/UX Design', 
      logo: 'https://cdn-icons-png.flaticon.com/512/5026/5026454.png',
      fallbackIcon: <Layout className="w-6 h-6" />
    },
    { 
      name: 'Web Design', 
      logo: 'https://cdn-icons-png.flaticon.com/512/3242/3242257.png',
      fallbackIcon: <Globe className="w-6 h-6" />
    },
    { 
      name: 'Frontend Development', 
      logo: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png',
      fallbackIcon: <Code className="w-6 h-6" />
    },
    { 
      name: 'Prototyping', 
      logo: 'https://cdn-icons-png.flaticon.com/512/4231/4231032.png',
      fallbackIcon: <Cpu className="w-6 h-6" />
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-4 lg:px-8 bg-transparent " id='skills'>
      <div className="max-w-6xl mx-auto ">
        <Card className="w-full shadow-lg overflow-hidden border border-gray-700">
          <CardContent className="p-8">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold text-gray-100">Professional Skills</CardTitle>
              <p className="text-lg text-gray-500">
                A collection of my core competencies and design expertise
              </p>
            </CardHeader>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card 
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transition-all hover:bg-gray-700 hover:shadow-sm group border border-gray-700"
                >
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <Img
                      src={skill.logo}
                      alt={skill.name}
                      loader={<div className="bg-gray-700 rounded-full w-full h-full animate-pulse" />}
                      unloader={
                        <div className="bg-gray-700 rounded-full w-full h-full flex items-center justify-center text-gray-300">
                          {skill.fallbackIcon}
                        </div>
                      }
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-100 text-center group-hover:text-blue-400">
                    {skill.name}
                  </h3>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
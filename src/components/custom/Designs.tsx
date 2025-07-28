import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Layout, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Import images
import graphic1 from "../../assets/graphic/img1.jpg";
import graphic2 from "../../assets/graphic/IMG2.jpg";
import graphic3 from "../../assets/graphic/IMG3.jpg";
import graphic4 from "../../assets/graphic/IMG4.jpg";
import graphic5 from "../../assets/graphic/IMG5.jpg";
import ui1 from "../../assets/ui_ux/img1.jpg";

const Designs = () => {
  // Graphic design projects
  const graphicDesigns = [
    {
      id: 1,
      title: 'Burger Post',
      description: 'Hot & Spicy Burger Advertisement',
      image: graphic1,
      link: '#'
    },
    {
      id: 2,
      title: 'Professional Digital Marketing Poster',
      description: 'Digital Marketing Agency Promotional Design',
      image: graphic2,
      link: '#'
    },
    {
      id: 3,
      title: 'The Essence of an Orange',
      description: 'Creative Food Art / Digital Surrealism',
      image: graphic3,
      link: '#'
    },
    {
      id: 4,
      title: 'Furniture Poster',
      description: 'A clean and modern ad showcasing stylish home furniture',
      image: graphic4,
      link: '#'
    },
    {
      id: 5,
      title: 'Sri Lanka Tourism Collage',
      description: 'Web Development / Graphic Design',
      image: graphic5,
      link: '#'
    },
  ];

  // UI/UX design projects
  const uiUxDesigns = [
    {
      id: 1,
      title: 'Indoor Plant E-commerce Web Design',
      description: 'E-commerce Web Design',
      image: ui1,
      link: 'https://www.behance.net/gallery/230470455/PlantHaven-Indoor-Plant-E-commerce-Web-Design'
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent w-full" id='designs'>
      <div className="w-full mx-auto">
        <Card className="w-full shadow-lg overflow-hidden border border-gray-700">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-2xl font-bold text-gray-100">Design Portfolio</CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <Tabs defaultValue="graphic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                <TabsTrigger value="graphic" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                  <Palette className="w-4 h-4 mr-2" />
                  Graphic Design
                </TabsTrigger>
                <TabsTrigger value="uiux" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                  <Layout className="w-4 h-4 mr-2" />
                  UI/UX Design
                </TabsTrigger>
              </TabsList>

              {/* Graphic Design Tab */}
              <TabsContent value="graphic" className="p-6">
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                  className="w-full"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-300">Graphic Design Projects</h3>
                    <div className="flex gap-2">
                      <CarouselPrevious className="static translate-y-0 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext className="static translate-y-0 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </CarouselNext>
                    </div>
                  </div>
                  <CarouselContent>
                    {graphicDesigns.map((design) => (
                      <CarouselItem key={design.id} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors h-full flex flex-col">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="h-48 bg-gray-700 overflow-hidden cursor-pointer">
                                {/* Simplified image container without overlay */}
                                <img 
                                  src={design.image} 
                                  alt={design.title}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                  onError={(e) => {
                                    console.error(`Failed to load image: ${design.image}`);
                                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Design+Preview';
                                    e.currentTarget.className = "w-full h-full object-cover bg-gray-600";
                                  }}
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl bg-gray-800 border-gray-700 p-0 overflow-hidden">
                              <div className="relative">
                                <img 
                                  src={design.image} 
                                  alt="Full size preview" 
                                  className="w-full max-h-[80vh] object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Design+Preview';
                                  }}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                          <CardContent className="p-4 flex-1 flex flex-col">
                            <h3 className="text-md font-semibold text-white mb-1">{design.title}</h3>
                            <p className="text-gray-400 text-sm mb-3 flex-1">{design.description}</p>
                            <a 
                              href={design.link} 
                              className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center mt-auto"
                            >
                              View Project
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </TabsContent>

              {/* UI/UX Design Tab */}
              <TabsContent value="uiux" className="p-6">
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                  className="w-full"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-300">UI/UX Case Studies</h3>
                    <div className="flex gap-2">
                      <CarouselPrevious className="static translate-y-0 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext className="static translate-y-0 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </CarouselNext>
                    </div>
                  </div>
                  <CarouselContent>
                    {uiUxDesigns.map((design) => (
                      <CarouselItem key={design.id} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors h-full flex flex-col">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="h-48 bg-gray-700 overflow-hidden cursor-pointer">
                                {/* Simplified image container without overlay */}
                                <img 
                                  src={design.image} 
                                  alt={design.title}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                  onError={(e) => {
                                    console.error(`Failed to load image: ${design.image}`);
                                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Design+Preview';
                                    e.currentTarget.className = "w-full h-full object-cover bg-gray-600";
                                  }}
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl bg-gray-800 border-gray-700 p-0 overflow-hidden">
                              <div className="relative">
                                <img 
                                  src={design.image} 
                                  alt="Full size preview" 
                                  className="w-full max-h-[80vh] object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Design+Preview';
                                  }}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                          <CardContent className="p-4 flex-1 flex flex-col">
                            <h3 className="text-md font-semibold text-white mb-1">{design.title}</h3>
                            <p className="text-gray-400 text-sm mb-3 flex-1">{design.description}</p>
                            <a 
                              href={design.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center mt-auto"
                            >
                              View in Figma
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Designs;
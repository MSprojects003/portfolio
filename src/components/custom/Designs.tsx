 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Layout, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import graphic1 from "../../assets/graphic/IMG-20250627-WA0006.jpg"
import grpahc2 from "../../assets/graphic/IMG2.jpg"
import graphic3 from "../../assets/graphic/IMG3.jpg"
import graphic4 from "../../assets/graphic/IMG4.jpg"
import graphic5 from "../../assets/graphic/IMG5.jpg"

const Designs = () => {
  // Enhanced design data with more cards
  const graphicDesigns = [
    {
      id: 1,
      title: 'Food Social Media Design',
      description: 'Special Tasty Fried Chicken Promo Design',
      image:  graphic1,
      link: '#'
    },
    {
      id: 2,
      title: 'Professional Digital Marketing Poster',
      description: 'Digital Marketing Agency Promotional Design',
      image: grpahc2,
      link: '#'
    },
    {
      id: 3,
      title: 'The Essence of an Orange',
      description: 'Creative Food Art / Digital Surrealism',
      image:  graphic3,
      link: '#'
    },
    {
      id: 4,
      title: 'Furniture Poster',
      description: 'A clean and modern ad showcasing stylish home furniture',
      image:  graphic4,
      link: '#'
    },
    {
      id: 5,
      title: 'Sri Lanka Tourism Collage',
      description: 'Web Development / Graphic Design',
      image:  graphic5,
      link: '#'
    },
    
  ];

  const uiUxDesigns = [
    {
      id: 1,
      title: 'Mobile Banking App',
      description: 'Complete redesign of financial app',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      link: 'https://figma.com/project/12345'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Fashion retailer website redesign',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      link: 'https://figma.com/project/67890'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization interface',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      link: 'https://figma.com/project/54321'
    },
    {
      id: 4,
      title: 'Mobile UI Kit',
      description: 'Design system components',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      link: 'https://figma.com/project/98765'
    },
    {
      id: 5,
      title: 'Onboarding Flow',
      description: 'User onboarding experience',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      link: 'https://figma.com/project/13579'
    },
    {
      id: 6,
      title: 'Admin Dashboard',
      description: 'Backend management interface',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
      link: 'https://figma.com/project/24680'
    },
    {
      id: 7,
      title: 'Food Delivery App',
      description: 'Restaurant ordering platform',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      link: 'https://figma.com/project/86420'
    },
    {
      id: 8,
      title: 'Fitness Tracker',
      description: 'Health monitoring application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      link: 'https://figma.com/project/97531'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8  bg-transparent w-full" id='designs'>
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
                              <div className="h-48 bg-gray-700 overflow-hidden cursor-pointer relative group">
                                {/* Main image always visible */}
                                <img 
                                  src={design.image} 
                                  alt={design.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Design+Preview';
                                    e.currentTarget.className = "w-full h-full object-cover bg-gray-600";
                                  }}
                                />
                                {/* Magnifying glass overlay only appears on hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl bg-gray-800 border-gray-700 p-0 overflow-hidden">
                              <div className="relative">
                                <img 
                                  src={design.image} 
                                  alt="Full size preview" 
                                  className="w-full max-h-[80vh] object-contain"
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
                              <div className="h-48 bg-gray-700 overflow-hidden cursor-pointer relative group">
                                <img 
                                  src={design.image} 
                                  alt={design.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Design+Preview';
                                    e.currentTarget.className = "w-full h-full object-cover bg-gray-600";
                                  }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl bg-gray-800 border-gray-700 p-0 overflow-hidden">
                              <div className="relative">
                                <img 
                                  src={design.image} 
                                  alt="Full size preview" 
                                  className="w-full max-h-[80vh] object-contain"
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
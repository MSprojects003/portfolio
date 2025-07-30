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
import ui2 from "../../assets/ui_ux/mobile ui.jpg"
import ui3 from "../../assets/ui_ux/ui3.jpg"
import ui4 from "../../assets/ui_ux/ui4.jpg"
import grpahic6 from "../../assets/graphic/img6.jpg"
import graphic7 from "../../assets/graphic/img7.jpg"
import graphic8 from "../../assets/graphic/img8.jpg"
import graphic9 from "../../assets/graphic/img9.jpg"
import graphic10 from "../../assets/graphic/img10.jpg"
import graphic11 from "../../assets/graphic/img11.jpg"
import graphic12 from "../../assets/graphic/img12.jpg"
import graphic13 from "../../assets/graphic/img13.jpg"
import graphic14 from "../../assets/graphic/img14.jpg"
import grapgic15 from "../../assets/graphic/img15.jpg"
import graphic16 from "../../assets/graphic/img16.jpg"

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
    {
      id: 6,
      title: 'Study Abroad Promotional Banner',
      description: ' ',
      image: grpahic6,
      link: '#'
    },
    {
      id: 7,
      title: 'Rent a Car Poster',
      description: 'Attractive advertisement for a car rental service',
      image: graphic7,
      link: '#'
    },
      {
      id: 8,
      title: 'Crispy Spring Rolls Promo',
      description: 'A warm and inviting ad design showcasing vegetable spring rolls with a 25% offer and free home delivery',
      image: graphic8,
      link: '#'
    },
     {
      id: 9,
      title: 'Chiken Burger poster',
      description: 'A burger so good, it speaks for itself. Fresh, bold, and unforgettable',
      image: graphic9,
      link: '#'
    },
     {
      id: 10,
      title: 'Acer Aspire 3 Laptop Ad',
      description: 'A promotional graphic for the Acer Aspire 3 laptop',
      image: graphic10,
      link: '#'
    },
     {
      id: 11,
      title: 'Ice Cream Delight',
      description: 'A vibrant and eye-catching promotional design for a 50% discount on fruity blueberry  ice cream.',
      image: graphic11,
      link: '#'
    },
    {
      id: 12,
      title: 'Burger Promotion',
      description: 'A bold and colorful food advertisement banner featuring a fresh burger ',
      image: graphic12,
      link: '#'
    },
    {
      id: 13,
      title: 'Canon Printer Promotion',
      description: 'Clean and informative ad design highlighting Canon printer features such as WiFi, print-scan-copy functions, and high page yield. ',
      image: graphic13,
      link: '#'
    },
    {
      id: 14,
      title: 'Green tea Poster',
      description: '  ',
      image: graphic14,
      link: '#'
    },
    {
      id: 15,
      title: 'Iphone 14 Pro Advertisement',
      description: '  ',
      image: grapgic15,
      link: '#'
    },
    {
      id: 16,
      title: 'Digital Marketing Poster',
      description: '  ',
      image: graphic16,
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
     {
      id: 2,
      title: 'Mobile App Design',
      description: 'Mobile Application Design',
      image: ui2,
      link: 'https://www.behance.net/gallery/229221837/Modern-Furniture-App-UI-Design'
    },
     {
      id: 3,
      title: 'Perfume Web Design',
      description: 'Secret Notes Luxury Perfume Online Store Design',
      image: ui3,
      link: 'https://www.behance.net/gallery/228687623/Secret-Notes-Luxury-Perfume-Online-Store-Design'
    },
     {
      id: 4,
      title: 'Coffe Shop eb Design',
      description: 'Coffee Haven Web Design Concept',
      image: ui4,
      link: 'https://www.behance.net/gallery/231418857/Coffee-Haven-Web-Design-Concept'
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
                              <div className="h-64 bg-gray-700 overflow-hidden cursor-pointer">
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
                              <div className="h-56 bg-gray-700 overflow-hidden cursor-pointer">
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
                              View in Behance
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
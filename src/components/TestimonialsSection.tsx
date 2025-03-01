
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "CreativeHub",
    content: "AI File Converter has revolutionized our workflow. What used to take hours now takes minutes. The quality of the conversions is outstanding, especially for our image and video assets.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Full Stack Developer",
    company: "TechNexus",
    content: "As a developer, I need reliable tools that work seamlessly. This platform's code conversions are incredibly accurate, saving me significant development time when working across different languages.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "MediaSphere",
    content: "The audio and video conversion quality is exceptional. I use AI File Converter daily for my content creation, and the results are consistently professional-grade. Worth every penny!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip mb-4">Testimonials</div>
          <h2 className="heading-lg mb-6">
            What Our Users Say
          </h2>
          <p className="paragraph">
            Discover how our AI-powered file conversion platform has transformed workflows for professionals across industries.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <div className="relative overflow-hidden h-[180px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === activeIndex
                        ? "translate-x-0 opacity-100"
                        : index < activeIndex
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-medium mb-6 text-foreground/90 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-primary/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h4 className="font-display text-lg font-semibold">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-secondary-foreground/80">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="h-10 w-10 rounded-full"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="h-10 w-10 rounded-full"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

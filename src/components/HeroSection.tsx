
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-fade-in">
            <span className="text-xs font-medium text-primary">AI-Powered File Conversion</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-in [animation-delay:200ms]">
            Effortless 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 px-2">
              AI-Powered
            </span> 
            File Conversions
          </h1>
          
          <p className="paragraph max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:400ms]">
            Convert text, images, audio, video, and code files instantly with state-of-the-art AI technology.
            Transform any file format with unparalleled precision and speed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/signup">Try for Free <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/login">View Demo</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto animate-fade-in [animation-delay:800ms]">
          <div className="glass-card rounded-2xl shadow-xl overflow-hidden border border-white/30">
            <div className="w-full aspect-[16/9] bg-gradient-to-tr from-blue-50 to-slate-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[85%] rounded-lg bg-white shadow-lg flex flex-col">
                  <div className="h-12 border-b flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto pr-16">
                      <div className="w-64 h-6 rounded-full bg-slate-100"></div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-5 p-6 gap-4">
                    <div className="col-span-1 space-y-3">
                      <div className="w-full h-8 rounded-md bg-primary/10"></div>
                      <div className="w-full h-8 rounded-md bg-slate-100"></div>
                      <div className="w-full h-8 rounded-md bg-slate-100"></div>
                      <div className="w-full h-8 rounded-md bg-slate-100"></div>
                    </div>
                    <div className="col-span-4 bg-slate-50 rounded-lg p-4 flex items-center justify-center border border-slate-100">
                      <div className="w-3/4 h-full rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-md bg-primary/30"></div>
                          </div>
                          <div className="w-40 h-4 mx-auto rounded-full bg-slate-200"></div>
                          <div className="w-32 h-4 mx-auto mt-2 rounded-full bg-slate-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/10 blur-xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

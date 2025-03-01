
import { Check, Zap, ShieldCheck, FileType } from "lucide-react";

const benefits = [
  {
    icon: <FileType size={24} className="text-primary" />,
    title: "Universal Format Support",
    description: "Support for a vast array of file formats across text, image, audio, video, and code categories."
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: "Lightning-Fast Conversions",
    description: "Our optimized AI algorithms deliver rapid file processing with minimal waiting time."
  },
  {
    icon: <ShieldCheck size={24} className="text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Files are encrypted during processing and automatically deleted after conversion is complete."
  },
  {
    icon: <Check size={24} className="text-primary" />,
    title: "Exceptional Quality",
    description: "AI-powered quality preservation ensures your converted files maintain their original fidelity."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="chip mb-4">Benefits</div>
            <h2 className="heading-lg mb-6">
              Why Choose Our AI File Converter
            </h2>
            <p className="paragraph mb-8">
              Our platform offers unique advantages that set us apart from conventional file conversion tools, delivering a superior experience powered by cutting-edge AI.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-foreground/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square glass-card rounded-2xl overflow-hidden p-1 animate-float">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
                  <div className="w-full space-y-6">
                    <div className="w-full h-24 rounded-xl bg-white shadow-sm p-4 flex items-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <div className="w-8 h-8 rounded-md bg-primary/30"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-32 h-4 bg-slate-200 rounded-full mb-2"></div>
                        <div className="w-48 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-500" />
                      </div>
                    </div>
                    
                    <div className="w-full h-24 rounded-xl bg-white shadow-sm p-4 flex items-center">
                      <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                        <div className="w-8 h-8 rounded-md bg-blue-300/50"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-40 h-4 bg-slate-200 rounded-full mb-2"></div>
                        <div className="w-56 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-500" />
                      </div>
                    </div>
                    
                    <div className="w-full h-24 rounded-xl bg-white shadow-sm p-4 flex items-center">
                      <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                        <div className="w-8 h-8 rounded-md bg-purple-300/50"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-28 h-4 bg-slate-200 rounded-full mb-2"></div>
                        <div className="w-44 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-32 h-32 rounded-full bg-blue-400/10 blur-xl -bottom-10 -left-10"></div>
              <div className="absolute -z-10 w-24 h-24 rounded-full bg-primary/10 blur-xl -top-8 -right-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

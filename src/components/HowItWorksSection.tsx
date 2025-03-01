
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Your Files",
    description: "Drag and drop or browse to upload files. Our platform accepts multiple files at once.",
    image: "step1"
  },
  {
    number: "02",
    title: "Select Conversion Type",
    description: "Choose your desired conversion format from our comprehensive list of options.",
    image: "step2"
  },
  {
    number: "03",
    title: "Receive Converted File",
    description: "Our AI processes your file and delivers the converted version in moments.",
    image: "step3"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip mb-4">Process</div>
          <h2 className="heading-lg mb-6">
            How It Works
          </h2>
          <p className="paragraph">
            Converting files is simple and efficient with our streamlined process designed for optimal user experience.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/4 left-[calc(50%-0.5px)] w-px h-[60%] bg-gradient-to-b from-primary/30 to-transparent hidden lg:block"></div>
          
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16`}
              >
                <div className={`w-full lg:w-1/2 text-center ${
                  index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                }`}>
                  <div className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {step.number}
                  </div>
                  <h3 className="heading-md mb-4">{step.title}</h3>
                  <p className="paragraph">{step.description}</p>
                </div>
                
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card p-1 transition-all hover:shadow-lg">
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${
                      index === 0 ? 'from-blue-50 to-indigo-50' : 
                      index === 1 ? 'from-indigo-50 to-purple-50' : 
                      'from-purple-50 to-blue-50'
                    } flex items-center justify-center p-8`}>
                      {index === 0 && (
                        <div className="w-full max-w-xs border-2 border-dashed border-primary/20 rounded-lg py-10 px-6 flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <div className="w-8 h-8 bg-primary/20 rounded-md"></div>
                          </div>
                          <div className="w-2/3 h-4 bg-slate-200 rounded-full mb-2"></div>
                          <div className="w-1/2 h-4 bg-slate-200 rounded-full"></div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4">
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-primary/40 mr-3"></div>
                              <div className="w-24 h-4 bg-slate-200 rounded-full"></div>
                              <div className="ml-auto">
                                <ArrowRight size={16} className="text-primary/60" />
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-slate-200 mr-3"></div>
                              <div className="w-28 h-4 bg-slate-200 rounded-full"></div>
                              <div className="ml-auto">
                                <ArrowRight size={16} className="text-slate-200" />
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-slate-200 mr-3"></div>
                              <div className="w-20 h-4 bg-slate-200 rounded-full"></div>
                              <div className="ml-auto">
                                <ArrowRight size={16} className="text-slate-200" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4 text-center">
                          <div className="w-12 h-12 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center">
                            <div className="w-6 h-6 text-green-500">✓</div>
                          </div>
                          <div className="w-4/5 h-4 bg-slate-200 rounded-full mx-auto mb-2"></div>
                          <div className="w-3/5 h-4 bg-slate-200 rounded-full mx-auto"></div>
                          <div className="mt-4 w-1/2 h-8 bg-primary/20 rounded-full mx-auto"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -z-10 w-20 h-20 rounded-full bg-primary/5 blur-xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

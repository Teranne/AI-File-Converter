
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 opacity-20"></div>
          
          <div className="relative px-8 py-16 md:p-16 text-center">
            <h2 className="heading-lg mb-6 max-w-2xl mx-auto">
              Ready to Transform Your File Conversion Experience?
            </h2>
            
            <p className="paragraph mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have streamlined their workflow with our AI-powered file converter. Get started for free today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto animate-pulse-slow">
                Get Started Free <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for occasional use and basic conversions.",
    features: [
      "5 file conversions per day",
      "Max file size: 50MB",
      "Basic file formats",
      "Standard conversion quality",
      "24-hour file storage"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Ideal for professionals with regular conversion needs.",
    features: [
      "Unlimited conversions",
      "Max file size: 1GB",
      "All file formats",
      "Enhanced conversion quality",
      "7-day file storage",
      "Priority processing",
      "Batch processing"
    ],
    cta: "Try Pro Free",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per month",
    description: "For teams and companies with advanced requirements.",
    features: [
      "Everything in Pro",
      "Max file size: 5GB",
      "AI-enhanced quality",
      "30-day file storage",
      "API access",
      "Dedicated support",
      "Custom conversions",
      "Team management"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip mb-4">Pricing</div>
          <h2 className="heading-lg mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="paragraph">
            Choose the plan that fits your needs. All plans include our core AI conversion technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "ring-2 ring-primary shadow-xl md:scale-105" 
                  : "border border-border hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-xs font-medium text-center py-1.5">
                  Most Popular
                </div>
              )}
              
              <div className={`px-6 py-8 ${plan.popular ? "pt-12" : ""}`}>
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-secondary-foreground/70 ml-1 pb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-secondary-foreground/80 mb-6">
                  {plan.description}
                </p>
                
                <Button 
                  className={`w-full mb-6 ${plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-foreground/90 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

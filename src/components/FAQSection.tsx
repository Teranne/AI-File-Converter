
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Which file formats do you support?",
    answer: "We support a wide range of formats including PDF, DOCX, XLSX, JPG, PNG, SVG, MP3, WAV, MP4, AVI, and many more. Our platform can handle text, image, audio, video, and code file conversions."
  },
  {
    question: "Is my data secure during the conversion process?",
    answer: "Yes, we take data security seriously. All uploads are encrypted using TLS, and files are processed in isolated environments. Files are automatically deleted after conversion or within 24 hours, depending on your plan."
  },
  {
    question: "How accurate are the AI-powered conversions?",
    answer: "Our AI models are trained on millions of files to ensure high accuracy. For text conversions, we maintain formatting and structure. For media files, we preserve quality while optimizing file size. Our models continuously improve through machine learning."
  },
  {
    question: "Is there a limit on file size?",
    answer: "Yes, limits vary by plan. Free users can convert files up to 50MB, Pro users up to 1GB, and Enterprise users up to 5GB. If you have specific needs beyond these limits, please contact our sales team."
  },
  {
    question: "Can I batch convert multiple files at once?",
    answer: "Yes, batch processing is available on our Pro and Enterprise plans. You can upload multiple files and convert them to the same format simultaneously, saving time and effort."
  },
  {
    question: "Do you offer API access for integrations?",
    answer: "Yes, API access is available with our Enterprise plan. This allows you to integrate our conversion capabilities directly into your workflow, applications, or services."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip mb-4">FAQ</div>
          <h2 className="heading-lg mb-6">
            Frequently Asked Questions
          </h2>
          <p className="paragraph">
            Find answers to common questions about our AI-powered file conversion platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-display text-lg font-semibold pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp size={18} className="text-primary" />
                    ) : (
                      <ChevronDown size={18} className="text-secondary-foreground/70" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`mt-2 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-secondary-foreground/80 pt-2 pb-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="heading-sm mb-4">Still have questions?</h3>
          <p className="paragraph mb-6">
            Our support team is ready to assist you with any other questions you might have.
          </p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

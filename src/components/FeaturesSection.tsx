
import { 
  FileText, 
  Image, 
  Music, 
  Video, 
  Code, 
  Database
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Text Conversions",
    description: "PDF to Word, Markdown to HTML, TXT to DOCX, and more with advanced formatting preservation.",
    examples: ["PDF → Word", "Markdown → HTML", "TXT → DOCX"]
  },
  {
    icon: <Image className="h-6 w-6 text-primary" />,
    title: "Image Conversions",
    description: "Convert between PNG, JPG, WEBP, SVG with intelligent optimization and quality preservation.",
    examples: ["PNG → JPG", "WEBP → PNG", "SVG → PNG"]
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    title: "Audio Conversions",
    description: "Transform MP3, WAV, and other audio formats with lossless quality and AI enhancement.",
    examples: ["MP3 → WAV", "Speech → Text", "Text → Speech"]
  },
  {
    icon: <Video className="h-6 w-6 text-primary" />,
    title: "Video Conversions",
    description: "Convert MP4, GIF, and other video formats with AI upscaling and intelligent compression.",
    examples: ["MP4 → GIF", "Video Compression", "AI Upscaling"]
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Code Conversions",
    description: "Translate between programming languages with syntax preservation and best practices.",
    examples: ["Python → JavaScript", "HTML → Markdown", "SQL Generation"]
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "AI-Generated Data",
    description: "Summarize, paraphrase, and generate content with state-of-the-art AI language models.",
    examples: ["Text Summarization", "Paraphrasing", "AI Story Generation"]
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip mb-4">Features</div>
          <h2 className="heading-lg mb-6">
            Comprehensive File Conversion Capabilities
          </h2>
          <p className="paragraph">
            Our platform leverages cutting-edge AI to provide precise, efficient file conversions across multiple formats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="text-secondary-foreground/80 mb-4">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.examples.map((example, i) => (
                  <div key={i} className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { Upload, FileType, CheckCircle, AlertCircle, RotateCw, FileText, Image, Music, Video, Code, Brain } from "lucide-react";

// Conversion type interface
interface ConversionType {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  formats: string[];
}

// Conversion categories
const conversionTypes: Record<string, ConversionType[]> = {
  text: [
    { id: "pdf-to-word", name: "PDF to Word", description: "Convert PDF documents to editable Word format", icon: FileText, formats: ["PDF → DOCX"] },
    { id: "markdown-to-html", name: "Markdown to HTML", description: "Convert Markdown to HTML for web publishing", icon: FileText, formats: ["MD → HTML"] },
    { id: "txt-to-docx", name: "Text to Word", description: "Convert plain text files to Word documents", icon: FileText, formats: ["TXT → DOCX"] },
  ],
  image: [
    { id: "png-to-jpg", name: "PNG to JPG", description: "Convert PNG images to JPG format", icon: Image, formats: ["PNG → JPG"] },
    { id: "webp-to-png", name: "WebP to PNG", description: "Convert WebP images to PNG format", icon: Image, formats: ["WEBP → PNG"] },
    { id: "svg-to-png", name: "SVG to PNG", description: "Convert SVG vector graphics to PNG raster images", icon: Image, formats: ["SVG → PNG"] },
  ],
  audio: [
    { id: "mp3-to-wav", name: "MP3 to WAV", description: "Convert MP3 audio to WAV format", icon: Music, formats: ["MP3 → WAV"] },
    { id: "speech-to-text", name: "Speech to Text", description: "Transcribe audio recordings to text", icon: Music, formats: ["MP3/WAV → TXT"] },
    { id: "text-to-speech", name: "Text to Speech", description: "Convert text to natural-sounding speech", icon: Music, formats: ["TXT → MP3"] },
  ],
  video: [
    { id: "mp4-to-gif", name: "MP4 to GIF", description: "Convert MP4 videos to GIF animations", icon: Video, formats: ["MP4 → GIF"] },
    { id: "video-compression", name: "Video Compression", description: "Compress video files while maintaining quality", icon: Video, formats: ["MP4 → MP4"] },
    { id: "video-upscaling", name: "AI Video Upscaling", description: "Enhance video resolution using AI", icon: Video, formats: ["MP4 → MP4"] },
  ],
  code: [
    { id: "python-to-js", name: "Python to JavaScript", description: "Convert Python code to JavaScript", icon: Code, formats: ["PY → JS"] },
    { id: "html-to-markdown", name: "HTML to Markdown", description: "Convert HTML to Markdown format", icon: Code, formats: ["HTML → MD"] },
    { id: "sql-generation", name: "SQL Generation", description: "Generate SQL queries from natural language", icon: Code, formats: ["TXT → SQL"] },
  ],
  ai: [
    { id: "text-summarization", name: "Text Summarization", description: "Generate concise summaries of longer texts", icon: Brain, formats: ["TXT → TXT"] },
    { id: "paraphrasing", name: "Paraphrasing", description: "Rewrite text while maintaining original meaning", icon: Brain, formats: ["TXT → TXT"] },
    { id: "story-generation", name: "AI Story Generation", description: "Generate creative stories from prompts", icon: Brain, formats: ["TXT → TXT"] },
  ],
};

// Conversion history item interface
interface ConversionHistoryItem {
  id: string;
  fileName: string;
  conversionType: string;
  status: "completed" | "processing" | "failed";
  timestamp: Date;
  downloadUrl?: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [selectedConversion, setSelectedConversion] = useState<string | null>(null);
  const [conversionHistory, setConversionHistory] = useState<ConversionHistoryItem[]>([]);
  
  // Check if user is authenticated
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUserEmail(user.email);
        // Simulate fetching conversion history
        setConversionHistory([
          {
            id: "1",
            fileName: "document.pdf",
            conversionType: "PDF to Word",
            status: "completed",
            timestamp: new Date(Date.now() - 3600000),
            downloadUrl: "#"
          },
          {
            id: "2",
            fileName: "presentation.png",
            conversionType: "PNG to JPG",
            status: "completed",
            timestamp: new Date(Date.now() - 7200000),
            downloadUrl: "#"
          },
          {
            id: "3",
            fileName: "code.py",
            conversionType: "Python to JavaScript",
            status: "processing",
            timestamp: new Date(Date.now() - 1800000),
          }
        ]);
      } else {
        // User is not logged in, redirect to login
        navigate("/login");
      }
    });
    
    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);
  
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      toast({
        title: "File selected",
        description: `${files[0].name} (${(files[0].size / 1024 / 1024).toFixed(2)} MB)`,
      });
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      toast({
        title: "File dropped",
        description: `${files[0].name} (${(files[0].size / 1024 / 1024).toFixed(2)} MB)`,
      });
    }
  };
  
  const handleConversionSelect = (conversionId: string) => {
    setSelectedConversion(conversionId);
  };
  
  const handleUpload = async () => {
    if (!selectedFile || !selectedConversion) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select both a file and conversion type",
      });
      return;
    }
    
    try {
      setUploading(true);
      
      // Simulate file upload with progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add to conversion history
      const conversionType = Object.values(conversionTypes)
        .flat()
        .find(type => type.id === selectedConversion)?.name || "Unknown";
        
      const newConversion: ConversionHistoryItem = {
        id: Date.now().toString(),
        fileName: selectedFile.name,
        conversionType,
        status: "processing",
        timestamp: new Date(),
      };
      
      setConversionHistory(prev => [newConversion, ...prev]);
      
      // Reset state
      setUploadProgress(0);
      setUploading(false);
      setSelectedFile(null);
      setSelectedConversion(null);
      
      // Simulate conversion completion after a delay
      setTimeout(() => {
        setConversionHistory(prev => prev.map(item => 
          item.id === newConversion.id 
            ? { ...item, status: "completed", downloadUrl: "#" } 
            : item
        ));
        
        toast({
          title: "Conversion completed",
          description: `${selectedFile.name} has been converted successfully.`,
        });
      }, 5000);
      
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "There was an error uploading your file. Please try again.",
      });
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI File Converter
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {userEmail}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* File Upload Section */}
          <div className="md:col-span-2">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upload File</h2>
              
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging ? "border-primary bg-primary/5" : "border-muted"
                } ${selectedFile ? "bg-primary/5" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {selectedFile ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                      <FileType size={32} />
                    </div>
                    <div>
                      <p className="font-medium">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedFile(null)}
                      className="mt-2"
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-muted">
                      <Upload size={32} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Drag and drop your file here</p>
                      <p className="text-sm text-muted-foreground">
                        or click to browse files
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="mt-2" asChild>
                        <span>Browse Files</span>
                      </Button>
                    </label>
                  </div>
                )}
              </div>
              
              {uploading && (
                <div className="mt-4">
                  <p className="text-sm mb-2">Uploading: {uploadProgress}%</p>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
              
              {/* Conversion Selection */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Select Conversion Type</h3>
                
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid grid-cols-6 mb-4">
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="image">Image</TabsTrigger>
                    <TabsTrigger value="audio">Audio</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="ai">AI</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(conversionTypes).map(([category, types]) => (
                    <TabsContent value={category} key={category} className="mt-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {types.map((type) => (
                          <Card 
                            key={type.id}
                            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                              selectedConversion === type.id ? "ring-2 ring-primary" : ""
                            }`}
                            onClick={() => handleConversionSelect(type.id)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                                <type.icon size={18} />
                              </div>
                              <div>
                                <h4 className="font-medium">{type.name}</h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {type.formats.join(", ")}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
              
              <Button 
                className="w-full mt-6" 
                size="lg"
                onClick={handleUpload}
                disabled={!selectedFile || !selectedConversion || uploading}
              >
                {uploading ? (
                  <>
                    <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Convert File</>
                )}
              </Button>
            </Card>
          </div>
          
          {/* Conversion History */}
          <div>
            <Card className="p-6 shadow-md h-full">
              <h2 className="text-xl font-semibold mb-4">Recent Conversions</h2>
              
              {conversionHistory.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No conversion history yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {conversionHistory.map((item) => (
                    <div key={item.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.fileName}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.conversionType} • {item.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                        <div>
                          {item.status === "completed" && (
                            <div className="flex items-center text-green-500">
                              <CheckCircle size={16} className="mr-1" />
                              <span className="text-xs">Completed</span>
                            </div>
                          )}
                          {item.status === "processing" && (
                            <div className="flex items-center text-yellow-500">
                              <RotateCw size={16} className="mr-1 animate-spin" />
                              <span className="text-xs">Processing</span>
                            </div>
                          )}
                          {item.status === "failed" && (
                            <div className="flex items-center text-red-500">
                              <AlertCircle size={16} className="mr-1" />
                              <span className="text-xs">Failed</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {item.downloadUrl && item.status === "completed" && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-2 text-xs"
                          asChild
                        >
                          <a href={item.downloadUrl} download>
                            Download
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
        
        {/* API Documentation Card */}
        <Card className="p-6 shadow-md mt-8">
          <h2 className="text-xl font-semibold mb-4">API Access</h2>
          <p className="text-muted-foreground mb-4">
            Access our conversion features programmatically through our RESTful API.
          </p>
          <div className="bg-muted p-4 rounded-md mb-4">
            <code className="text-sm">
              POST https://api.aifileconverter.com/v1/convert
            </code>
          </div>
          <Button variant="outline">View API Documentation</Button>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;

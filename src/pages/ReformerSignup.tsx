import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

import reformer1 from "@/assets/renegade_reformer_1.png";
import reformer2 from "@/assets/renegade_reformer_2.png";
import reformer3 from "@/assets/renegade_reformer_3.png";
import reformer4 from "@/assets/renegade_reformer_4.png";

const ReformerSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save to database when backend is implemented
    console.log("Signup data:", { name, email });
    
    setIsSubmitted(true);
    toast({
      title: "Thank you!",
      description: "We'll notify you when Renegade Reformer goes live.",
    });
  };

  if (isSubmitted) {
    return (
    <main className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #170701, #4f2202)'}}>
        <SEO
          title="Early Access Confirmed | Renegade Reformer"
          description="Thanks for signing up for Renegade Reformer early access. We'll be in touch when the Bristol studio opens in 2026."
          path="/reformer-signup"
        />
        <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
          {/* Main Header Logo */}
          <div className="mb-10 animate-fade-in animate-scale-in" style={{
            animationDelay: '0.2s'
          }}>
            {/* White Eagle Logo */}
            <div className="mb-6">
              <button 
                onClick={() => navigate('/')} 
                className="mx-auto block transition-transform hover:scale-105"
                aria-label="Back to Home"
              >
                <img 
                  src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" 
                  alt="Renegade Studios Eagle Logo" 
                  className="w-32 h-32 mx-auto object-contain cursor-pointer"
                />
              </button>
            </div>
            
            {/* Studio Name */}
            <div className="mb-4">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-neogrotesk text-xl sm:text-3xl font-bold tracking-tight -mt-2">
              STUDIOS.
            </h2>
            </div>
            
            {/* Thank you message */}
            <div className="mb-4">
              <p className="text-primary font-rosaline text-base sm:text-xl tracking-wider">
                Thank you for your interest!
              </p>
              <p className="text-primary font-rosaline text-sm sm:text-base tracking-wider mt-2">
                We'll notify you when Renegade Reformer goes live.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center">
            <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
              <button onClick={() => navigate('/')} className="w-[200px] h-20 p-4 border-0 bg-transparent flex flex-col justify-center items-center gap-0 relative" aria-label="Back to Home">
                <div className="text-primary font-neogrotesk text-lg font-bold tracking-wider">BACK TO</div>
                <div className="text-primary font-rosaline text-sm tracking-wider -mt-1 ml-8">home</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #170701, #4f2202)'}}>
      <SEO
        title="Early Access Signup | Renegade Reformer Bristol"
        description="Sign up for early access to Renegade Reformer, a new Reformer Pilates studio opening in Bristol in 2026. Founders pricing and priority booking."
        path="/reformer-signup"
      />
      <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Header Logo */}
        <div className="mb-10">
          {/* White Eagle Logo */}
          <div className="mb-6 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.1s_forwards]">
            <button 
              onClick={() => navigate('/')} 
              className="mx-auto block transition-transform hover:scale-105"
              aria-label="Back to Home"
            >
              <img 
                src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" 
                alt="Renegade Studios Eagle Logo" 
                className="w-32 h-32 mx-auto object-contain cursor-pointer"
              />
            </button>
          </div>
          
          {/* Studio Name */}
          <div className="mb-4 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.5s_forwards]">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-neogrotesk text-xl sm:text-3xl font-bold tracking-tight -mt-2">
              REFORMER.
            </h2>
          </div>
          
          {/* Tagline */}
          <div className="mb-4">
            <p className="text-primary font-rosaline text-base sm:text-xl tracking-wider opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.9s_forwards]">
              A divinely powerful approach to pilates
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <img src={reformer1} alt="Renegade Reformer studio interior render" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideDown_0.6s_ease-out_1.2s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer1)} />
              <img src={reformer2} alt="Renegade Reformer floor plan and design" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideUp_0.6s_ease-out_1.5s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer2)} />
              <img src={reformer3} alt="Renegade brand color palette" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideDown_0.6s_ease-out_1.8s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer3)} />
              <img src={reformer4} alt="Renegade Reformer exterior sketch" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideUp_0.6s_ease-out_2.1s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer4)} />
            </div>
            <p className="text-primary text-sm tracking-wide max-w-2xl mx-auto mt-6 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_2.5s_forwards] font-sans px-0 py-[50px] font-extrabold sm:text-base">
              Renegade is a community-led, pilates experience. We introduce a new concept to bristol, fusing pilates, fitness, immersive set design and interactive audio & lighting production to guide your flow. Designed and built by some of bristol’s finest creative minds. The first of its kind in the UK.
            </p>
            <p className="text-primary font-rosaline text-sm sm:text-base tracking-wider max-w-2xl mx-auto mt-4 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_2.9s_forwards]">
              Coming to Bristol, Redfield — Spring 2026.
            </p>
            <p className="text-primary font-grotesk text-sm sm:text-base tracking-wide max-w-2xl mx-auto mt-1 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_3.1s_forwards]">
              Sign up below for early access.
            </p>
          </div>
        </div>

        {/* Tally Signup Form */}
        <div className="max-w-4xl mx-auto w-full -mt-8 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_3.5s_forwards]">
          <div className="bg-background/80 backdrop-blur-sm border-2 border-primary rounded-lg p-6">
            <iframe 
              data-tally-src="https://tally.so/embed/wdMvVD?transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height={253} 
              frameBorder={0} 
              marginHeight={0} 
              marginWidth={0} 
              title="For those who move first. Join the Renegade Below."
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
              <button onClick={() => navigate('/')} className="w-full h-16 p-4 border-0 bg-transparent flex justify-center items-center relative" aria-label="Back to Home">
                <div className="text-primary font-neogrotesk text-base font-bold tracking-wider">BACK TO HOME.</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeInSubtle_0.3s_ease-out_forwards] cursor-pointer"
          onClick={() => setExpandedImage(null)}
        >
          <img 
            src={expandedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-lg object-contain animate-[scale-in_0.3s_ease-out]"
          />
        </div>
      )}
    </main>
  );
};

export default ReformerSignup;
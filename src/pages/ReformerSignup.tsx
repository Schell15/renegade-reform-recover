import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ReformerSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #8f7668, #4b362f)'}}>
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
              <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-wider">
                RENEGADE.
              </h1>
              <h2 className="text-primary font-neogrotesk text-xl sm:text-3xl font-bold tracking-wider -mt-2">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #8f7668, #4b362f)'}}>
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
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-wider">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-neogrotesk text-xl sm:text-3xl font-bold tracking-wider -mt-2">
              REFORMER.
            </h2>
          </div>
          
          {/* Tagline */}
          <div className="mb-4">
            <p className="text-primary font-rosaline text-base sm:text-xl tracking-wider">
              A divinely powerful approach to pilates
            </p>
          </div>
        </div>

        {/* Tally Signup Form */}
        <div className="max-w-4xl mx-auto w-full -mt-4">
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

    </div>
  );
};

export default ReformerSignup;
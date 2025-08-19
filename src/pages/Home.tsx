import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Load Tally embed script if not already loaded
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = () => {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        } else {
          document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            (iframe as HTMLIFrameElement).src = (iframe as HTMLElement).dataset.tallySrc || '';
          });
        }
      };
      script.onerror = () => {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
          (iframe as HTMLIFrameElement).src = (iframe as HTMLElement).dataset.tallySrc || '';
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen font-grotesk flex flex-col items-center justify-between px-4 py-8 relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/fa3199e7-634e-40a9-84ce-a8160d03c596.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(2.17)'
    }}>
      <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Header Logo */}
        <div className="mb-10 animate-fade-in animate-scale-in" style={{animationDelay: '0.2s'}}>
          <img 
            src="/lovable-uploads/1ede165b-8759-4946-881c-10ae5ca83a30.png" 
            alt="Renegade Studios - reform. repower. recover" 
            className="mx-auto w-full max-w-lg h-auto object-contain"
          />
        </div>

        {/* Tally Signup Form */}
        <div className="w-full max-w-lg mx-auto mb-8">
          <iframe 
            data-tally-src="https://tally.so/embed/wdMvVD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
            loading="lazy" 
            width="100%" 
            height="216" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="For those who move first. Join the Renegade Below."
            className="border-0"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <div className="border-2 border-black transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button
              onClick={() => toast({
                title: "Coming Soon!",
                description: "Renegade Reformer will be available soon. Check back later!",
              })}
              className="w-[200px] h-20 p-0 border-0 bg-transparent"
              aria-label="Navigate to Renegade Reformer"
            >
              <img 
                src="/lovable-uploads/46819078-6da9-4f35-a421-d42eaf3c72d1.png"
                alt="Renegade Reformer Button"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
          
          {/* Vertical Separator */}
          <div className="hidden sm:block w-0.5 h-20 bg-black"></div>
          
          <div className="border-2 border-black transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button
              onClick={() => toast({
                title: "Coming Soon!",
                description: "Renegade Recovery will be available soon. Check back later!",
              })}
              className="w-[200px] h-20 p-0 border-0 bg-transparent"
              aria-label="Navigate to Renegade Recovery"
            >
              <img 
                src="/lovable-uploads/ef9fd42a-3bf0-4897-a169-ab84fa48363e.png"
                alt="Renegade Recovery Button"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Address Footer */}
      <div className="text-center text-black text-xs z-10 mt-6">
        <div>16 EMERY ROAD</div>
        <div>BRISLINGTON</div>
        <div>BRISTOL</div>
        <div>BS4 4PL</div>
      </div>
    </div>
  );
};

export default Home;
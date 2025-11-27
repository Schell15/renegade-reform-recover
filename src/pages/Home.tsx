import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  return <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #170701, #4f2202)'}}>
      <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Header Logo */}
        <div className="mb-10 animate-fade-in animate-scale-in" style={{
        animationDelay: '0.2s'
      }}>
          {/* White Eagle Logo */}
          <div className="mb-6">
            <img src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" alt="Renegade Studios Eagle Logo" className="w-32 h-32 mx-auto object-contain" />
          </div>
          
          {/* Studio Name */}
          <div className="mb-4 inline-block">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-bigcaslon text-xl sm:text-3xl tracking-tight -mt-2 text-right pr-2">
              Reformer
            </h2>
          </div>
          
          {/* Tagline */}
          <div className="mb-4">
            <p className="text-primary font-rosaline text-base sm:text-xl tracking-wider">
              reform . repower. recover
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center -mt-32">
          <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button onClick={() => navigate('/reformer-signup')} className="w-[200px] h-20 p-4 border-0 bg-transparent flex flex-col justify-center items-center gap-0 relative" aria-label="Navigate to Renegade Reformer">
              <div className="text-primary font-neogrotesk text-lg font-bold tracking-wider">RENEGADE.</div>
              <div className="text-primary font-rosaline text-sm tracking-wider -mt-1 ml-12">reformer</div>
            </button>
          </div>
          
          {/* Vertical Separator */}
          <div className="hidden sm:block w-0.5 h-20 bg-primary"></div>
          
          <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button onClick={() => toast({
            title: "Coming 2026."
          })} className="w-[200px] h-20 p-4 border-0 bg-transparent flex flex-col justify-center items-center gap-0 relative" aria-label="Navigate to Renegade Recovery">
              <div className="text-primary font-neogrotesk text-lg font-bold tracking-wider">RENEGADE.</div>
              <div className="text-primary font-rosaline text-sm tracking-wider -mt-1 ml-14">recover</div>
            </button>
          </div>
        </div>

        {/* Coming to Bristol Text */}
        <div className="mt-6">
          <p className="text-primary font-rosaline text-base tracking-wider">
Coming to Bristol 2025</p>
        </div>
      </div>
    </div>;
};
export default Home;
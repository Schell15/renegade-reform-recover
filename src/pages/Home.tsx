import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Floating 3D Rings Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Ring 1 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-pulse" style={{animationDelay: '0s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-stone-300/40 to-stone-500/60 shadow-2xl relative">
            <div className="absolute inset-4 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),_0_8px_16px_rgba(0,0,0,0.1)]"></div>
          </div>
        </div>

        {/* Medium Ring 1 */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-stone-400/50 to-stone-300/30 shadow-xl relative transform rotate-12">
            <div className="absolute inset-3 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.15),_0_6px_12px_rgba(0,0,0,0.08)]"></div>
          </div>
        </div>

        {/* Large Ring 2 */}
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-stone-200/35 to-stone-600/55 shadow-2xl relative transform -rotate-6">
            <div className="absolute inset-5 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_5px_10px_rgba(0,0,0,0.25),_0_10px_20px_rgba(0,0,0,0.12)]"></div>
          </div>
        </div>

        {/* Medium Ring 2 */}
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 animate-pulse" style={{animationDelay: '1.5s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-stone-500/45 to-stone-200/25 shadow-xl relative transform rotate-45">
            <div className="absolute inset-3.5 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.18),_0_7px_14px_rgba(0,0,0,0.09)]"></div>
          </div>
        </div>

        {/* Small Ring 1 */}
        <div className="absolute top-1/2 left-1/6 w-20 h-20 animate-pulse" style={{animationDelay: '0.5s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-stone-300/40 to-stone-400/50 shadow-lg relative transform -rotate-30">
            <div className="absolute inset-2.5 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.15),_0_4px_8px_rgba(0,0,0,0.08)]"></div>
          </div>
        </div>

        {/* Large Ring 3 */}
        <div className="absolute top-1/6 right-1/6 w-36 h-36 animate-pulse" style={{animationDelay: '2.5s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-stone-400/45 to-stone-500/65 shadow-2xl relative transform rotate-20">
            <div className="absolute inset-4.5 rounded-full bg-cream shadow-inner"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.22),_0_8px_16px_rgba(0,0,0,0.11)]"></div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-12 max-w-4xl relative z-10">
        {/* Main Header Logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/fecb6f63-fe92-4447-bbca-dcd4b28e0a20.png" 
            alt="Renegade Studios - reform. repower. recover" 
            className="mx-auto w-full max-w-2xl h-auto object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="border-2 border-black transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button
              onClick={() => navigate('/reformer')}
              className="w-[333px] h-32 p-0 border-0 bg-transparent"
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
          <div className="hidden sm:block w-0.5 h-32 bg-black"></div>
          
          <div className="border-2 border-black transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button
              onClick={() => navigate('/recover')}
              className="w-[333px] h-32 p-0 border-0 bg-transparent"
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
    </div>
  );
};

export default Home;
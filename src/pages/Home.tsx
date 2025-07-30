import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Floating 3D Rings Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-secondary/30 shadow-lg animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border-4 border-secondary/20 shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border-4 border-secondary/25 shadow-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full border-4 border-secondary/15 shadow-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-20 h-20 rounded-full border-4 border-secondary/20 shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-36 h-36 rounded-full border-4 border-secondary/25 shadow-lg animate-pulse" style={{animationDelay: '2.5s'}}></div>
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
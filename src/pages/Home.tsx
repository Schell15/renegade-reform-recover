import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen font-grotesk flex flex-col items-center justify-between px-4 py-8 relative overflow-hidden bg-background">
      <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Header Logo */}
        <div className="mb-10 animate-fade-in animate-scale-in" style={{
        animationDelay: '0.2s'
      }}>
          {/* White Eagle Logo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" 
              alt="Renegade Studios Eagle Logo" 
              className="w-60 h-60 mx-auto object-contain"
            />
          </div>
          
          {/* Studio Name */}
          <div className="mb-4">
            <h1 className="text-primary font-neogrotesk text-2xl sm:text-3xl font-bold tracking-wider">
              RENEGADE<br />STUDIOS.
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="mb-8">
            <p className="text-primary font-rosaline text-sm sm:text-base tracking-wider">
              reform . repower. recover
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button onClick={() => navigate('/reformer-signup')} className="w-[200px] h-20 p-0 border-0 bg-transparent" aria-label="Navigate to Renegade Reformer">
              <img src="/lovable-uploads/46819078-6da9-4f35-a421-d42eaf3c72d1.png" alt="Renegade Reformer Button" className="w-full h-full object-contain" />
            </button>
          </div>
          
          {/* Vertical Separator */}
          <div className="hidden sm:block w-0.5 h-20 bg-primary"></div>
          
          <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button onClick={() => navigate('/recover')} className="w-[200px] h-20 p-0 border-0 bg-transparent" aria-label="Navigate to Renegade Recovery">
              <img src="/lovable-uploads/ef9fd42a-3bf0-4897-a169-ab84fa48363e.png" alt="Renegade Recovery Button" className="w-full h-full object-contain" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Address Footer */}
      <div className="text-center text-primary text-xs z-10 mt-6">
        <div>16 EMERY ROAD</div>
        <div>BRISLINGTON</div>
        <div>BRISTOL</div>
        <div>BS4 4PL</div>
      </div>
    </div>;
};
export default Home;
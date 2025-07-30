import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import renegadeHeaderMain from "@/assets/renegade-header-main.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-12 max-w-4xl">
        {/* Main Header Logo */}
        <div className="mb-16">
          <img 
            src={renegadeHeaderMain} 
            alt="Renegade Studios - reform. repower. recover" 
            className="mx-auto w-full max-w-2xl h-auto object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button
            onClick={() => navigate('/reformer')}
            className="group relative overflow-hidden"
          >
            <div className="w-80 h-24 border-2 border-primary bg-transparent hover:bg-primary transition-all duration-300 rounded-md flex items-center justify-center">
              <span className="text-xl font-medium tracking-wider uppercase text-primary group-hover:text-primary-foreground transition-colors duration-300">
                RENEGADE. reformer
              </span>
            </div>
          </button>
          
          <button
            onClick={() => navigate('/recover')}
            className="group relative overflow-hidden"
          >
            <div className="w-80 h-24 border-2 border-primary bg-transparent hover:bg-primary transition-all duration-300 rounded-md flex items-center justify-center">
              <span className="text-xl font-medium tracking-wider uppercase text-primary group-hover:text-primary-foreground transition-colors duration-300">
                RENEGADE. recovery
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
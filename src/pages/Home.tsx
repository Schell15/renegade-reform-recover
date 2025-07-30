import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-12 max-w-4xl">
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
              className="w-[416px] h-32 p-0 border-0 bg-transparent"
              aria-label="Navigate to Renegade Reformer"
            >
              <img 
                src="/lovable-uploads/46819078-6da9-4f35-a421-d42eaf3c72d1.png"
                alt="Renegade Reformer Button"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
          
          <div className="border-2 border-black transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
            <button
              onClick={() => navigate('/recover')}
              className="w-[416px] h-32 p-0 border-0 bg-transparent"
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
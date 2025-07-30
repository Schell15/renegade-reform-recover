import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/fa3199e7-634e-40a9-84ce-a8160d03c596.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="text-center space-y-12 max-w-4xl relative z-10">
        {/* Main Header Logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/cd778455-8416-4101-ab3b-2c4df8ab7221.png" 
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
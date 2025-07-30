import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import renegadeLogo from "@/assets/renegade-logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={renegadeLogo} 
            alt="Renegade Studios" 
            className="mx-auto h-32 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-2xl md:text-3xl font-serif italic text-primary tracking-wide">
          reform. repower. recover
        </h1>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/reformer')}
            className="w-64 h-14 text-lg font-medium tracking-wider uppercase border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            RENEGADE. reformer
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/recover')}
            className="w-64 h-14 text-lg font-medium tracking-wider uppercase border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            RENEGADE. recovery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import renegadeMainLogo from "@/assets/renegade-main-logo.png";
import renegadeRecoveryButton from "@/assets/renegade-recovery-button.png";
import renegadeReformerButton from "@/assets/renegade-reformer-button.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={renegadeMainLogo} 
            alt="Renegade Studios" 
            className="mx-auto h-40 w-auto object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button
            onClick={() => navigate('/reformer')}
            className="w-64 h-20 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: `url(${renegadeReformerButton})` }}
            aria-label="Navigate to Renegade Reformer"
          />
          
          <button
            onClick={() => navigate('/recover')}
            className="w-64 h-20 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: `url(${renegadeRecoveryButton})` }}
            aria-label="Navigate to Renegade Recovery"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
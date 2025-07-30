import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import renegadeHeaderMain from "@/assets/renegade-header-main.png";
import renegadeRecoveryButton from "@/assets/renegade-recovery-button.png";
import renegadeReformerButton from "@/assets/renegade-reformer-button.png";

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
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(${renegadeReformerButton})` }}
            aria-label="Navigate to Renegade Reformer"
          />
          
          <button
            onClick={() => navigate('/recover')}
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(${renegadeRecoveryButton})` }}
            aria-label="Navigate to Renegade Recovery"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
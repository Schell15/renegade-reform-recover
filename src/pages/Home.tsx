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
          <button
            onClick={() => navigate('/reformer')}
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(/lovable-uploads/25069f3d-a5c5-4782-8bbe-a384fdda2e92.png)` }}
            aria-label="Navigate to Renegade Reformer"
          />
          
          <button
            onClick={() => navigate('/recover')}
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(/lovable-uploads/4dd2cda4-483b-4ad3-8c89-da432f15972c.png)` }}
            aria-label="Navigate to Renegade Recovery"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
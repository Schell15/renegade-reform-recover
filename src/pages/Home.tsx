import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-grotesk flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-12 max-w-4xl">
        {/* Main Header Logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/fe9d56ea-77de-4fdc-930d-23f546ccc6fa.png" 
            alt="Renegade Studios - reform. repower. recover" 
            className="mx-auto w-full max-w-2xl h-auto object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button
            onClick={() => navigate('/reformer')}
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(/lovable-uploads/59b68da1-d01e-4bae-bd9c-1aacb69353a8.png)` }}
            aria-label="Navigate to Renegade Reformer"
          />
          
          <button
            onClick={() => navigate('/recover')}
            className="w-80 h-24 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
            style={{ backgroundImage: `url(/lovable-uploads/e78a67eb-6331-43bf-a793-23df83f993ca.png)` }}
            aria-label="Navigate to Renegade Recovery"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
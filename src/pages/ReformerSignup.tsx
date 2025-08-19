import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ReformerSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save to database when backend is implemented
    console.log("Signup data:", { name, email });
    
    setIsSubmitted(true);
    toast({
      title: "Thank you!",
      description: "We'll notify you when Renegade Reformer goes live.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8" style={{
        backgroundImage: `url('/lovable-uploads/fa3199e7-634e-40a9-84ce-a8160d03c596.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(2.17)'
      }}>
        <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
            <CardDescription>
              We'll notify you as soon as Renegade Reformer is live.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => navigate('/')}
              className="w-full"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8" style={{
      backgroundImage: `url('/lovable-uploads/fa3199e7-634e-40a9-84ce-a8160d03c596.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(2.17)'
    }}>
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Logo */}
        <div className="text-center">
          <img 
            src="/lovable-uploads/1ede165b-8759-4946-881c-10ae5ca83a30.png" 
            alt="Renegade Studios" 
            className="mx-auto w-full max-w-sm h-auto object-contain mb-6"
          />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Renegade Reformer</CardTitle>
            <CardDescription className="text-lg">
              Coming Soon! Be the first to know when we launch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Notify Me When Live
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-sm"
              >
                ← Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReformerSignup;
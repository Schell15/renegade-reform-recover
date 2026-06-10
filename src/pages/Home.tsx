import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  return <main className="min-h-screen font-grotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden" style={{
    background: 'radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)'
  }}>
      <SEO
        title="Reformer Pilates Studio in Bristol | Renegade Reformer"
        description="Renegade Reformer is a premium Reformer Pilates studio in Bristol. Strength-led, contemporary classes opening Spring 2026 — get early access now."
        path="/"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Main Header Logo */}
        <div className="animate-fade-in animate-scale-in" style={{
        animationDelay: '0.2s'
      }}>
          {/* White Eagle Logo */}
          <div className="mb-6">
            <img src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" alt="Renegade Reformer eagle logo — reformer Pilates Bristol" className="w-32 h-32 mx-auto object-contain" />
          </div>
          
          {/* Studio Name */}
          <div className="mb-4 inline-block">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-bigcaslon text-4xl sm:text-6xl tracking-tight -mt-2 text-right">reformer</h2>
          </div>
        </div>
        <p className="sr-only">Reformer Pilates Studio in Bristol</p>

        {/* Tagline */}
        <p className="font-light uppercase text-center mb-[52px]" style={{ fontSize: '11px', letterSpacing: '0.35em', color: '#8a6e50' }}>
          reform &nbsp;&middot;&nbsp; repower &nbsp;&middot;&nbsp; recover
        </p>

        {/* Divider + CTA grid */}
        <div className="w-full" style={{ maxWidth: 'min(600px, 86vw)' }}>
          <div style={{ height: '0.5px', background: '#4a2e12' }} aria-hidden="true"></div>
          <nav className="grid grid-cols-3" aria-label="Site sections" style={{ borderBottom: '0.5px solid #4a2e12' }}>
            <button
              onClick={() => navigate('/reformer-signup')}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderTop: '0.5px solid #4a2e12' }}
            >
              <span className="block uppercase font-bold mb-[5px]" style={{ fontSize: '13px', letterSpacing: '0.14em', color: '#f0ebe3' }}>Early Access</span>
              <span className="block uppercase font-light" style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#6a5035' }}>Sign up now</span>
            </button>
            <button
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "Reformer Pilates class details will be available shortly.",
                });
              }}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderTop: '0.5px solid #4a2e12', borderLeft: '0.5px solid #4a2e12', borderRight: '0.5px solid #4a2e12' }}
            >
              <span className="block uppercase font-bold mb-[5px]" style={{ fontSize: '13px', letterSpacing: '0.14em', color: '#f0ebe3' }}>Reformer Pilates</span>
              <span className="block uppercase font-light" style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#6a5035' }}>Full Class Info</span>
            </button>
            <button
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "Pricing details will be available shortly.",
                });
              }}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderTop: '0.5px solid #4a2e12' }}
            >
              <span className="block uppercase font-bold mb-[5px]" style={{ fontSize: '13px', letterSpacing: '0.14em', color: '#f0ebe3' }}>Pricing</span>
              <span className="block uppercase font-light" style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#6a5035' }}>Founders discount</span>
            </button>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-9 text-center">
          <p className="uppercase font-light mb-2" style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#6a5035' }}>A divinely powerful approach to pilates</p>
          <p className="uppercase" style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#b8a080' }}>Coming to Bristol 2026</p>
        </div>
      </div>
    </main>;
};
export default Home;
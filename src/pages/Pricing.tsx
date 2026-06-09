import { SEO } from "@/components/SEO";

const Pricing = () => {
  return (
    <main className="min-h-screen w-full" style={{ background: 'linear-gradient(to bottom, #170701, #4f2202)' }}>
      <SEO
        title="Pricing & Packages | Renegade Reformer Bristol"
        description="Reformer Pilates pricing at Renegade Reformer Bristol — drop-in classes, intro offers, monthly memberships and class packs with founders' discount."
        path="/pricing"
      />
      <iframe
        src="/pricing.html"
        title="Renegade Reformer Pricing"
        className="w-full min-h-screen border-0 block"
        style={{ height: '100vh' }}
      />
    </main>
  );
};

export default Pricing;
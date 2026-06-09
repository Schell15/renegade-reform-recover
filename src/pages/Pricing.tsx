import { SEO } from "@/components/SEO";

const Pricing = () => {
  return (
    <main className="min-h-screen w-full" style={{ background: 'linear-gradient(to bottom, #170701, #4f2202)' }}>
      <SEO
        title="Reformer Pilates Pricing Bristol | Renegade Reformer"
        description="Explore Renegade Reformer's class packages and membership options. Flexible pricing for reformer Pilates in Bristol — find the plan that works for you."
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
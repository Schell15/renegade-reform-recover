import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";

import reformer1 from "@/assets/renegade_reformer_1.png";
import reformer2 from "@/assets/renegade_reformer_2.png";
import reformer3 from "@/assets/renegade_reformer_3.png";
import reformer4 from "@/assets/renegade_reformer_4.png";

const momenceEmbed = `<div id="momence-plugin-lead-form"></div>
<script
    async
    type="module"
    id="momence-plugin-lead-form-src"
    host_id="227483"
    fields="fullName,email,phoneNumber,A45Frrq"
    token="zQ7OKzkB7l"
    country_code="gb"
    data-field-def='{"fullName":{"type":"text","label":"Full name","required":true,"hidden":false},"email":{"type":"email","label":"Email","required":true},"phoneNumber":{"type":"phone-number","label":"Phone number","required":true},"A45Frrq":{"type":"text","label":"What elevates a Reformer class or studio for you? ","required":true,"hidden":false}}'
    src="https://momence.com/plugin/lead-form/lead-form.js"
></script>
<style>
:root {
    --momenceColorBackground: #140800;
    --momenceColorPrimary: 240, 230, 214;
    --momenceColorBlack: 240, 230, 214;
}
</style>`;

const ReformerSignup = () => {
  const navigate = useNavigate();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen font-grotesk flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" style={{background: 'radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)'}}>
      <SEO
        title="Join Renegade Reformer | Sign Up for Reformer Pilates Bristol"
        description="Sign up for early access to Renegade Reformer, Bristol's strength-led reformer Pilates studio. Be the first to book when we open."
        path="/reformer-signup"
      />
      <div className="text-center space-y-7 max-w-3xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Header Logo */}
        <div className="mb-10">
          {/* White Eagle Logo */}
          <div className="mb-6 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.1s_forwards]">
            <button 
              onClick={() => navigate('/')} 
              className="mx-auto block transition-transform hover:scale-105"
              aria-label="Back to Home"
            >
              <img 
                src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" 
                alt="Renegade Reformer eagle logo, reformer Pilates Bristol"
                className="w-32 h-32 mx-auto object-contain cursor-pointer"
              />
            </button>
          </div>
          
          {/* Studio Name */}
          <div className="mb-4 inline-block opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.5s_forwards]">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-bigcaslon text-4xl sm:text-6xl tracking-tight -mt-2 text-right">reformer</h2>
          </div>
          <p className="sr-only">Join Renegade Reformer Bristol</p>
          
          {/* Tagline */}
          <div className="mb-4">
            <p className="text-primary font-rosaline text-base sm:text-xl tracking-wider opacity-0 animate-[fadeInSubtle_0.8s_ease-out_0.9s_forwards]">
              A divinely powerful approach to pilates
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <img src={reformer1} alt="Renegade Reformer studio interior render, reformer Pilates Bristol" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideDown_0.6s_ease-out_1.2s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer1)} />
              <img src={reformer2} alt="Renegade Reformer studio floor plan, reformer Pilates Bristol" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideUp_0.6s_ease-out_1.5s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer2)} />
              <img src={reformer3} alt="Renegade Reformer brand colour palette, reformer Pilates Bristol" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideDown_0.6s_ease-out_1.8s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer3)} />
              <img src={reformer4} alt="Renegade Reformer exterior sketch, reformer Pilates Bristol" className="w-full h-auto rounded-lg object-cover opacity-0 animate-[slideUp_0.6s_ease-out_2.1s_forwards] cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setExpandedImage(reformer4)} />
            </div>
            <p className="text-primary text-sm tracking-wide max-w-2xl mx-auto mt-6 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_2.5s_forwards] font-sans px-0 py-[50px] font-extrabold sm:text-base">
              Renegade is a community-led, pilates experience. We introduce a new concept to bristol, fusing pilates, fitness, immersive set design and interactive audio & lighting production to guide your flow. Designed and built by some of bristol’s finest creative minds. The first of its kind in the UK.
            </p>
          </div>
        </div>

        {/* Momence Lead Form */}
        <div className="max-w-4xl mx-auto w-full -mt-8 opacity-0 animate-[fadeInSubtle_0.8s_ease-out_3.5s_forwards]">
          <div dangerouslySetInnerHTML={{ __html: momenceEmbed }} />

          <div className="mt-6 text-center">
            <div className="border-2 border-primary transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
              <button onClick={() => navigate('/')} className="w-full h-16 p-4 border-0 bg-transparent flex justify-center items-center relative" aria-label="Back to Home">
                <div className="text-primary font-neogrotesk text-base font-bold tracking-wider">BACK TO HOME.</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeInSubtle_0.3s_ease-out_forwards] cursor-pointer"
          onClick={() => setExpandedImage(null)}
        >
          <img 
            src={expandedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-lg object-contain animate-[scale-in_0.3s_ease-out]"
          />
        </div>
      )}
    </main>
  );
};

export default ReformerSignup;

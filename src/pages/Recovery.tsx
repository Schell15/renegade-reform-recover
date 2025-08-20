import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Recovery = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background dark font-grotesk text-foreground">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center gap-2 text-foreground hover:bg-accent">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-medium text-foreground">renegade.recover</h1>
        </div>
      </header>

      {/* Logo Section */}
      <section className="text-center py-8">
        <button 
          onClick={() => navigate('/')} 
          className="mx-auto block transition-transform hover:scale-105"
          aria-label="Back to Home"
        >
          <img 
            src="/lovable-uploads/6d24f46b-0611-475f-b70f-81f24ce0e64d.png" 
            alt="Renegade Recovery Logo" 
            className="mx-auto max-w-md w-full h-auto animate-fade-in cursor-pointer"
          />
        </button>
      </section>

      {/* Separator Line */}
      <div className="max-w-4xl mx-auto px-4">
        <hr className="border-t border-border/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Restore & Renew</h2>
          <div className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-6">
            <p>
              Located next door to our Reformer Pilates studio, Renegade Recover is a purpose-built wellness suite offering contrast therapy for body, mind and muscle. Open to all members of the public aged 18 and over, it is an adults-only space designed for deep recovery and quiet reset.
            </p>
            <p>
              At the heart of the experience is a curated thermal circuit, featuring two distinct sauna options: a traditional coal-fired sauna for dry, penetrating heat, and an infrared carbon-panel sauna for gentle, muscle-targeted therapy.
            </p>
            <p>
              These are paired with cold plunge tanks, overhead bucket pulls and therapeutic showers to promote circulation, reduce inflammation and reset the nervous system. Whether used as a follow-on from a Pilates session next door or as a stand-alone visit, Renegade Recover offers a restorative contrast of hot and cold designed to help you decompress, restore balance and build long-term resilience.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Recovery Space</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/86840907-ee69-4e5d-8a4c-4b3936ace326.png" alt="Red light therapy recovery room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/c7d99545-1023-4978-98cd-ec78ab0d58bc.png" alt="Recovery massage table area" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/d5bd1570-1542-4706-8224-f1296e1f6dcb.png" alt="Recovery room with wooden lockers" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/a3723427-0cb6-40ea-9408-28234f2f8fd1.png" alt="Sauna interior with wooden benches" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/8fe03607-e67c-476a-b171-106162aea276.png" alt="Steamy sauna with ambient lighting" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img src="/lovable-uploads/b3cf33c3-11ae-445a-af1e-3fcc74831dcd.png" alt="Red light therapy session" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Practitioner Bio */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-foreground px-[13px]">Reclaim Your Energy. Renegade the Price.</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h4 className="text-xl font-medium text-foreground mb-4">Pricing</h4>
              
              <p>Access to Renegade Recover is simple and transparent. A flat entry fee of £15 grants you access to one of only 12 strictly limited spaces per hour. We recommend a 60-minute visit to allow for up to four full cycles of contrast therapy across our traditional coal sauna, infrared sauna, cold plunge tanks, bucket pulls and showers. This structure ensures a balanced, safe and restorative session.</p>

              <p>We deliberately limit capacity to avoid overcrowding, giving each visitor the space and tranquillity to engage with the facilities in a calm, non-intrusive environment.</p>

              <p>For clients attending Pilates classes at our Reformer studio next door, recovery access can be added at a discounted rate of £4, provided it is pre-purchased at the time of booking.</p>

              <p>Discounted membership packages and multi-session passes are available. Full details can be found below.</p>
              
            </div>
          </div>
          <div className="rounded-lg aspect-square overflow-hidden">
            <img src="/lovable-uploads/d995e283-945b-4021-ad4a-9b8396930652.png" alt="Renegade Recovery Practitioner" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Flexible Session Bundles */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Flexible Session Bundles</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Single Drop-In */}
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-foreground">Single Drop-In</CardTitle>
                <div className="text-3xl font-medium text-foreground mt-2">£15</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-muted-foreground space-y-2">
                  <p>• 1-hour session</p>
                  <p>• Access to all contrast therapy zones</p>
                  <p>• Book anytime within available slots</p>
                </div>
              </CardContent>
            </Card>

            {/* 5-Session Bundle */}
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-foreground">5-Session Bundle</CardTitle>
                <div className="text-3xl font-medium text-foreground mt-2">£60</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-muted-foreground space-y-2">
                  <p>• Save £15 (£12 per session)</p>
                  <p>• Valid for 3 months</p>
                  <p>• Ideal for casual but returning guests</p>
                </div>
                <div className="pt-4 text-center">
                  <span className="text-sm text-muted-foreground">⸻</span>
                </div>
              </CardContent>
            </Card>

            {/* 10-Session Bundle */}
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-foreground">10-Session Bundle</CardTitle>
                <div className="text-3xl font-medium text-foreground mt-2">£100</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-muted-foreground space-y-2">
                  <p>• Save £50 (£10 per session)</p>
                  <p>• Valid for 6 months</p>
                  <p>• Best value for regulars who don't want monthly commitments</p>
                </div>
                <div className="pt-4 text-center">
                  <span className="text-sm text-muted-foreground">⸻</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recovery Philosophy */}
        <section className="text-center space-y-8">
          <h3 className="text-3xl font-light text-foreground">Our Recovery Philosophy</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">At Renegade Recovery, we believe recovery is not a luxury — it’s a vital part of sustainable wellbeing. True strength is built not just in movement, but in the moments we slow down, reset and reconnect with ourselves. </p>
            <p>Through contrast therapy, we harness the science of heat and cold to restore balance to the body, regulate the nervous system, and create space for both physical and mental clarity. Whether you’ve just trained or simply need a pause from daily intensity, our recovery suite is designed to help you feel centred, recharged and ready to go again.</p>
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Find Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-foreground">Location</h4>
              <p className="text-muted-foreground">
                Renegade Studios<br />
                16 Emery Road<br />
                Brislington<br />
                Bristol<br />
                BS4 5PL
              </p>
              <p className="text-muted-foreground">
                Private entrance with dedicated parking. Appointment-only facility for your privacy and comfort.
              </p>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.089644!2d-2.5394!3d51.4301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e7f1e9b8f7f%3A0x1e9b8f7f1e9b8f7f!2s16%20Emery%20Rd%2C%20Brislington%2C%20Bristol%20BS4%205PL!5e0!3m2!1sen!2suk!4v1635785892000!5m2!1sen!2suk&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Renegade Studios Location"
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Book Your Session</h3>
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="recovery-name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="recovery-name" placeholder="Your name" className="bg-background border-border" />
                </div>
                <div>
                  <label htmlFor="recovery-email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="recovery-email" type="email" placeholder="your.email@example.com" className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label htmlFor="recovery-message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="recovery-message" placeholder="Tell us about your recovery goals and any specific concerns..." rows={5} className="bg-background border-border" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>;
};
export default Recovery;
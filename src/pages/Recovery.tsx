import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Recovery = () => {
  const navigate = useNavigate();
  const sessionSchedule = [{
    time: "9:00 AM",
    service: "Deep Tissue Massage",
    duration: "60 min",
    practitioner: "David"
  }, {
    time: "10:30 AM",
    service: "Sports Recovery",
    duration: "90 min",
    practitioner: "Emma"
  }, {
    time: "1:00 PM",
    service: "Therapeutic Massage",
    duration: "60 min",
    practitioner: "Lisa"
  }, {
    time: "2:30 PM",
    service: "Injury Rehabilitation",
    duration: "45 min",
    practitioner: "David"
  }, {
    time: "4:00 PM",
    service: "Relaxation Therapy",
    duration: "75 min",
    practitioner: "Emma"
  }];
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
        <img src="/lovable-uploads/6d24f46b-0611-475f-b70f-81f24ce0e64d.png" alt="Renegade Recovery Logo" className="mx-auto max-w-md w-full h-auto animate-fade-in" />
      </section>

      {/* Separator Line */}
      <div className="max-w-4xl mx-auto px-4">
        <hr className="border-t border-border/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Restore & Renew</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Located next door to our Reformer Pilates studio, Renegade Recover is a purpose-built wellness suite offering contrast therapy for body, mind and muscle. Open to all members of the public aged 18 and over, it is an adults-only space designed for deep recovery and quiet reset.

At the heart of the experience is a curated thermal circuit, featuring two distinct sauna options: a traditional coal-fired sauna for dry, penetrating heat, and an infrared carbon-panel sauna for gentle, muscle-targeted therapy.

 These are paired with cold plunge tanks, overhead bucket pulls and therapeutic showers to promote circulation, reduce inflammation and reset the nervous system. Whether used as a follow-on from a Pilates session next door or as a stand-alone visit, Renegade Recover offers a restorative contrast of hot and cold designed to help you decompress, restore balance and build long-term resilience.</p>
        </section>

        {/* Session Schedule */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Session Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-4 text-left font-medium text-foreground">Time</th>
                  <th className="px-6 py-4 text-left font-medium text-foreground">Service</th>
                  <th className="px-6 py-4 text-left font-medium text-foreground">Duration</th>
                  <th className="px-6 py-4 text-left font-medium text-foreground">Practitioner</th>
                </tr>
              </thead>
              <tbody>
                {sessionSchedule.map((session, index) => <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 text-foreground">{session.time}</td>
                    <td className="px-6 py-4 text-foreground font-medium">{session.service}</td>
                    <td className="px-6 py-4 text-muted-foreground">{session.duration}</td>
                    <td className="px-6 py-4 text-foreground">{session.practitioner}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </section>

        {/* Practitioner Bio */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-foreground">Expert Practitioners</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our team of licensed therapists and recovery specialists brings decades of combined 
                experience in sports medicine, therapeutic massage, and holistic wellness.
              </p>
              <p>
                Each practitioner is trained in multiple modalities, ensuring personalized treatment 
                plans that address your specific recovery needs, whether you're an elite athlete 
                or seeking relief from everyday stress.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <span className="text-muted-foreground">Practitioner Photo Placeholder</span>
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

        {/* Recovery Philosophy */}
        <section className="text-center space-y-8">
          <h3 className="text-3xl font-light text-foreground">Our Recovery Philosophy</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Recovery is not just about healing—it's about optimization. Our approach integrates 
              cutting-edge recovery techniques with time-tested therapeutic practices to help you 
              perform at your peak.
            </p>
            <p>
              We believe in treating the whole person, not just symptoms. Every session is tailored 
              to your unique needs, goals, and recovery timeline. Our serene environment promotes 
              deep relaxation and accelerated healing.
            </p>
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-3xl font-light text-foreground mb-8 text-center">Find Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-foreground">Location</h4>
              <p className="text-muted-foreground">
                Emery Road, Brislington<br />
                Bristol, UK
              </p>
              <p className="text-muted-foreground">
                Private entrance with dedicated parking. Appointment-only facility for your privacy and comfort.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Google Maps - Emery Road, Brislington</span>
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
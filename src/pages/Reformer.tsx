import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

const Reformer = () => {
  const navigate = useNavigate();

  const classSchedule = [
    { time: "6:00 AM", day: "Monday", class: "Morning Flow", instructor: "Sarah" },
    { time: "7:30 AM", day: "Monday", class: "Strength & Stretch", instructor: "Mike" },
    { time: "6:00 AM", day: "Tuesday", class: "Core Focus", instructor: "Emma" },
    { time: "7:30 AM", day: "Tuesday", class: "Power Reformer", instructor: "Sarah" },
    { time: "6:00 AM", day: "Wednesday", class: "Gentle Flow", instructor: "Lisa" },
    { time: "7:30 AM", day: "Wednesday", class: "Athletic Reformer", instructor: "Mike" },
  ];

  return (
    <div className="min-h-screen bg-cream font-grotesk">
      <SEO
        title="Reformer Pilates Classes | Renegade Reformer Bristol"
        description="Reformer Pilates classes at Renegade Reformer in Lawrence Hill, Bristol. Strength-led, music-driven sessions for every level. Founding rates now live."
        path="/reformer"
      />
      {/* Header */}
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:bg-button-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-medium text-primary">RENEGADE. reformer</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-primary">Transform Your Body</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the power of Pilates reformer training in our state-of-the-art studio. 
            Build strength, improve flexibility, and discover your body's potential.
          </p>
        </section>

        {/* Class Timetable */}
        <section>
          <h3 className="text-3xl font-light text-primary mb-8 text-center">Class Timetable</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-4 text-left font-medium text-primary">Time</th>
                  <th className="px-6 py-4 text-left font-medium text-primary">Day</th>
                  <th className="px-6 py-4 text-left font-medium text-primary">Class</th>
                  <th className="px-6 py-4 text-left font-medium text-primary">Instructor</th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((session, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 text-foreground">{session.time}</td>
                    <td className="px-6 py-4 text-foreground">{session.day}</td>
                    <td className="px-6 py-4 text-foreground font-medium">{session.class}</td>
                    <td className="px-6 py-4 text-foreground">{session.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Instructor Bio */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-primary">Meet Your Instructor</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sarah brings over 10 years of experience in Pilates and movement therapy. 
                Her approach combines classical Pilates principles with modern biomechanics.
              </p>
              <p>
                Certified in multiple Pilates modalities, Sarah specializes in helping clients 
                build strength, improve posture, and develop mind-body awareness through precise, 
                controlled movement.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <span className="text-muted-foreground">Instructor Photo Placeholder</span>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h3 className="text-3xl font-light text-primary mb-8 text-center">Studio Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <span className="text-muted-foreground">Studio Image {item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About the Studio */}
        <section className="text-center space-y-8">
          <h3 className="text-3xl font-light text-primary">Our Methodology</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              At Renegade Studios, we believe in the transformative power of mindful movement. 
              Our reformer classes combine traditional Pilates principles with contemporary 
              fitness science to deliver results that go beyond the physical.
            </p>
            <p>
              Every session is designed to challenge your body while respecting its limitations, 
              promoting not just strength and flexibility, but also mental clarity and confidence. 
              Our small class sizes ensure personalized attention and proper form.
            </p>
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-3xl font-light text-primary mb-8 text-center">Visit Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-primary">Location</h4>
              <p className="text-muted-foreground">
                Emery Road, Brislington<br />
                Bristol, UK
              </p>
              <p className="text-muted-foreground">
                Easily accessible by car and public transport. Free parking available.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Google Maps - Emery Road, Brislington</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h3 className="text-3xl font-light text-primary mb-8 text-center">Get In Touch</h3>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and any questions you have..."
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Reformer;
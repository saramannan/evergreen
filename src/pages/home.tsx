import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Users, Activity, Sparkles, Clock, Sun, Moon, Coffee, Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const bookCircleImage = `${import.meta.env.BASE_URL}images/book-circle.png`;
const gentleYogaImage = `${import.meta.env.BASE_URL}images/gentle-yoga.png`;
const intergenerationalImage = `${import.meta.env.BASE_URL}images/intergenerational.png`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif text-2xl font-semibold text-primary">Evergreen</div>
        <div className="hidden md:flex gap-8 items-center text-lg text-foreground/80 font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
          <a href="#families" className="hover:text-primary transition-colors">Families</a>
          <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-8 hover:bg-primary/90 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Visit Us
          </Button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-8 max-w-xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 text-secondary font-medium text-lg uppercase tracking-widest">
              <Sparkles className="w-5 h-5" />
              <span>A sanctuary of dignity</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl leading-[1.1] text-foreground">
              A Welcoming Space for Our <span className="text-primary italic">Elders</span>.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A warm, welcoming space where older Muslim adults can connect, share stories, and strengthen their bodies gently. Rooted in respect, built for community.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[380px] md:h-[500px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src={bookCircleImage}
              alt="Elders sharing a book" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy / About */}

      {/* 3. The Space / Sanctuary */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src={gentleYogaImage} alt="Warm lit room" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We purposefully designed Evergreen to avoid feeling clinical or institutional. Here, every room breathes. Natural light, comfortable seating, and familiar architectural touches create an environment that feels like an extension of a beloved home or a peaceful masjid courtyard.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              It is a space that honors its people, recognizing that beauty and comfort are essential to human dignity.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 5. A Typical Day / Schedule */}
      <section id="schedule" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl text-foreground">The Rhythm of the Day</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">Structured for engagement, paced for comfort. Members are free to join activities or simply enjoy the space. Below is an example of a typical day at Evergreen.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border/50">
          {[
            { time: "9:00 AM", title: "Morning Welcome & Tea", icon: Sun, desc: "A gentle start with herbal tea, dates, and warm conversation as members arrive." },
            { time: "10:30 AM", title: "Gentle Movement", icon: Activity, desc: "Chair yoga and light stretching to awaken the body, led by senior-specialized trainers." },
            { time: "12:00 PM", title: "Poetry & Reflection", icon: BookOpen, desc: "Reading circles sharing classical poetry and personal stories in a supportive group." },
            { time: "1:30 PM", title: "Community Lunch", icon: Coffee, desc: "A nutritious, halal meal prepared fresh, enjoyed together in our main dining hall." },
            { time: "3:00 PM", title: "Wellness & Workshops", icon: Users, desc: "Rotating sessions including health education, crafts, or intergenerational visits." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-background border-4 border-[#FDF8F0] shadow-sm text-primary absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10">
                <item.icon className="w-6 h-6" />
              </div>
              
              <div className="w-full ml-20 md:ml-0 md:w-5/12 p-6 md:p-8 bg-card rounded-2xl shadow-sm border border-border/50 group-hover:shadow-md transition-shadow">
                <span className="text-secondary font-semibold text-lg tracking-wider mb-2 block">{item.time}</span>
                <h3 className="text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. For Families */}
      <section id="families" className="py-24 md:py-32 bg-primary/5 px-6 md:px-12 border-y border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl text-foreground">For Adult Children</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              We know you want the best for your parents. A safe environment, meaningful engagement, and a community that shares their values. Evergreen is a partner in their joy.
            </p>
            <ul className="space-y-6 text-xl text-foreground/80">
              <li className="flex items-start gap-4">
                <Heart className="w-7 h-7 text-accent shrink-0 mt-1" />
                <span>Professional staff trained in elder care and cultural sensitivity.</span>
              </li>
              <li className="flex items-start gap-4">
                <Heart className="w-7 h-7 text-accent shrink-0 mt-1" />
                <span>Nutritious, halal, and familiar comfort meals provided daily.</span>
              </li>
              <li className="flex items-start gap-4">
                <Heart className="w-7 h-7 text-accent shrink-0 mt-1" />
                <span>Flexible attendance options to fit your family's schedule.</span>
              </li>
            </ul>
            <Button size="lg" className="bg-accent text-accent-foreground rounded-full px-10 h-16 text-xl hover:bg-accent/90 mt-4">
              Schedule a Tour
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-full bg-secondary/20 absolute -inset-8 blur-3xl" />
            <img src={intergenerationalImage} alt="Family" className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl text-foreground">Voices of Our Community</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="bg-[#FDF8F0] p-10 md:p-12 rounded-3xl space-y-8"
          >
            <div className="text-5xl text-secondary opacity-50 font-serif">"</div>
            <p className="text-2xl text-foreground/90 leading-relaxed italic">
              Since my father started attending Evergreen, his spirit has completely lifted. He comes home talking about the poetry they read and the friends he made. It's truly been a light for our family.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif text-xl">S</div>
              <div>
                <p className="text-xl font-semibold">Salma R.</p>
                <p className="text-lg text-muted-foreground">Daughter of a member</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="bg-card border border-border p-10 md:p-12 rounded-3xl space-y-8"
          >
            <div className="text-5xl text-secondary opacity-50 font-serif">"</div>
            <p className="text-2xl text-foreground/90 leading-relaxed italic">
              I used to spend my days just watching the hours pass. Here, I feel useful. I feel heard. The exercise class is gentle enough for my knees, but the best part is the conversation over tea.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif text-xl">Y</div>
              <div>
                <p className="text-xl font-semibold">Yusuf A.</p>
                <p className="text-lg text-muted-foreground">Community Member, 78</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-12 w-full border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground">Common Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What are your operating hours?", a: "We are open Monday through Friday, from 8:30 AM to 4:30 PM. Members can choose half-day or full-day attendance depending on their preference and family schedule." },
              { q: "Is transportation provided?", a: "Currently, families are responsible for transportation, but we partner with local accessible transit services and can help coordinate rides for those who need assistance." },
              { q: "Are the meals fully Halal?", a: "Yes, 100%. All meals and snacks are prepared in a strictly Zabiha Halal kitchen, with consideration for common dietary restrictions among older adults (low sodium, diabetic-friendly)." },
              { q: "Do you provide medical care?", a: "We are a social and enrichment center, not a medical facility. We have staff trained in CPR/First Aid and elder care, and can assist with gentle medication reminders, but we do not have full-time nursing staff for complex medical needs." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 py-4">
                <AccordionTrigger className="text-xl md:text-2xl font-medium hover:text-primary hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-muted-foreground leading-relaxed pt-4 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. Contact / Footer CTA */}
      <section id="contact" className="bg-primary text-primary-foreground py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl">Let's start a conversation.</h2>
            <p className="text-2xl text-primary-foreground/80 leading-relaxed">
              Deciding on the right space for your loved one is an important step. Reach out to schedule a visit, share a cup of tea, and see if Evergreen feels like home.
            </p>
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4 text-xl">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Info className="w-6 h-6" />
                </div>
                <span>123 Sanctuary Lane, Peace District</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <span>Mon-Fri: 8:30 AM - 4:30 PM</span>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-3xl p-8 md:p-12 text-foreground shadow-2xl">
            <h3 className="text-3xl font-serif mb-8">Request Information</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-lg font-medium">Your Name</label>
                <Input placeholder="E.g. Fatima Ahmed" className="h-14 text-lg bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Email Address</label>
                <Input placeholder="fatima@example.com" type="email" className="h-14 text-lg bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Message (Optional)</label>
                <Textarea placeholder="Tell us a little about your loved one..." className="min-h-[120px] text-lg bg-white resize-none" />
              </div>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-16 text-xl rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-12 border-t border-background/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-serif text-3xl font-semibold text-secondary">Evergreen</div>
          <div className="text-background/50 text-lg">
            © {new Date().getFullYear()} Evergreen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

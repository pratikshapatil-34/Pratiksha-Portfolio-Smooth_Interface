import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pratiksha Patil
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting beautiful digital experiences with modern technologies.
              Passionate about clean code, innovative design, and user-centered solutions.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/pratikshapatil-34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pratiksha-patil-518907284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:pratiksha.patil@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
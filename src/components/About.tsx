
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const About = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "Next.js", "Express.js", "AWS", "Docker", "Git", "C", "C++", "Java", "Mobile Application Development", "Software Testing"];
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a passionate and detail-oriented Computer Science student with 
                a strong foundation in web development and problem-solving. As a fresher, 
                I bring enthusiasm, a quick learning mindset, and a dedication to building clean, 
                user-friendly digital experiences. Currently exploring React, Node.js, and UI/UX design
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest in web development.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Experience</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium"> Full Stack Developer</h4>
                      <p className="text-sm text-muted-foreground">Pregrad </p>
                    </div>
                    <span className="text-sm text-muted-foreground">march 2025 - Present</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Java Developer</h4>
                      <p className="text-sm text-muted-foreground">Infeanet pvt Ltd</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2 mon</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-secondary border-primary/20 hover:shadow-elegant transition-all duration-300 rounded-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;

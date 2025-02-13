
import { Database, Layout, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Layout,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "blue"
    },
    {
      category: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
      color: "purple"
    },
    {
      category: "Tools & DevOps",
      icon: Cpu,
      skills: ["Git", "Docker", "AWS", "CI/CD"],
      color: "pink"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-['Orbitron'] text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Space Tech
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
            >
              <category.icon className={`w-12 h-12 mb-4 text-${category.color}-400`} />
              <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
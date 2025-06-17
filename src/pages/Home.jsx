import ProjectCard from '../components/ProjectCard'
import Contact from '../components/contact'

export default function Home(){
    const projects = [
    {
      title: "Health Quality Management System",
      description: "Developed using Django and PostgreSQL, this system focuses on ensuring data integrity and usability in healthcare environments.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
      skills_list: ['Full-stack', 'MVT', 'Hyprid-model']
    },
    {
      title: "Cloud-Based Backup & Storage",
      description: "Designed with AWS (S3, EC2) and Python.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
      skills_list: ['Cloud Architect', 'Single Point Failure', 'Microservices']
    },
    {
      title: "AI & Data Prototyping",
      description: "Built experiments using Hugging Face, TensorFlow, and OpenAI APIs to explore modern ML and NLP applications.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/Hugging_Face_logo.svg/960px-Hugging_Face_logo.svg.png?20230711212313",
      skills_list: ['Backend', 'LLM', 'Microservices']
    }
  ];

  const mySkills = ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL'];

  return (
    <div className="container">
      <section>
        <h2>About Me</h2>
        <p>I am a backend engineer from Ramallah, passionate about building scalable systems and working on cloud-native applications. I have experience in Python, Django, AWS, and DevOps practices. I'm eager to contribute to international digitalization projects.</p>
      </section>

      <section>
        <h2>Featured Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            skills_list={project.skills_list}
          />
        ))}
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:mahdi.khrrousheh@gmail.com">mahdi.khrrousheh@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Khrrousheh" target="_blank" rel="noopener noreferrer">github.com/Khrrousheh</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/Khrrousheh" target="_blank" rel="noopener noreferrer">linkedin.com/in/Khrrousheh</a></p>
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );

}

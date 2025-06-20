import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import ProjectPagination from '../components/ProjectPagination';

export default function Home(){
    // Define the list of projects
    const projects = [
    {
      title: "Health Quality Management System",
      description: "Developed using Django and PostgreSQL, this system focuses on ensuring data integrity and usability in healthcare environments. It handles patient records, appointment scheduling, and billing processes with robust security features.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
      skills_list: ['MVT', 'Django', 'PostgreSQL', 'REST APIs']
    },
    {
      title: "Cloud-Based Backup & Storage",
      description: "Designed with AWS (S3, EC2) and Python, this scalable solution provides secure and reliable data backup and retrieval for enterprises. It features automated backups and versioning.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
      skills_list: ['AWS S3', 'EC2', 'Python', 'Boto3', 'Microservices']
    },
    {
      title: "AI & Data Prototyping",
      description: "Built experiments using OpenAI & DeepSeek APIs to explore modern ML and NLP applications.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/Hugging_Face_logo.svg/960px-Hugging_Face_logo.svg.png?20230711212313",
      skills_list: ['Backend', 'LLM', 'Microservices']
    },

    {
      title: "Portfolio",
      description: "Create reac-vite portfolio to display my recent projects.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png",
      skills_list: ['React', 'Frontend Development', 'Responsive Design']
    }
  ];

  return (
    <div className="container">
      {/* About Me Section */}
      <section>
        <h2>About Me</h2>
        <p>I am a backend engineer from Ramallah, passionate about building scalable systems and working on cloud-native applications. I have experience in Python, Django, AWS, and DevOps practices. I'm eager to contribute to international digitalization projects.</p>
      </section>

      {/* Featured Projects Section, now using the pagination component */}
      <section>
        <h2>Featured Projects</h2>
        {/* The ProjectPagination component takes the full list of projects and handles its own pagination logic */}
        <ProjectPagination projects={projects} />
      </section>

      {/* Contact Section */}
      <section>
        {/* The Contact component is rendered directly */}
        <Contact />
      </section>
    </div>
  );
}

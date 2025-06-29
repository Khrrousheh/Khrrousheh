import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import ProjectPagination from '../components/ProjectPagination';
import Badges from '../components/Badges';
import BadgeCarousel from '../components/BadgeCarousel';

export default function Home(){
    // Define the list of projects
    const projects = [
    {
      title: "Heart Disease Risk Assessment",
      description: "This is a web-based application built using FastAPI and Jinja2 that calculates the 10-year cardiovascular disease (CVD) risk using the Framingham Risk Score algorithm. It supports input for various risk factors and provides personalized health recommendations based on the calculated risk level.",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      skills_list: ['FastAPI', 'Jinja2', 'Python', 'Cardiovascular Risk Assessment']
    },
    {
      title: "Health Quality Management System",
      description: "Developed using Django and PostgreSQL, this system focuses on ensuring data integrity and usability in healthcare environments. It handles patient records, appointment scheduling, and billing processes with robust security features.",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      skills_list: ['MVT', 'Django', 'PostgreSQL', 'REST APIs']
    },
    {
      title: "Cloud-Based Backup & Storage",
      description: "Designed with AWS (S3, EC2) and Python, this scalable solution provides secure and reliable data backup and retrieval for enterprises. It features automated backups and versioning.",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      skills_list: ['AWS S3', 'EC2', 'Python', 'Boto3', 'Microservices']
    },
    {
      title: "AI & Data Prototyping",
      description: "Built experiments using OpenAI & DeepSeek APIs to explore modern ML and NLP applications.",
      imageUrl: "https://huggingface.co/front/assets/huggingface_logo.svg",
      skills_list: ['Backend', 'LLM', 'Microservices']
    },

    {
      title: "Portfolio",
      description: "Create reac-vite portfolio to display my recent projects.",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      skills_list: ['React', 'Frontend Development', 'Responsive Design']
    }
  ];

    const techBadges = [
    { name: 'HTML', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'pandas', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'AWS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'PostgreSQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ];

  return (
    <div className="container">
      {/* About Me Section */}
      <section>
        <h2>About Me</h2>
        <p>I am a backend engineer from Ramallah, passionate about building scalable systems and working on cloud-native applications. I have experience in Python, Django, AWS, and DevOps practices. I'm eager to contribute to international digitalization projects.</p>
      </section>

       {/* Tech Badges Section */}
       <section>
         <BadgeCarousel badges={techBadges} autoSlideInterval={5000} />
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

import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
      github: "https://github.com/yourusername/portfolio-website",
    },
    {
      id: 2,
      name: "E-commerce App",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      github: "https://github.com/yourusername/ecommerce-app",
    },
    {
      id: 3,
      name: "Blog CMS",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      github: "https://github.com/yourusername/blog-cms",
    },
    {
      id: 4,
      name: "Task Manager",
      technologies: ["Vue.js", "Firebase", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      id: 5,
      name: "Social Media App",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      github: "https://github.com/yourusername/social-media-app",
    },
    {
      id: 6,
      name: "Weather App",
      technologies: ["Vue.js", "Tailwind CSS", "API"],
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61", // New working image
      github: "https://github.com/yourusername/weather-app"
    }
    
  ];

  console.log(projects);

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.image}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

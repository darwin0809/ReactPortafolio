import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "El Centro de la Tierra",
    description: "Proyecto web interactivo sobre el centro de la Tierra",
    technologies: ["HTML", "CSS", "JavaScript"],
    media: {
      type: "image",
      src: "/CentroTierraImg.png",
      alt: "El Centro de la Tierra"
    },
    link: "https://darwin0809.github.io/vidj2/",
    github: null
  },
  {
    id: 2,
    title: "Opitas Food",
    description: "Aplicación web de comida regional",
    technologies: ["React", "CSS", "JavaScript"],
    media: {
      type: "video",
      src: "/OpitasVid.mp4",
      alt: "Opitas Food"
    },
    link: "https://parcial-final-web-ten.vercel.app",
    github: null
  },
  {
    id: 3,
    title: "Rios Magicos",
    description: "Proyecto de realidad virtual sobre ríos mágicos",
    technologies: ["Python", "Html", "Tensorflow"],
    media: {
      type: "image",
      src: "/RiosMagicosImg.jpg",
      alt: "Rios Magicos"
    },
    link: null,
    github: "https://github.com/darwin0809/CNNRiosMagicos"
  },
  {
    id: 4,
    title: "App Movil (Uso APIs)",
    description: "Aplicación móvil que consume APIs externas",
    technologies: ["Angular", "Ionic", "APIs"],
    media: {
      type: "video",
      src: "/ApisVid.mp4",
      alt: "App Movil"
    },
    link: null,
    github: "https://github.com/darwin0809/locationMovil.git"
  },
  {
    id: 5,
    title: "Comic Interactivo",
    description: "Aplicación de cómic interactivo con animaciones y efectos",
    technologies: ["Angular", "Ionic", "TypeScript"],
    media: {
      type: "video",
      src: "/ComicIntVid.mp4",
      poster: "https://via.placeholder.com/300x200/2a2a2a/ffffff?text=Comic+Interactivo",
      alt: "Comic Interactivo"
    },
    link: null,
    github: "https://github.com/Sacol16/Comic-Interactivo.git"
  }
];

const Projects = () => {
  const handleVideoHover = (event) => {
    const video = event.target;
    video.play();
  };

  const handleVideoLeave = (event) => {
    const video = event.target;
    video.pause();
    video.currentTime = 0;
  };

  const renderMedia = (media) => {
    if (media.type === "video") {
      return (
        <video
          src={media.src}
          poster={media.poster}
          alt={media.alt}
          muted
          loop
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}
          className="project-media"
        />
      );
    } else {
      return (
        <img 
          src={media.src} 
          alt={media.alt} 
          className="project-media"
        />
      );
    }
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Proyectos Realizados</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-media-container">
              {renderMedia(project.media)}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <span>Ver Demo</span>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <span>Ver Código</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 
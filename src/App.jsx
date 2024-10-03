import React, { useState } from 'react';
import './style.css'; // Importamos el CSS
import Skills from './Skills';
import Timeline from './Timeline';

function Portfolio() {
  // Estado para controlar la visibilidad de Skills y Timeline
  const [showSkills, setShowSkills] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  // Funciones para manejar la visibilidad
  const toggleSkills = () => {
    setShowSkills(prev => !prev);
    setShowTimeline(false); // Esconde Timeline si Skills se muestra
  };

  const toggleTimeline = () => {
    setShowTimeline(prev => !prev);
    setShowSkills(false); // Esconde Skills si Timeline se muestra
  };

  return (
    <div className='todo'>
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav-item">Acerca de mi</a>
          <a href="#" className="nav-item">Proyectos</a>
          <a href="#" className="nav-item">Habilidades</a>
          <a href="#" className="nav-item">Contacto</a>
        </nav>
      </header>

      <div className="form-cont">
        <form action="/" className="form"></form>
        <label htmlFor="title" id="titulo">Portafolio</label>
        <label htmlFor="name" id="nombre" className="nombre">Darwin Andres Criollo Leon</label>
        <div className="foto">
          <img src="src/assets/1724376277843.webp" alt="" className="foto" />
        </div>
        <label>Ingeniero Multimedia</label>
        <label htmlFor="Redes:" id="redes">Redes:</label>

        <div className="imagenes">
          <a href="WhatsApp : 3206078767">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="wsp" className="wsp" />
          </a>
          <a href="https://www.instagram.com/darwin_criollo08/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png" alt="inst" className="inst" />
          </a>
          <a href="https://www.linkedin.com/in/darwin-criollo-949712234/">
            <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/large_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="lnd" className="lnd" />
          </a>
        </div>
        <div className='botonesHab'>
          <button className='Habilidades' onClick={toggleSkills}>Habilidades</button>
          <button className='Timeline' onClick={toggleTimeline}>Timeline</button>
        </div>     
        {showSkills && <Skills />}
        {showTimeline && <Timeline />}
        <label htmlFor="trabajos" id="trabajos">Trabajos realizados:</label>
      </div>

      <div className="botones">
        <a href="https://github.com/darwin0809/prueba2.git">
          <button className="trabajo" id="trabajo">Actividad 1</button>
        </a>
        <a href="https://github.com/darwin0809/CFHTML.git">
          <button className="trabajo" id="trabajo">Actividad 2</button>
        </a>
        <a href="https://github.com/darwin0809/clase3.git">
          <button className="trabajo" id="trabajo">Actividad 3</button>
        </a>
        <a href="https://github.com/edwinmgallego/clase-practica-css-jueves.git">
          <button className="trabajo" id="trabajo">Actividad 4</button>
        </a>
        <a href="https://github.com/darwin0809/clase-8.git">
          <button className="trabajo" id="trabajo">Actividad clase 8</button>
        </a>
        <a href="https://github.com/darwin0809/Clase10.git">
          <button className="trabajo" id="trabajo">Actividad Clase 10</button>
        </a>
        
      </div>
      
    </div>
  );
}

export default Portfolio;


// Timeline.js
import React from 'react';
import './Timeline.css';

const timelineData = [
  { year: '2020', description: 'Graduacion de el bachillerato' },
  { year: '2021', description: 'Ingreso Ingenieria Multimedia en la UAO' },
  { year: '2022', description: 'Aprendizaje sobre Animacion' },
  { year: '2023', description: 'Aprendizaje sobre Creacion de Videojuegos y RV' },
  { year: 'actualmente', description: 'Aprendiendo web (HTML, CSS, REACT)' },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2>Línea de Tiempo</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

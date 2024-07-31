import React, { useState } from 'react';
import CourseCard from './AudienceCard';
import CourseModal from './CourseModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoursesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  const targetAudiences = [
    {
      title: 'Adultos',
      feature: 'Cursos de idiomas e cultura para adultos.',
      image: 'i2.png',
    },
    {
      title: 'Crianças e Adolescentes',
      feature: 'Cursos de idiomas e cultura para crianças e adolescentes.',
      image: 'i3.png',
    },
    {
      title: 'Empresas',
      feature: 'Capacitação em idioma e consultoria cultural.',
      image: 'i4.png',
    },
    // Se necessário, adicione mais audiências alvo
  ];


  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="programs-section p-s-1 mb-5">
      <div className="container">
        <h1 className="text-center mb-5">Quem pode aprender na Willow Language School?</h1>
        <div className="row justify-content-center">
          {targetAudiences.map((course, index) => (
            <CourseCard key={index} course={course} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <CourseModal show={showModal} handleClose={handleCloseModal} course={selectedCourse} />
    </section>
  );
};

export default CoursesSection;

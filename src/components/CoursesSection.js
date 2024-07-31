import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoursesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  const courses = [
    {
      title: 'Cursos de Inglês',
      feature: 'Regular, Intensivo e personalizado',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Curso de Português',
      feature: '',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Cursos de Espanhol',
      feature: '',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Curso de Francês',
      feature: '',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Preparação para os Exames',
      feature: 'IELTS , TOELF e SAT',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Cursos de Inglês e Português',
      feature: 'Para Fins Específicos',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    {
      title: 'Cursos de Inglês',
      feature: 'Para Negócios',
      description: 'Online e Presencial',
      image: 'icone.webp',
    },
    // ...adicione os outros cursos aqui
  ];

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="programs-section programas py-5 p-s-1">
      <div className="container">
        <h1 className="text-center mb-5">Nossos Programas</h1>
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <CourseModal show={showModal} handleClose={handleCloseModal} course={selectedCourse} />
    </section>
  );
};

export default CoursesSection;

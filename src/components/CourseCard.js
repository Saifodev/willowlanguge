import React from 'react';

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card program-card shadow" onClick={() => onClick(course)}>
        <img src={course.image} alt={course.title} />
        <div className="card-body program-card-body">
          <h5 className="program-title">{course.title}</h5>
          <div className="program-feature">
            <span>{course.feature}</span>
          </div>
        </div>
        <div className="card-footer">
          <p className="program-description">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

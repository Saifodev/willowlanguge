import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CourseModal = ({ show, handleClose, course }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{course.description}</p>
        <p>{course.feature}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseModal;

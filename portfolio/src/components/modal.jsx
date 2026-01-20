import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Posts from './posts';

export default function AppModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      <Modal show={show} onHide={handleClose} centered data-bs-theme="dark" size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Posts/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
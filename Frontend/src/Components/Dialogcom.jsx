import { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

export function Dialogcom() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown.Item onClick={handleShow}>Sign out</Dropdown.Item>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {
            handleClose();
            // Perform sign-out logic here
            console.log("User logged out");
          }}>
            Yes, Sign Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


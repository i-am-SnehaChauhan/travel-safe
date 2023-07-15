import React from 'react';
import { Modal, Backdrop, Fade, Button } from '@mui/material';

import './Modal.css';

const ModalComponent = ({ open, handleClose }) => {
  return (
    <Modal
      className="modal"
      open={open}
      onClose={handleClose}
    >
      <Fade in={open}>
        <div className="modal-content">
          <h2>Video Call Complete!</h2>
          <Button variant="contained">Restart</Button>
          <Button variant="contained">New Video</Button>
          <Button variant="contained" onClick={handleClose}>Close</Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;

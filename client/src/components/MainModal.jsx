import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
const MainModal = ({dataModal}) => {
    const {showModal, setShowModal, title, text, severity} = dataModal
    const handleClose = () => setShowModal(false);
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={String(showModal)} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title >
            <span className={severity==='success'?'alert alert-success':'alert alert-danger'}>{title}</span>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {text}
        </Modal.Body>

        <Modal.Footer>
          <Button type='button' onClick={handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

MainModal.propTypes = {
    dataModal: PropTypes.object.isRequired
}


export default MainModal
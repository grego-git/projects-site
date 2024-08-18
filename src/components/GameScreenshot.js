import Modal from 'react-bootstrap/Modal';

export default function GameScreenshot(props) {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            data-bs-theme='dark'
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>\
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width: '100%'}} alt={props.screenshot} src={props.screenshot}></img>
            </Modal.Body>
        </Modal>
    );
}
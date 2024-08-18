import Modal from 'react-bootstrap/Modal';

export default function ScreenshotModal(props) {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            data-bs-theme='dark'
        >
            <Modal.Header closeButton>
                <Modal.Title style={{color: 'white'}} id='contained-modal-title-vcenter'>{props.title ?? ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width: '100%'}} alt={props.screenshot} src={props.screenshot}></img>
            </Modal.Body>
            {props.caption && 
            <Modal.Footer style={{ display: 'flex', flexDirection: 'column' }}>
                <i>{props.caption}</i>
            </Modal.Footer>}
        </Modal>
    );
}
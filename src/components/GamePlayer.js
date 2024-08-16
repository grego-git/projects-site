import Modal from 'react-bootstrap/Modal';

export default function GamePlayer(props) {
    return (
        <Modal
            {...props}
            size='xl'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            data-bs-theme='dark'
            onHide={props.exitGame}
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    {props.game.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe width='100%' frameborder='0' src='https://itch.io/embed-upload/9176418?color=333333' allowfullscreen='' height='560'><a href={props.game.source}>Play on itch.io</a></iframe>
            </Modal.Body>
        </Modal>
    );
}
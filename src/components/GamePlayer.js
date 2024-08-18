import { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function GamePlayer(props) {
    useEffect(() => {}, [props.game.source]);

    return (
        <Modal
            {...props}
            size='xl'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            data-bs-theme='dark'
        >
            <Modal.Header closeButton>
                <Modal.Title style={{color: 'white'}} id='contained-modal-title-vcenter'>
                    {props.game.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe width='100%' frameborder='0' src={props.game.gameLink} allowfullscreen='' height={props.game.gameHeight}><a href={props.game.source}>Play on itch.io</a></iframe>
            </Modal.Body>
        </Modal>
    );
}
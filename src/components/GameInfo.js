import { Controller, Download, Github } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ScreenshotModal from './ScreenshotModal';
import '../App.css';
import { Stack } from 'react-bootstrap';

export default function GameInfo(props) {
    const [screenshotIndex, setScreenshotIndex] = useState(0);
    const [showScreenshotModal, setShowScreenshotModal] = useState(false);

    const handleSelect = (selectedIndex) => {
        setScreenshotIndex(selectedIndex);
    };

    useEffect(() => {
        setScreenshotIndex(0);
    }, [props.game]);

    return (
        <div>
            <Card data-bs-theme='dark' className={(props.fadeOut ? 'fade-out' : 'fade-in') + ' info-card'}>
                <Card.Body>
                    <Card.Title>{props.game.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{props.game.engine} | {props.game.language}</Card.Subtitle>
                    <hr></hr>
                    <Card.Text>{props.game.description}</Card.Text>
                    {props.game.screenshots && props.game.screenshots.length > 0 &&
                        <div>
                            <hr></hr>
                            <Carousel activeIndex={screenshotIndex} onSelect={handleSelect} interval={null} className='screenshot-carousel'>
                                {props.game.screenshots.map((screenshot, index) =>
                                    <Carousel.Item key={index}>
                                        <img onClick={() => { setShowScreenshotModal(true) }} alt={screenshot} src={process.env.PUBLIC_URL + 'screenshots/' + screenshot}></img>
                                    </Carousel.Item>)}
                            </Carousel>
                        </div>}
                    <br />
                    <Stack direction='horizontal' gap={3}>
                        <Button variant='outline-secondary'>{
                            !props.game.requiresDownload ?
                                <a href='javascript:void(0);'><Controller onClick={() => props.playGame()} size='24px'></Controller></a> :
                                <a href={props.game.source} target='_blank' rel='noopener'><Download size='24px'></Download></a>}
                        </Button>
                        {props.game.repo && props.game.repo.trim() !== '' &&
                            <Button variant='outline-secondary'>
                                <a href={props.game.repo} target='_blank' rel='noopener'><Github size='24px'></Github></a>
                            </Button>}
                    </Stack>
                </Card.Body>
                <Card.Footer className='text-muted'>{props.game.created}</Card.Footer>
            </Card>
            <ScreenshotModal screenshot={process.env.PUBLIC_URL + 'screenshots/' + props.game.screenshots[screenshotIndex]} show={showScreenshotModal} onHide={() => setShowScreenshotModal(false)} />
        </div>
    );
}
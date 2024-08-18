import { Controller, Download, Github } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GameScreenshot from './GameScreenshot';
import '../App.css';

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
            <Card data-bs-theme='dark' className={props.fadeOut ? 'fade-out' : 'fade-in'} style={{ margin: '0 auto', maxWidth: '75rem' }}>
                <Card.Body>
                    <Card.Title>{props.game.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{props.game.engine} | {props.game.language}</Card.Subtitle>
                    <hr></hr>
                    <Card.Text dangerouslySetInnerHTML={{ __html: props.game.description }}></Card.Text>
                    {props.game.screenshots && props.game.screenshots.length > 0 &&
                        <div>
                            <hr></hr>
                            <Carousel activeIndex={screenshotIndex} onSelect={handleSelect} interval={null}>
                                {props.game.screenshots.map((screenshot, index) =>
                                    <Carousel.Item key={index}>
                                        <img onClick={() => { setShowScreenshotModal(true) }} style={{ borderRadius: 15, display: 'block', maxHeight: 300, margin: '0 auto' }} alt={screenshot} src={process.env.PUBLIC_URL + 'screenshots/' + screenshot}></img>
                                    </Carousel.Item>)}
                            </Carousel>
                        </div>}
                    <br />
                    <div style={{ display: 'inline-flex', gap: 10 }}>
                        <Button variant='outline-secondary'>{
                            !props.game.requiresDownload ?
                                <a href='javascript:void(0);'><Controller onClick={() => props.playGame()} size='24px'></Controller></a> :
                                <a href={props.game.source} target='_blank' rel='noopener noreferrer'><Download size='24px'></Download></a>}
                        </Button>
                        {props.game.repo && props.game.repo.trim() !== '' &&
                            <Button variant='outline-secondary'>
                                <a href={props.game.repo} target='_blank' rel='noopener noreferrer'><Github size='24px'></Github></a>
                            </Button>}
                    </div>
                </Card.Body>
                <Card.Footer className='text-muted'>{props.game.created}</Card.Footer>
            </Card>
            <GameScreenshot screenshot={process.env.PUBLIC_URL + 'screenshots/' + props.game.screenshots[screenshotIndex]} show={showScreenshotModal} onHide={() => setShowScreenshotModal(false)} />
        </div>
    );
}
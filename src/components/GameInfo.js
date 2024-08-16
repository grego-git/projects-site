import { Controller, Download, Github } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import GameScreenshot from './GameScreenshot';
import '../App.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function GameInfo(props) {
    const [showScreenshotModal, setShowScreenshotModal] = useState(false);
    const [screenshot, setSceenshot] = useState('');

    const openScreenshotModal = (screenshot) => {
        setShowScreenshotModal(true);
        setSceenshot(screenshot);
    }

    return (
        <div>
            <Card data-bs-theme='dark' className={props.transition ? 'fade-out' : 'fade-in'} style={{ margin: '0 auto', maxWidth: '75rem'/*, borderRadius: 0*/ }}>
                <Card.Body>
                    <Card.Title>{props.game.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{props.game.engine} | {props.game.language}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: props.game.description }}></Card.Text>
                    {props.game.screenshots && props.game.screenshots.length > 0 &&
                        <Carousel responsive={responsive}>
                            {props.game.screenshots.map((screenshot, index) => <img onClick={() => { openScreenshotModal(process.env.PUBLIC_URL + 'screenshots/' + screenshot) }} style={{ maxHeight: 250, margin: '0 auto', borderRadius: 15 }} alt={screenshot} key={index} src={process.env.PUBLIC_URL + 'screenshots/' + screenshot}></img>)}
                        </Carousel>}
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
            <GameScreenshot screenshot={screenshot} show={showScreenshotModal} exitScreenshot={() => setShowScreenshotModal(false)} />
        </div>
    );
}
import { Stack } from 'react-bootstrap';
import { Controller, Download, Github } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ScreenshotModal from './ScreenshotModal';

const modelInspirations = [
    { source: 'MML_Example.png', title: 'Megaman Legends (PS1)', caption: <p className='screenshot-caption'>One of my biggest inspirations when making 3D art. Instead of going for realism, this game went for a more cartoony anime style that sill holds up great to this day!</p> },
    { source: 'MGS_Example.png', title: 'Metal Gear Solid (PS1)', caption: <p className='screenshot-caption'>Although the human models in this game lack a certain level of detail, the environments and lighting in the original MGS still look amazing!</p> },
    { source: 'DrSlump_Example.png', title: 'Dr.Slump (PS1)', caption: null },
    { source: 'FoNS_Example.png', title: 'Fist of the North Star (PS1)', caption: <p className='screenshot-caption'>Watch the <a href='https://youtu.be/uB9XxoeucLg?t=32' target='_blank' rel='noopener noreferrer'>opening</a> for this game.</p> },
]

const top5Games = [
    { source: 'MMX_Top5.png', title: 'Megaman X (SNES)', caption: <p className='screenshot-caption'>One of the few games I can 100%. Is one of the best feeling 2D side-scrolling games of all time.</p> },
    { source: 'SotC_Top5.png', title: 'Shadow of the Colossus (PS2)', caption: <p className='screenshot-caption'>Every fight is a boss fight, with a physics engine that pushes, and pulls, you to the point that you truly feel like you yourself are scaling these huge monsters.</p> },
    { source: 'CSotN_Top5.png', title: 'Castlevania: Symphony of the Night (PS1)', caption: <p className='screenshot-caption'>Some of the most beautiful 2D sprite work in gaming. You travel throughout Dracula's humongous castle with all corners reachable through the skills, and power ups, you earn throughout the game.</p> },
    { source: 'MGS3_Top5.png', title: 'Metal Gear Solid 3: Snake Eater (PS2)', caption: <p className='screenshot-caption'>MGS is one of my favorite games series, with this one being at the top. Best story of all the games, with a tear jerker of an ending.</p> },
    { source: 'SF3_Top5.png', title: 'Street Fighter: 3rd Strike (Dreamcast)', caption: <p className='screenshot-caption'>Another favorite series of mine. Much like Symphony of the Night, the sprite work here is peak perfection, with mechanics that'll make any encounter <a href='https://youtu.be/JzS96auqau0?t=6' target='_blank' rel='noopener noreferrer'>unique</a>.</p> }
]

export default function GameInfo(props) {
    const [screenshot, setScreenshot] = useState('');
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState(null);
    const [showScreenshot, setShowScreenshot] = useState(false);

    const screenshotClicked = (screenshot, title, caption) => {
        setScreenshot(screenshot);
        setTitle(title);
        setCaption(caption);
        setShowScreenshot(true);
    }

    const homePageInfo = (
        <Stack gap={5}>
            <span>
                My name's <b>Gregorio</b>, but you can call me <b>Grego or Greg</b> for short. I have a <b>bachelor's in Software Engineering</b>, and am a <b>self-taught 2D/3D artist</b>. Since 2019 I've <b>worked professionally as a web developer</b>, with an <b>interest in game development</b>, as you can tell through my <a href='/games'>personal projects</a>. Many of my projects are <b>solo developed</b>, which meant I had to develop a skill in 2D/3D art if I wanted my projects to look any good. My best medium of art is <b>3D with a PS1</b> aesthetic, with all my models being created in <b>blender</b>. Now good looking is probably not what you think of when you hear "<b>PS1 graphics</b>", but here are some of my inspirations when learning how to make 3D models:
            </span>
            <Carousel pause='hover' className='screenshot-carousel'>
                {modelInspirations.map((inspiration, index) =>
                    <Carousel.Item key={index}>
                        <img onClick={() => screenshotClicked(
                            process.env.PUBLIC_URL + 'screenshots/' + inspiration.source,
                            inspiration.title,
                            inspiration.caption
                        )} alt={inspiration.source} src={process.env.PUBLIC_URL + 'screenshots/' + inspiration.source}></img>
                        <Carousel.Caption>
                            <h5>{inspiration.title}</h5>
                            {inspiration.caption}
                        </Carousel.Caption>
                    </Carousel.Item>)}
            </Carousel>
            <span>As for game development, I've worked with both the <b>Unity and Godot</b> game engines, with my primary scripting language being <b>C#/.NET</b>. I have also developed games in their own engines written in either <b>Java or C++ using OpenGL</b> for graphics.</span>
            <div>
                <img onClick={() => screenshotClicked(process.env.PUBLIC_URL + 'screenshots/GoEngine_Example.png')} className='screenshot' alt={'GoEngine_Example.png'} src={process.env.PUBLIC_URL + 'screenshots/GoEngine_Example.png'}></img>
                <br />
                <p className='screenshot-caption'><i>Snapshot of the start up scene in my Java game engine I worked on during 2023 called the <b>Go Engine</b>. The Go Engine is a 2D/3D game engine using OpenGL for graphics rendering, and ImGUI for the editor UI.</i></p>
            </div>
            <span>A lot of my game inspirations come from classic arcade games, side-scorllers, and general actions games, with my current favorite genre being the fighting game genre (<i>Street Fighter, Guilty Gear, Tekken</i>). For fun here are my top 5 favorite games of all time:</span>
            <Carousel pause='hover' className='screenshot-carousel'>
                {top5Games.map((game, index) =>
                    <Carousel.Item key={index}>
                        <img onClick={() => screenshotClicked(
                            process.env.PUBLIC_URL + 'screenshots/' + game.source,
                            game.title,
                            game.caption
                        )} alt={game.source} src={process.env.PUBLIC_URL + 'screenshots/' + game.source}></img>
                        <Carousel.Caption>
                            <h5>{game.title}</h5>
                            {game.caption}
                        </Carousel.Caption>
                    </Carousel.Item>)}
            </Carousel>
        </Stack>);

    const gamePageInfo = (
        <Stack gap={3}>
            <span>
                This page contains the game projects I've worked on throughout the years. Specifically these are projects I was able to get into a playable state, and released for other people to play and enjoy! Some of these games were created through game jams, video projects, or just a personal passions of mine. There are some other projects not listed here that are still being worked on currently, and hopefully will appear on here soon.
            </span>
            <span>
                A lot of the games listed on here were developed in the Unity game engine, or as of recently, the Godot engine, and one in an engine I wrote myself. Depending on the icons associated with each game, you can either download these games through their itch.io page, or play them in browser!
            </span>
            <hr></hr>
            <div>
                <Controller size={24}></Controller> You can play games with this <b>controller</b> icon in browser.
            </div>
            <div>
                <Download size={24}></Download> You can download games through their itch.io page with this <b>download</b> icon.
            </div>
            <div>
                <Github size={24}></Github> You can see the code for games with this <b>GitHub</b> icon.
            </div>
        </Stack>);

    return (
        <div>
            <Card data-bs-theme='dark' className={(props.fadeOut ? 'fade-out' : 'fade-in') + ' info-card'}>
                <Card.Body>
                    <Card.Title>
                        {props.page === 'home' && 'Welcome'}
                        {props.page === 'games' && 'My Games'}
                    </Card.Title>
                    <hr></hr>
                    <Card.Text as='div'>
                        {props.page === 'home' && homePageInfo}
                        {props.page === 'games' && gamePageInfo}
                    </Card.Text>
                </Card.Body>
            </Card>
            <ScreenshotModal title={title} caption={caption} show={showScreenshot} onHide={() => setShowScreenshot(false)} screenshot={screenshot}></ScreenshotModal>
        </div>
    );
}
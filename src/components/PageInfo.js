import { Stack } from 'react-bootstrap';
import { Controller, Download, Github } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';

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

export default function GameInfo(props) {
    return (
        <div>
            <Card data-bs-theme='dark' className={props.fadeOut ? 'fade-out' : 'fade-in'} style={{ margin: '0 auto', maxWidth: '75rem' }}>
                <Card.Body>
                    <Card.Title>Welcome!</Card.Title>
                    <hr></hr>
                    <Card.Text as='div'>
                        {props.page === 'games' && gamePageInfo}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
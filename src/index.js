import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GamesView from './views/GamesView';
import Maitenance from './views/Maitenance';
import NotFound from './views/NotFound';
import './index.css';
import { Stack, Image } from 'react-bootstrap';
import { Github, Tiktok, Youtube } from 'react-bootstrap-icons';

export default function App() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>
          <Stack direction='horizontal' gap={3} style={{alignItems: 'center'}}>
          <Image alt='' style={{width: 32}} roundedCircle src={process.env.PUBLIC_URL + '/miscImages/Profile.png'}></Image>
          grego.io
          </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='games'>Games</Nav.Link>
              <Nav.Link href='models'>Models</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GamesView />} />
          <Route path='/games' element={<GamesView />} />
          <Route path='/models' element={<Maitenance />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Stack direction='horizontal' gap={3} style={{position: 'fixed', left: 0, right: 0, bottom: 0, padding: 20, background: '#2b3035'}}>
        <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/@grego4108'><Youtube color='white' size={24}></Youtube></a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.tiktok.com/@grego_io?lang=en'><Tiktok color='white' size={24}></Tiktok></a>
        <a target='_blank' rel='noopener noreferrer' href='https://grego-games.itch.io/'><img alt='itch.io' style={{width: 24, height: 24, filter: 'invert(100%) sepia(98%) saturate(0%) hue-rotate(147deg) brightness(93%) contrast(101%)'}} src={'https://static.itch.io/images/itchio-textless-black.svg'}></img></a>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/grego-git'><Github color='white' size={24}></Github></a>
      </Stack>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

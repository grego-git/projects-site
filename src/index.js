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
import HomeView from './views/HomeView';

export default function App() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary header-bar' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <Stack direction='horizontal' gap={3}>
              <Image alt='' style={{ width: 32 }} roundedCircle src={process.env.PUBLIC_URL + '/miscImages/Profile.png'}></Image>
              grego.io
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='home'>Home</Nav.Link>
              <Nav.Link href='games'>Games</Nav.Link>
              <Nav.Link href='models'>Models</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/home' element={<HomeView />} />
          <Route path='/games' element={<GamesView />} />
          <Route path='/models' element={<Maitenance />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Stack direction='horizontal' gap={3} className='footer-bar'>
        <a target='_blank' rel='noopener' href='https://www.youtube.com/@grego4108'><Youtube color='white' size={24}></Youtube></a>
        <a target='_blank' rel='noopener' href='https://www.tiktok.com/@grego_io?lang=en'><Tiktok color='white' size={24}></Tiktok></a>
        <a target='_blank' rel='noopener' href='https://grego-games.itch.io/'><img alt='itch.io' className='itch-icon' src={process.env.PUBLIC_URL + 'icons/itch-io.svg'}></img></a>
        <a target='_blank' rel='noopener' href='https://github.com/grego-git'><Github color='white' size={24}></Github></a>
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

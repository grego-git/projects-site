import { useEffect, useState } from 'react';
import GamePlayer from '../components/GamePlayer';
import GameInfo from '../components/GameInfo';
import GamesList from '../components/GamesList';
import PageInfo from '../components/PageInfo';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import { Spinner } from 'react-bootstrap';

export default function GamesView() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);
  const [changingGame, setChangingGame] = useState(false);
  const [showGamePlayer, setShowGamePlayer] = useState(false);
  const [loadingGames, setLoadingGames] = useState(true);

  const loadGames = async () => {
    const response = await fetch(process.env.PUBLIC_URL + 'games.json');
    const json = await response.json();

    setGames(json);
    setLoadingGames(false);
  }

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className='view'>
      {loadingGames ? 
      <div className='main-view-spinner-container'><Spinner style={{ color: 'white', margin: '0 auto' }} animation='grow' role='status'></Spinner></div> : 
      <GamesList games={games} currentGame={currentGame} setChangingGame={setChangingGame} setCurrentGame={setCurrentGame}></GamesList>}
      <br />
      {currentGame === 0 &&
        <PageInfo page='games' fadeOut={changingGame}></PageInfo>}
      {currentGame > 0 &&
        <div>
          <GameInfo playGame={() => setShowGamePlayer(true)} fadeOut={changingGame} game={games[currentGame - 1]}></GameInfo>
          <GamePlayer onHide={() => setShowGamePlayer(false)} show={showGamePlayer} game={games[currentGame - 1]} />
        </div>}
    </div>);
}

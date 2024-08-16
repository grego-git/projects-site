import { useEffect, useState } from 'react';
import GamePlayer from '../components/GamePlayer';
import GameInfo from '../components/GameInfo';
import GamesList from '../components/GamesList';
import PageInfo from '../components/PageInfo';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

export default function GamesView() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);
  const [fadeOutGameInfo, setFadeOutGameInfo] = useState(false);
  const [showGamePlayer, setShowGamePlayer] = useState(false);

  const loadGames = async () => {
    const response = await fetch('/projects-site/games.json');
    const json = await response.json();

    setGames(json);
  }

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div style={{ margin: '0 auto', padding: '50px 0px' }}>
      <GamesList games={games} currentGame={currentGame} setCurrentGame={setCurrentGame} setFadeOutGameInfo={setFadeOutGameInfo}></GamesList>
      <br />
      {currentGame == 0 &&
        <PageInfo page='games' transition={fadeOutGameInfo}></PageInfo>}
      {currentGame > 0 &&
        <div>
          <GameInfo playGame={() => setShowGamePlayer(true)} transition={fadeOutGameInfo} game={games[currentGame - 1]}></GameInfo>
          <GamePlayer exitGame={() => setShowGamePlayer(false)} show={showGamePlayer} game={games[currentGame - 1]} />
        </div>}
    </div>);
}

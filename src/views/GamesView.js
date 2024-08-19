import { useEffect, useState } from 'react';
import GamePlayer from '../components/GamePlayer';
import GameInfo from '../components/GameInfo';
import GamesList from '../components/GamesList';
import PageInfo from '../components/PageInfo';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

const gamesList = [
  {
      name: "Fight the BIG Sandworm",
      engine: "Godot",
      language: "C#/.NET",
      created: "May 2024",
      cdCover: "SandwormCDCover.png",
      description: <>Just a game where you fight a <b>BIG 'ol Sandworm</b>... like from Dune or somthin'. Also you play as a <b>Mech with a turret & missles</b>, so that's pretty cool.</>,
      requiresDownload : true,
      source: "https://grego-games.itch.io/fight-the-big-sandworm",
      screenshots: [
          "Sandworm_Title.png",
          "Sandworm_1.png",
          "Sandworm_2.png",
          "Sandworm_3.png"
      ]
  },
  {
      name: "Keep the Change",
      engine: "Godot",
      language: "C#/.NET",
      created: "November 2024",
      cdCover: "KeepTheChangeCDCover.png",
      description: <>My entry for the <a href='https://itch.io/jam/bigmode-2023'>Bigmode Game Jame 2023</a>. Entrants had <b>19 days to make a game</b> centered around the theme of <b>MODE</b>, in which any interpretation of the word could be used within our game's concept.<br/><br/>I developed this <b>side-scroller action puzzle game</b>, where the player must clear out all enemies within each room, using a limited amount of sword slashes. The way I interpreted the theme was by having the player enter a \"mode\" at the beginning of each stage, in which time seems to have frozen, and they can freely move around without being attacked by enemies. Don’t be fooled though, enemies can still adjust their aim, and catch the player mid attack if they use certain moves twice in a row. At the end of each stage the player exits this “mode”, and all the attacks they executed occur consecutively, much like what you see in an action anime in which one character is on one end of the room, teleports to another end, and everyone in between is suddenly slashed by their sword. <a href='https://www.youtube.com/watch?v=ISgeGp7AF-8'>This video kinda spells it out</a>.<br/><br/>I placed <a href='https://itch.io/jam/bigmode-2023/rate/2423708'>#22</a> amongst 488 entires in the Originality category, with many people liking concept. One of the main critiques was the steep learning curve between levels, if I had time to go back and make changes I would definitely add some more levels in between the ones introducing new concepts so players can get more familiar.<br/><br/>The name comes from an inside joke...</>,
      requiresDownload : true,
      source: "https://grego-games.itch.io/keep-the-change",
      screenshots: [
          "KeepTheChange_Title.png",
          "KeepTheChange_1.png",
          "KeepTheChange_2.png",
          "KeepTheChange_3.png",
          "KeepTheChange_4.png"
      ]
  },
  {
      name: "Kung fu Punch-Out",
      engine: "Go Engine",
      language: "Java",
      created: "Feburary 2023",
      cdCover: "KFPOCDCover.png",
      description: <>A <b><a target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Punch-Out!!_(NES)'>Punch-Out</a> like game</b> where you <b>evade strikes from your opponent</b>, and <b>counter them by winding your attacks before striking</b> while they're in recovery. The \"health\" bar in this game is slightly pushing the opponent, or the player, closer to the edge of the ring with each strike. <b>Stepping out of the ring results in a win or loss</b>.<br/><br/>What sets this project apart is that it runs <b>on a game engine I programmed myself</b> in <b>Java</b>, using <b>OpenGL</b> for rendering graphics. This was also a small collaboration with a friend of mine who designed the main character of the game we've named <b>Benstar</b>.</>,
      requiresDownload : true,
      source: "https://grego-games.itch.io/kfpo",
      screenshots: [
          "KFPO_Title.png",
          "KFPO_1.png",
          "KFPO_2.png",
          "KFPO_3.png"
      ]
  },
  {
      name: "Power Punch",
      engine: "Unity",
      language: "C#/.NET",
      created: "January 2022",
      cdCover: "PowerPunchCDCover.png",
      description: <>Power Punch is a <b>personal passion project</b> of mine. It's a traditional fighting game inspired by classic Capcom fighters (<i>Street Fighter, Marvel Vs Capcom, Rival Schools, etc.</i>). My main goal was to <b>develop one character with a full move-set within a month</b>. Over time I found that creating unique, but clear and concise, attack animations to be a lot <b>more difficult than anticipated</b>. Eventually I was able to develop my characters normals, specials, and grabs, and released this training mode like stage.<br/><br/>Although this game is still in development, I have <b>shifted over from Unity to Godot</b>, as I felt more comfortable developing this personal project on an open sourced engine.</>,
      requiresDownload : false,
      source: "https://grego-games.itch.io/power-punch-training-mode",
      gameLink: "https://itch.io/embed-upload/9176418?color=333333",
      gameHeight: 560,
      screenshots: [
          "PowerPunch_Title.png"
      ]
  },
  {
      name: "Christmasvania",
      engine: "Unity",
      language: "C#/.NET",
      created: "December 2020",
      cdCover: "ChristmasvaniaCDCover.png",
      description: <>Christmasvania is a <b>Christmas themed Castlevania parody game</b>. You play as Atnas, Santa's vampire hunting son, as he makes his way through Santa's factory to put a stop to Dracula, who has taken possession of old St. Nick, and has let loose his minions throughout the North Pole.<br/><br/>I took some time over the holidays to develop this game. Movement and behavior was based on the original Castlevania (<i>Which may cause some frustrations among players… apologies in advance</i>), with the final boss fight echoing that of the one in the original game. Overall there's some <i><b>charm</b></i> to this title, however some <b>art assets could use some touching up</b>, and it <b>could use better music</b>.</>,
      requiresDownload : false,
      source: "https://grego-games.itch.io/christmasvania",
      gameLink: "https://itch.io/embed-upload/3142555?color=000000",
      gameHeight: 740,
      screenshots: [
          "Christmasvania_Title.png",
          "Christmasvania_1.png",
          "Christmasvania_2.png",
          "Christmasvania_3.png",
          "Christmasvania_4.png"
      ]
  },
  {
      name: "Ultra Caveman Spheres",
      engine: "Unity",
      language: "C#/.NET",
      created: "May 2020",
      cdCover: "UltraCavemanSpheresCDCover.png",
      description: <>My attemtp at re-creating <b><a target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Super_Monkey_Ball_(video_game)'>Super Monkey Ball</a> in the Unity game engine</b>.<br/><br/>The gameplay is <b>based off my interpretation of Super Monkey Ball's mechanics</b>, which may not fully reflect how they were implemented in the original game. <b>This project was developed in the span of a month</b>, with the goal of making five unique stages. I went with an art direction closet to to the original game using simple graphics with vibrant colors.<br/><br/>The prototype scenes, and code, for the main game mechanics have been uploaded to GitHub.<br/><br/>The development for this game was documented in this <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=v4hkSYq--Jk'>video</a>.</>,
      requiresDownload : true,
      source: "https://grego-games.itch.io/ultra-caveman-spheres",
      repo: "https://github.com/grego-git/UltraCavemanSpheresPrototype",
      screenshots: [
          "UCS_Title.png",
          "UCS_2.png"
      ]
  }
]

export default function GamesView() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);
  const [changingGame, setChangingGame] = useState(false);
  const [showGamePlayer, setShowGamePlayer] = useState(false);

  useEffect(() => {
    setGames(gamesList);
  }, []);

  return (
    <div className='view'>
      <GamesList games={games} currentGame={currentGame} setChangingGame={setChangingGame} setCurrentGame={setCurrentGame}></GamesList>
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

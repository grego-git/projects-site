import Carousel from 'react-multi-carousel';
import GameDisc from '../components/GameDisc';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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

export default function GamesList(props) {
    const listGames = () => {
        const rows = [];

        rows.push(
            <img key={0}
                style={{ margin: '0 auto', maxHeight: 250, display: 'block', filter: 'drop-shadow(0 0 0.25rem black)' }}
                src={process.env.PUBLIC_URL + (props.currentGame === 0 ? 'miscImages/GregoLookAtYou.png' : 'miscImages/JustGrego.png')}
                alt='grego'></img>);

        for (let i = 0; i < props.games.length; i++) {
            const game = props.games[i];

            rows.push(
                <GameDisc
                    focused={props.currentGame === i + 1}
                    id={i}
                    key={i + 1}
                    texture={game.cdCover ? (process.env.PUBLIC_URL + 'cdTextures/' + game.cdCover) : ''}>
                </GameDisc>)
        }

        return rows;
    }

    return (
        <Carousel
            centerMode={true}
            responsive={responsive}
            afterChange={(previousSlide, { currentSlide, onMove }) => {
                props.setCurrentGame(currentSlide);
                props.setChangingGame(false);
            }}
            beforeChange={(nextSlide, { currentSlide, onMove }) => {
                props.setChangingGame(true);
            }}>
            {listGames()}
        </Carousel>);
}

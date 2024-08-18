import PageInfo from '../components/PageInfo';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

export default function HomeView() {
    return (
        <div className='view'>
            <img
                className='avatar'
                src={process.env.PUBLIC_URL + 'miscImages/GregoWelcome.png'}
                alt='grego'></img>
            <br />
            <PageInfo page='home' fadeOut={false}></PageInfo>
        </div>);
}

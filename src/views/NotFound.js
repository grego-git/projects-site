export default function NotFound() {
    return (
        <div className='special-view'>
            <img className='avatar-special'
                src={process.env.PUBLIC_URL + 'miscImages/GregoNotFound.png'}
                alt='grego'></img>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Page Not Found</h3>
            <span style={{ color: 'white', textAlign: 'center' }}>Whoops, seems like this page does not exist.</span>
        </div>
    );
}
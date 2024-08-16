export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
            <img style={{ maxHeight: 375, margin: '0 auto', filter: 'drop-shadow(0 0 0.25rem black)' }}
                src={process.env.PUBLIC_URL + 'miscImages/GregoNotFound.png'}
                alt='grego'></img>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Page Not Found</h3>
            <span style={{ color: 'white', textAlign: 'center' }}>Whoops, seems like this page does not exist.</span>
        </div>
    );
}
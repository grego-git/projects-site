export default function Maitenance() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
            <img style={{ maxHeight: 375, margin: '0 auto', filter: 'drop-shadow(0 0 0.25rem black)' }}
                src={process.env.PUBLIC_URL + 'miscImages/GregoConstruction.png'}
                alt='grego'></img>
            <h3 style={{ color: 'white', textAlign: 'center' }}>This Page is Not Done Yet</h3>
            <span style={{ color: 'white', textAlign: 'center' }}>Hey, you're not supposed to be here! I'm still currently constructing this page.</span>
        </div>
    );
}
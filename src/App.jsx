import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter'

const App = () => {
    const [username, setUsername] = useState('')
    const [loaded, setLoaded] = useState(false)

    const toggleButton = () => {
        setLoaded(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded])

    if (loaded === false) {
        return (
            <div display='flex' justify='center' align='center'>
                <h1>Website loading...</h1>
                <button onClick={toggleButton}>Bet you won't click it</button>
            </div>
        )
    }

    return (
        <div display='flex' justify='center' align='center'>
            <Greeter phrase="Hello there" name="Richard" admin={true} />
            <Greeter phrase="Hello there" name="Brandon" />
            <Greeter phrase="Hello there" name="Mel" />
            <input value={username} onChange={e => setUsername(e.target.value)}></input>
            <p>You are logging in as {username}!</p>
        </div>
    )
}

export default App;
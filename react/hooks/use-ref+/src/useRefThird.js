import React, { useRef } from 'react';

import music from './assets/music.mp3';

function UseRefThird() {

    // const refAudio = useRef(new Audio(music));
    const refAudio = useRef();

    const play = () => {
        refAudio.current.play();
    }
    const pause = () => {
        refAudio.current.pause();
    }

    return (
        <div>
            <audio ref={refAudio}>
                <source src={music} type="audio/mpeg"></source>
            </audio>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </div>
    )
}

export default UseRefThird;
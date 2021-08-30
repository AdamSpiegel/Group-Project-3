import React, { useState } from 'react';
import Sound from 'react-sound';
import GiveMeEverything from '../client/src/music/Give Me Everything- Pitbull ft. Neyo.mp3'

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound
                url={GiveMeEverything}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};
export default PlaySound;
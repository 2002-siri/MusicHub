import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                  <img src={discover_weekly?.images?.[0]?.url || "placeholder-image-url"} alt="Discover Weekly" />

                <div className='body_infoText'>
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description || "Loading description..."}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleIcon className='body_shuffle' fontSize='large' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow key={item.track.id} track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;

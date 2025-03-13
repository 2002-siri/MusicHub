import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img 
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" 
                alt="spotify-logo" 
                className='sidebar_logo' 
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.length > 0 ? (
                playlists.items.map((playlist) => (
                    <SidebarOption key={playlist.id} title={playlist.name} />
                ))
            ) : (
                <p>No playlists available</p>
            )}
        </div>
    );
}

export default Sidebar;

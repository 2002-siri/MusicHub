import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }] = useDataLayerValue() || [{}]; // Added fallback to avoid destructuring error

    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input 
                    placeholder='Search for Artists, Songs, or Podcasts' 
                    type='text' 
                />
            </div>
            <div className='header_right'>
                <Avatar 
                    src={user?.images?.[0]?.url || ''} // Fallback to empty string
                    alt={user?.display_name || 'User'} // Fallback to 'User'
                />
                <h4>{user?.display_name || 'Guest'}</h4> {/* Fallback for undefined names */}
            </div>
        </div>
    );
}

export default Header;

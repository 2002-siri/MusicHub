import React from 'react';
import './Footer.css';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import SkipPrevious from '@mui/icons-material/SkipPrevious';
import SkipNext from '@mui/icons-material/SkipNext';
import Shuffle from '@mui/icons-material/Shuffle';
import Repeat from '@mui/icons-material/Repeat';
import PlaylistPlay from '@mui/icons-material/PlaylistPlay';
import VolumeDown from '@mui/icons-material/VolumeDown';
import { Box, Slider, Stack } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt="Album Logo"
          className="footer_albumLogo"
        />
        <div className="footer_songInfo">
          <h4>My fav song</h4>
          <p>Atharva</p>
        </div>
      </div>

      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>

      <div className="footer_right">
        <Stack direction="row" spacing={2} alignItems="center">
          <PlaylistPlay />
          <VolumeDown />
          <Box sx={{ width: 100 }}>
            <Slider size="small" />
          </Box>
        </Stack>
      </div>
    </div>
  );
}

export default Footer;
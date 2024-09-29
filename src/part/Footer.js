import React from 'react';
import { Avatar } from '@mui/material';
const Footer = () => {
    return (
        <div className='footer'>
            <p>The website was created and developed by Shadow   </p>
            <Avatar  sx={{marginLeft: '10px'}} alt="Remy Sharp" src="./icon-512x512.png" />
        </div>
    );
}

export default Footer;

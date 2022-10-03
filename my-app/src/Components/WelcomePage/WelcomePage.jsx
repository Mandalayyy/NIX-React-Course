import {Button,Typography} from '@mui/material/';
import './WelcomePage.css';
import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
    const navigate = useNavigate();
    const onButtonClick = useCallback(() => {
        navigate('/app');
    })
    return (
        <div className="welcomeContainer" >
              <Typography>
                Hello 
              </Typography>
              <Button variant="contained" onClick={onButtonClick}>Countinue</Button>
        </div>
      
    )
}
import React from "react";
import PropTypes from 'prop-types';
import {Box,Card,CardActions,CardContent,Button,Typography,} from '@mui/material/';

import '../TodoElement/TodoElement.css'

export const TodoAddElement = ({onAddClick}) =>{

    return(
            <Card variant="outlined" onClick={onAddClick} style={{bgcolor: '#eeeeee', width: 200, marginLeft: 20, height: 200, display: 'flex', marginTop: 20}}>
            <CardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: 300}}>
                <Typography >
                    Add
                </Typography>
            </CardContent>

            </Card>
    )
}

TodoAddElement.propTypes = {
    onAddClick: PropTypes.func.isRequired,
  }
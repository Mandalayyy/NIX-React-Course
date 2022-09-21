import React, {useCallback, useMemo} from "react";
import PropTypes from 'prop-types';
import {Box,Card,CardActions,CardContent,Button,Typography,} from '@mui/material/';
import { purple, red } from '@mui/material/colors';

import '../TodoElement/TodoElement.css'

import { getColorFromStatus } from "../../Utils/elementsUtils";


export const TodoElement = ({element, onRemoveElement = () =>{}, onEditElement = () => {}}) =>{

const additionalCardStyle = useMemo(() =>{
  return {backgroundColor: getColorFromStatus(element.itemStatus)}
},[element.itemStatus])

const onRemoveClick = useCallback(()=>{
  onRemoveElement(element.id)
},[element.id, onRemoveElement])

const onEditClick = useCallback(() => {
  onEditElement(element.id)
}, [element.id, onEditElement])

    return(
      <Card style={additionalCardStyle} sx={{ minWidth: 300, minHeight: 250}} >
      <CardContent  >
        <Typography>
        {element.title}
        </Typography>
        <Typography >
        {element.description}
        </Typography>
        <Typography >
      Creation Date: {element.creationData}
        </Typography>
        <Typography >
        {element.updatingData ? 'Update data: '+element.updatingData : null   }
        </Typography>
        <Typography>
        {element.priority}
        </Typography>
        <Typography>
        {element.itemStatus}
        </Typography>
      </CardContent>
      <CardActions className="buttonContainer">
        <Button variant="contained" onClick={onRemoveClick}>Remove</Button>
        <Button variant="contained" onClick={onEditClick}>Edit</Button>
      </CardActions>
    </Card>
      
        /* <div  className="element">
        <div className="elementsContainer">
          
          
         
          
          
          
        </div>
        <div className="buttonContainer">
          <button onClick={onRemoveClick} >Remove</button>
          <button onClick={onEditClick}>Edit</button>
        </div>
      </div> */
    )
}


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



TodoElement.propTypes = {
    element: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      creationData: PropTypes.string,
      updatingData: PropTypes.string,
      priority: PropTypes.number,
      status: PropTypes.string,
    }),
    onEditElement: PropTypes.func,
    onRemoveElement: PropTypes.func,
}
import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types';
import {  useDispatch, useSelector } from 'react-redux'
import { TextField,Grid,Typography,CircularProgress,Button} from '@mui/material';
import { selectIsItemEditing, selectIsItemRemoving } from "../../Rdx/Goods/selector";
import { editItemThunk } from "../../Rdx/Goods/thunk";
import { useEffect } from "react";

import '../GoodsList/GoodsItem.css'

export const GoodsItem = ({item, index, onRemoveItem = () => {} }) => {
    const isItemRemoving = useSelector(selectIsItemRemoving)[item.id];
    const [isItemEditing, setIsItemEditing] = useState(false);
    const dispatch = useDispatch();
    const isItemUpdating = useSelector(selectIsItemEditing)[item.id];

    const [editItem, setEditItem] = useState(item ? item : {});
   
    useEffect(() => {
        setEditItem(item)
    },[item, setEditItem])

    const onRemoveClick = useCallback(() => {
        onRemoveItem(item.id);
    }, [onRemoveItem, item.id])

    const onSaveItem = useCallback(() => {
        dispatch(editItemThunk({
            ...editItem,
        }))
    }, [dispatch,editItem])
   

    const onEditItem = useCallback(() => {
        if(isItemEditing){
            onSaveItem();
        }
        setIsItemEditing(!isItemEditing);
    },[isItemEditing,onSaveItem])

    const onItemChange = useCallback((event) =>{
        setEditItem({
            ...editItem,
            [event.target.name]: event.target.value,
        })
    }, [editItem])
    


    return(
        <>
        <Grid className='elementRow' container p={1} m={1}>
            <Grid item md={1} >
            <Typography  > {index+1}</Typography>
            </Grid>
            <Grid item  md={2}  m={1}>
            
            {isItemEditing ? <TextField 
            id="standard-basic" 
            margin="dense" 
            fullWidth label="Title" 
            variant="standard" 
            name='title'
            onChange={onItemChange} 
            value={editItem.title} /> :
            <Typography>{editItem.title}</Typography>}
            </Grid>
            <Grid item  md={2}  m={1} >
            
            {isItemEditing ? <TextField  
            id="standard-basic" 
            margin="dense" 
            fullWidth 
            label="Description" 
            variant="standard" 
            name='description'
            onChange={onItemChange} 
            value={editItem.description}/> :
            <Typography>{editItem.description}</Typography>}
            </Grid>
            <Grid item  md={2}  m={1}>
                
                {isItemEditing ? <TextField 
                id="standard-basic" 
                margin="dense" 
                fullWidth 
                label="Weight" 
                variant="standard" 
                name='weight'
                onChange={onItemChange} 
                value={editItem.weight} /> :
                <Typography variant="Caption">{editItem.weight}</Typography>}
            </Grid>
            <Grid item  md={2} >
            
            {isItemEditing ? <TextField 
            id="standard-basic" 
            margin="dense" 
            fullWidth 
            label="Category" 
            variant="standard" 
            name="category"
            onChange={onItemChange} 
            value={editItem.category} /> :
            <Typography>{editItem.category}</Typography>}
            </Grid>
            <Grid item md={1} className='buttonGridItem'>
            {isItemRemoving? <CircularProgress color="secondary" /> : <Button onClick={onRemoveClick} size="small" variant='contained'>Remove</Button>}
            </Grid>
            <Grid item md={1} className='buttonGridItem'>
            {isItemUpdating? <CircularProgress color="secondary" /> : <Button onClick={onEditItem} size="small" variant='contained'>{isItemEditing ? 'Done' : 'Edit'}</Button>}
            </Grid>
        </Grid>
        </>
    )
}

GoodsItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      weight: PropTypes.string,
      category: PropTypes.string,
    }),
    index: PropTypes.number,
    onRemoveItem: PropTypes.func,
  };
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

import { Box, TextField, Button, CircularProgress } from '@mui/material';
import { createItemThunk } from '../../Rdx/Goods/thunk';
import { selectIsItemLoading } from '../../Rdx/Goods/selector';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '300px',
  }
}
export const GoodsForm = () => {
  const { itemId } = useParams()
  const todoData = [];
  const navigate = useNavigate();
  const isItemLoading = useSelector(selectIsItemLoading);
  const firstFieldRef = useRef(null);


  const element = useMemo(() => {
    if (!itemId) {
      return null;
    }
    return todoData.find(e => e.id === itemId)
  }, [todoData, itemId]);
  
  const [title, setTitle] = useState(element ? element.title : '');
  const [description, setDescription] = useState(element ? element.description : '');
  const [weight, setWeight] = useState(element ? element.weight : '');
  const [category, setCategory] = useState(element ? element.category : '');

  useEffect(() => {
    if (element) {
      setDescription(element.description);
      setTitle(element.title);
      setWeight(element.weight);
    } else {
      setDescription('');
      setTitle('');
      setWeight('');
    }
  }, [element]);

  const dispatch = useDispatch();

  const onCloseClick = useCallback(() => {
    navigate('/app')
  }, [navigate]);

  const onDescriptionChange = useCallback((event) => {
    setDescription(event.target.value);
  }, [])

  const onTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  }, [])

  const onCategoryChange = useCallback((event) => {
    setCategory(event.target.value);
  }, [])

  const onWeightChange = useCallback((event) => {
    if (event.target.value.length === 0) {
      setWeight('');
    }

    const number = parseInt(event.target.value);
    if (isNaN(number)) {
      return;
    }

    setWeight(event.target.value);
  }, [])

  const onButtonClick = useCallback(() => {
    dispatch(createItemThunk({
        description,
        title,
        weight,
        category,
    }))
  }, [dispatch,weight,title,description, category])

 
  useEffect(() => {
    firstFieldRef?.current.focus();
  },[])
  return (
    <Box sx={styles.box}>
      <TextField inputRef={firstFieldRef}  id="standard-basic" margin="dense" fullWidth label="Title" variant="standard" onChange={onTitleChange} value={title} />
      <TextField id="standard-basic" margin="dense" fullWidth label="Description" variant="standard" onChange={onDescriptionChange} value={description}/>
      <TextField id="standard-basic" margin="dense" fullWidth label="Weight" variant="standard" onChange={onWeightChange} value={weight} />
      <TextField id="standard-basic" margin="dense" fullWidth label="Category" variant="standard" onChange={onCategoryChange} value={category} />
      {isItemLoading ? <CircularProgress color="secondary" /> : <Button onClick={onButtonClick} size="small">Save</Button>}
      <Button onClick={onCloseClick} size="small">Close</Button>
    </Box>
  )
}
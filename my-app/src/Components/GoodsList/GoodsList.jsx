import React, {useEffect,useCallback,useState} from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { GoodsItem } from "./GoodsItem";
import { CircularProgress, Typography,TextField, Button } from '@mui/material';
import { fetchGoodsThunk, removeItemThunk } from "../../Rdx/Goods/thunk";
import { selectGoodsError, selectIsDataLoading, selectGoodsToDisplay } from "../../Rdx/Goods/selector";
import { setFilterAction, sortItems } from "../../Rdx/Goods/action";
import { sortAsc, sortDesc } from "../../Utils/elementsUtils";

import { useDebounce } from "../Hooks/debounce";

import '../GoodsList/GoodsItem.css'

export const GoodsList = () => {
    const dispatch = useDispatch();
    const goodsError =useSelector(selectGoodsError)
    const isDataLoading = useSelector(selectIsDataLoading)
    const goods = useSelector(selectGoodsToDisplay);
    const [filter, setFilter] = useState('');
    const debounce = useDebounce();
    const navigate = useNavigate();

    const onButtonClick = useCallback(() => {
        navigate('edit');
    }, [navigate])

    useEffect(() =>{
        dispatch(fetchGoodsThunk());
    },[dispatch])

    const onRemoveItem = useCallback((itemId) => {
        dispatch(removeItemThunk(itemId));
    },[dispatch])

    const onFilterChange = useCallback((event) => {
        setFilter(event.target.value);
        debounce(() => {
          dispatch(setFilterAction(event.target.value));
        });
      }, [dispatch,debounce]);

    const onSortAscClick = useCallback(() => {
        sortAsc(goods, 'title');
        dispatch(sortItems(goods))
       
    },[goods,dispatch])

    const onSortDescClick = useCallback(() => {
        sortDesc(goods, 'title');
        dispatch(sortItems(goods))
    },[goods,dispatch])

    if(goodsError){
        return <Typography>Error {goodsError}</Typography>
    }
    if(isDataLoading){
        return <CircularProgress color="secondary" />
    }
    return(
        <>
        <div className="BtnGroup">
            <Button onClick={onButtonClick} size="small" variant='contained'>Add New Item</Button>
            <div className="SortBtn">
            <Button onClick={onSortAscClick} size="small" variant='contained'>Sort Asc</Button>
            <Button onClick={onSortDescClick} size="small" variant='contained'>Sort Desc</Button>
            </div>
        </div>
          <TextField 
        id="standard-basic"
        margin="dense" 
        fullWidth 
        name='description' 
        label="Filter by name" 
        variant="standard" 
        onChange={onFilterChange} 
        value={filter}
        />
            {goods.map((item, index) => <GoodsItem item={item} key={item.id} index={index} onRemoveItem={onRemoveItem}/> )}
        </>
        
    )
}
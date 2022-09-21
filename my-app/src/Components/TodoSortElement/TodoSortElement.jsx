import React, {useCallback, useEffect} from "react";
import { selectToDoData } from "../../Rdx/TodoList/selector";
import { useSelector, useDispatch } from "react-redux";
import { sortTodoElements } from "../../Rdx/TodoList/action";
import {InputLabel,MenuItem,FormControl,Select} from '@mui/material/';

export const TodoSortElement = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectToDoData)


         
 const sortTodoEl = useCallback((e) => {
    dispatch(sortTodoElements(e.target.value));
    console.log(e.target.value);
 },[dispatch,sortTodoElements]) 

    return(
        <div>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={e => {sortTodoEl(e)}}
          label="Sort"
          defaultValue={''}
        >
          <MenuItem value="">Sort By</MenuItem>
          <MenuItem value='itemStatus'>Status</MenuItem>
          <MenuItem value="creationData">Creation Date</MenuItem>
          <MenuItem value="updatingData">Updating Date</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}



import React, { useState, useMemo} from "react";
import { useSelector } from "react-redux";
import {InputLabel,MenuItem,FormControl,Select} from '@mui/material/';
import { selectToDoData } from "../../Rdx/TodoList/selector";
import {sortAsc} from '../../Utils/elementsUtils'

export const TodoSortElement = () => {
    const data = useSelector(selectToDoData)
    const [field, setField] = useState('');

   const sortTodoEl = useMemo((e) => {
      if(data){
        sortAsc(data, field)
        console.log('render')
        console.log(data);
        return {...data};
      }
    },[data, field]);

    return(
        <div>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={e => {setField(e.target.value)}}
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



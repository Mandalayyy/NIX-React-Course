import React, {useMemo, useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModalForm } from "../../Rdx/App/actions";
import { selectToDoData, selectItemStatus } from "../../Rdx/TodoList/selector";
import { selectIsModalFormVisable, selectEditItemId } from "../../Rdx/App/selector";
import { editTodoItem, addTodoItem, addItemStatus } from "../../Rdx/TodoList/action";
import { DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, TextField, Button,Radio,RadioGroup,FormControlLabel } from '@mui/material';

import '../TodoModalFormElement/TodoModalFormElement.css'



export const TodoModalFormElement = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectToDoData);
    const isModalFormVisable = useSelector(selectIsModalFormVisable);
    const editItemId = useSelector(selectEditItemId);
    const itemStatus = useSelector(selectItemStatus);

    const element = useMemo(() => {
        if(!editItemId){
            return null
        }
        return data.find(e => e.id === editItemId)
    },[data, editItemId])

    const [description, setDescription] = useState(element ? element.description : '');
    const [title, setTitle] = useState(element ? element.title : '');
    const [priority, setPriority] = useState(element ? element.priority : '');

    const onDescriptionChange = useCallback((event) => {
        setDescription(event.target.value);
      }, [])
    
      const onTitleChange = useCallback((event) => {
        setTitle(event.target.value);
      }, [])
    
      const onPriorityChange = useCallback((event) => {
        if (event.target.value.length === 0) {
          setPriority('');
        }
    
        const number = parseInt(event.target.value);
        if (isNaN(number) || number < 0 || number > 2) {
          return;
        }
    
        setPriority(number);
      }, [])


      const onCloseClick = useCallback(
        () => {
          dispatch(hideModalForm())
        },
        [dispatch],
      )

      const onStatusChange = useCallback((e) => {
        dispatch(addItemStatus(e.target.value));
      },[dispatch])

      const onSaveClick = useCallback(() => {
        if (element) {
          dispatch(editTodoItem({
            ...element,
            description,
            title,
            priority,
            itemStatus,
          }))
        } else {
          dispatch(addTodoItem({
            description,
            title,
            priority,
            itemStatus,
          }));
          
        }
        dispatch(hideModalForm());
      }, [element, dispatch, description, title, priority, itemStatus]);

    return (
      <Dialog open={isModalFormVisable} onClose={onCloseClick}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
        <DialogContentText>
          Please enter data to add an item
        </DialogContentText>
        <TextField id="standard-basic" margin="dense" fullWidth label="Title" variant="standard" onChange={onTitleChange} value={title} />
        <TextField id="standard-basic" margin="dense" fullWidth label="Description" variant="standard" onChange={onDescriptionChange} value={description} />
        <TextField id="standard-basic" margin="dense" fullWidth label="Priority" variant="standard" onChange={onPriorityChange} value={priority} />
        </DialogContent>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              style={{marginLeft: 50}}
            >
                <FormControlLabel value="Open" checked={itemStatus === "Open"} onChange={onStatusChange} control={<Radio />} label="Open" />
                <FormControlLabel value="In Progress" checked={itemStatus === "In Progress"} onChange={onStatusChange} control={<Radio />} label="In Progress" />
                <FormControlLabel value="Done" checked={itemStatus === "Done"} onChange={onStatusChange}  control={<Radio />} label="Done" />
              </RadioGroup>
    
            <DialogActions>
                <Button onClick={onSaveClick}>Save</Button>
                <Button onClick={onCloseClick}>Close</Button>
            </DialogActions>
      </Dialog>
       
    )
}
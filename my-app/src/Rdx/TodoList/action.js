import { v4 as uuidv4 } from 'uuid';

export const REMOVE_TODO_ITEM = "REMOVE_TODO_ITEM";
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const EDIT_TODO_ITEM = "EDIT_TODO_ITEM";
export const ADD_ITEM_STATUS = "ADD_ITEM_STATUS";
export const SORT_BY_SATUS = "SORT_BY_STATUS";
export const SORT_TODO_ELEMENTS = "SORT_TODO_ELEMENTS"

export const removeTodoItem = (id) => {
    return {
        type: REMOVE_TODO_ITEM,
        itemId: id,
    }
}

export const addTodoItem = (itemData) => {
    return{
        type: ADD_TODO_ITEM,
        item: {
                ...itemData,
                id: uuidv4(),
                creationData: new Date().toLocaleString(),
                updatingData: null,
        }
    }
}

export const editTodoItem = (itemData) => {
    return {
        type: EDIT_TODO_ITEM,
        item: { 
            ...itemData,
            updatingData: new Date().toLocaleString(),
        },
    }
}

export const addItemStatus = (status) => {
    return{
        type: ADD_ITEM_STATUS,
        status: status,
    }
}

export const sortByStatus = () => ({
    type: SORT_BY_SATUS,
});

export const sortTodoElements = (payload) => ({
    type: SORT_TODO_ELEMENTS,
    payload,
});
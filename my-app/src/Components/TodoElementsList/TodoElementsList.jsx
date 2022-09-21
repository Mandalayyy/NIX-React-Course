import React,{ useCallback, useState } from "react";
import { TodoElement } from "../TodoElement/TodoElement";
import { useDispatch, useSelector } from "react-redux";
import { selectToDoData } from "../../Rdx/TodoList/selector";
import { TodoAddElement } from "../TodoElement/TodoAddElement";

import '../TodoElementsList/TodoElementsList.css';

import { removeTodoItem } from "../../Rdx/TodoList/action";
import { showModalForm } from "../../Rdx/App/actions";
import { useEffect } from "react";


export const TodoElementsList = () => {
    const storeCards = useSelector(selectToDoData);
    const dispatch = useDispatch();
    const [cards, setCards] = useState([])
    useEffect(() => {
        if(storeCards){
            setCards(cards)
        }
    }, [storeCards])

    const onRemoveElement = useCallback((id)=>{
        dispatch(removeTodoItem(id));
    })

    const onEditElement = useCallback((id) =>{
        dispatch(showModalForm(id))
    },[dispatch])

    const onAddClick = useCallback(() =>{
        dispatch(showModalForm());
    }, [dispatch])

    return(
        <div className="elementList">
            
            {storeCards.map(element => <TodoElement element={element} key={element.id} onRemoveElement={onRemoveElement} onEditElement={onEditElement} />)}
            <TodoAddElement onAddClick={onAddClick} />
        </div>
    )
}
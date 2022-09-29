import React,{ useCallback, useState } from "react";
import { TodoElement } from "../TodoElement/TodoElement";
import { useDispatch, useSelector } from "react-redux";
import { selectToDoData } from "../../Rdx/TodoList/selector";
import { TodoAddElement } from "../TodoElement/TodoAddElement";

import '../TodoElementsList/TodoElementsList.css';

import { removeTodoItem } from "../../Rdx/TodoList/action";
import { showModalForm } from "../../Rdx/App/actions";
import { useEffect } from "react";
import { requestGoods } from "../Services/goodsService";


export const TodoElementsList = () => {
    const storeCards = useSelector(selectToDoData);
    const dispatch = useDispatch();
    const [cards, setCards] = useState([])
    useEffect(() => {
        if(storeCards){
            setCards(cards)
        }
    }, [storeCards, cards])

    const onRemoveElement = useCallback((id)=>{
        dispatch(removeTodoItem(id));
    },[dispatch])

    const onEditElement = useCallback((id) =>{
        dispatch(showModalForm(id))
    },[dispatch])

    const onAddClick = useCallback(() =>{
        dispatch(showModalForm());
    }, [dispatch])

    useEffect(() => {
        requestGoods().then((response) => {
                console.log('Response', response)
        })
    },[])

    return(
        <div className="elementList">
            
            {storeCards.map(element => <TodoElement element={element} key={element.id} onRemoveElement={onRemoveElement} onEditElement={onEditElement} />)}
            <TodoAddElement onAddClick={onAddClick} />
        </div>
    )
}
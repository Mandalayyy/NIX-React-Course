import { v4 as uuidv4 } from 'uuid';
import { REMOVE_TODO_ITEM, ADD_TODO_ITEM, EDIT_TODO_ITEM, ADD_ITEM_STATUS} from './action';

const initialState = {
    data: [
      {
        id: uuidv4(),
        title: 'Visit a doctor',
        description: 'Visit a doctor on Monday',
        priority: 1,
        itemStatus: "Done",
        creationData: '20.09.2022, 19:49:43',
        updatingData: '20.09.2022, 20:50:33',
      },
      {
        id: uuidv4(),
        title: 'Buy',
        description: 'Buy',
        priority: 2,
        itemStatus: "Open",
        creationData: '20.10.2022, 14:49:43',
        updatingData: '20.10.2022, 15:50:33',
      },

    ],
    status: " ",
  }
  
  export const reducer = (state = initialState, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case REMOVE_TODO_ITEM:
            return {
                ...state,
                data: state.data.filter(e => e.id !== action.itemId)
            }
        case ADD_TODO_ITEM:
            return{
                ...state, 
                data: [...state.data,action.item]
            }
            case EDIT_TODO_ITEM: 
            return {
              ...state,
              updatingData: new Date().toLocaleString(),
              data: state.data.map(element => {
                if (element.id === action.item.id) {
                  return action.item;
                } else {
                  return element;
                }
              })
            }
            case ADD_ITEM_STATUS:
              return{
                ...state,
                status: action.status,
              }
      default:
        return state;
    }
  }
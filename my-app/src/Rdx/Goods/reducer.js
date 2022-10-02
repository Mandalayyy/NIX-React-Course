import { 
  GET_GOODS_LIST_SUCCESS, 
  GET_GOODS_LIST_REQUEST, 
  GET_GOODS_LIST_FAILED, 
  CREATE_ITEM_SUCCESS, 
  CREATE_ITEM_REQUEST,
  CREATE_ITEM_FAILED, 
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_FAILED,
  EDIT_ITEM_REQUEST,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILED,
  SET_FILTER,
  SORT_ITEMS
} from "./action";

const initialState = {
  data: [],
  isDataLoading: false,
  isDataAdding: false,
  isItemRemoving: {},
  isItemEditing: {},
  filter: "",
};

export const reducer = (state = initialState, action) =>{
  switch(action.type) {
  case GET_GOODS_LIST_SUCCESS:
    return{
      ...state,
      data: action.list,
      isDataLoading: false,
    };
  case GET_GOODS_LIST_REQUEST:
    return{
      ...state,
      isDataLoading: true,
      error: null,
    };
  case GET_GOODS_LIST_FAILED:
    return{
      ...state,
      data: [],
      error: action.error,
      isDataLoading: true,
    };
  case CREATE_ITEM_SUCCESS:
    return{
      ...state,
      isDataAdding: false,
      data: [...state.data, action.item],
            
    };
  case CREATE_ITEM_REQUEST:
    return{
      ...state,
      isDataAdding: true,
      error: null,
    };
  case CREATE_ITEM_FAILED: 
    return{
      ...state, 
      error: action.error,
      isDataAdding: false
    };
  case REMOVE_ITEM_SUCCESS:
    return{
      ...state,
      isItemRemoving: {
        ...state.isItemRemoving,
        [action.itemId]: false
      },
      data: state.data.filter(i => i.id !== action.itemId),
                
    };
  case REMOVE_ITEM_REQUEST:
    return{
      ...state,
      isItemRemoving: {
        ...state.isItemRemoving,
        [action.itemId]: true
      },
      error: null,
    };
  case REMOVE_ITEM_FAILED: 
    return{
      ...state, 
      error: action.error,
      isItemRemoving: {
        ...state.isItemRemoving,
        [action.itemId]: false
      },
    };
  case EDIT_ITEM_SUCCESS:
    return{
      ...state,
      isDataAdding: false,
      data: state.data.map(i => {if (i.id === action.item.id) {
        return action.item;
      }return i;
      }),
      isItemEditing: {
        ...state.isItemRemoving,
        [action.item.id]: false
      }
    };
  case EDIT_ITEM_REQUEST:
    return{
      ...state,
      isItemEditing: {
        ...state.isItemEditing,
        [action.item.id]: true
      },
      error: null,
    };
  case EDIT_ITEM_FAILED: 
    return{
      ...state, 
      error: action.error,
      isItemEditing: {
        ...state.isItemEditing,
        [action.item.id]: false
      },
    };
  case SET_FILTER:
    return {
      ...state,
      filter: action.filter,
    };
  case SORT_ITEMS: 
    return{
      ...state,
      data: action.list,

    };
  default:
    return state;
  }
};
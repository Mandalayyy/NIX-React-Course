export const GET_GOODS_LIST_SUCCESS = "GET_GOODS_LIST_SUCCESS"; 
export const GET_GOODS_LIST_REQUEST = "GET_GOODS_LIST_REQUEST";
export const GET_GOODS_LIST_FAILED = "GET_GOODS_LIST_FAILED";

export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS"; 
export const CREATE_ITEM_REQUEST = "CREATE_ITEM_REQUEST";
export const CREATE_ITEM_FAILED = "CREATE_ITEM_FAILED";

export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS"; 
export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const REMOVE_ITEM_FAILED = "REMOVE_ITEM_FAILED";

export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS"; 
export const EDIT_ITEM_REQUEST = "EDIT_ITEM_REQUEST";
export const EDIT_ITEM_FAILED = "EDIT_ITEM_FAILED";

export const SET_FILTER = "SET_FILTER";

export const SORT_ITEMS = "SORT_ITEMS";


export const getGoodsListSuccess = (list) => {
  return{
    type: GET_GOODS_LIST_SUCCESS,
    list
  };
};

export const getGoodsListRequest = () => {
  return{
    type: GET_GOODS_LIST_REQUEST
  };
};

export const getGoodsListFailed = (error) =>{
  return {
    type: GET_GOODS_LIST_FAILED,
    error: error,
  };
};

export const createItemSuccess = (item) => {
  return{
    type: CREATE_ITEM_SUCCESS,
    item,
  };
};

export const createItemRequest = () => {
  return{
    type: CREATE_ITEM_REQUEST
  };
};

export const createItemFailed = (error) =>{
  return {
    type: CREATE_ITEM_FAILED,
    error: error,
  };
};

export const removeItemSuccess = (itemId) => {
  return{
    type: REMOVE_ITEM_SUCCESS,
    itemId,
  };
};

export const removeItemRequest = (itemId) => {
  return{
    type: REMOVE_ITEM_REQUEST,
    itemId,
  };
};

export const removeItemFailed = (error, itemId) =>{
  return {
    type: REMOVE_ITEM_FAILED,
    error: error,
    itemId,
  };
};

export const editItemSuccess = (item) => {
  return{
    type: EDIT_ITEM_SUCCESS,
    item,
  };
};

export const editItemRequest = (item) => {
  return{
    type: EDIT_ITEM_REQUEST,
    item,
  };
};

export const editItemFailed = (error, item) =>{
  return {
    type: EDIT_ITEM_FAILED,
    error: error,
    item,
  };
};

export const setFilterAction = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};

export const sortItems = (list) => {
  return {
    type: SORT_ITEMS,
    list
  };
};
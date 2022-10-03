import { requestGoods, createItem, removeItem, editItem } from "../../Services/goodsService";
import { 
  getGoodsListSuccess, 
  getGoodsListRequest, 
  getGoodsListFailed,
  createItemFailed,
  createItemRequest,
  createItemSuccess,
  removeItemSuccess,
  removeItemRequest,
  removeItemFailed,
  editItemSuccess,
  editItemRequest,
  editItemFailed,
} from "./action";


export const fetchGoodsThunk = () => {
  return async (dispatch) => {
    dispatch(getGoodsListRequest());
    const response = await requestGoods();
    console.log("response success",response.success);
    if(response.success){
      dispatch(getGoodsListSuccess(response.responseJson.goods));
    }else{
      dispatch(getGoodsListFailed(response.error));
    }
  };
};

export const createItemThunk = (item) => {
  return async (dispatch) => {
    dispatch(createItemRequest());
    const response = await createItem(item);
    console.log("response success",response.success);
    if(response.success){
      dispatch(createItemSuccess(response.responseJson));
    }else{
      dispatch(createItemFailed(response.error));
    }
  };
};

export const removeItemThunk = (itemId) => {
  return async (dispatch) => {
    dispatch(removeItemRequest(itemId));
    const response = await removeItem(itemId);
    console.log("response success",response.success);
    if(response.success){
      dispatch(removeItemSuccess(itemId));
    }else{
      dispatch(removeItemFailed(response.error,itemId));
    }
  };
};

export const editItemThunk = (item) => {
  return async (dispatch) => {
    dispatch(editItemRequest(item));
    const response = await editItem(item);
    console.log("response success",response.success);
    if(response.success){
      dispatch(editItemSuccess(item));
    }else{
      dispatch(editItemFailed(response.error,item));
    }
  };
};

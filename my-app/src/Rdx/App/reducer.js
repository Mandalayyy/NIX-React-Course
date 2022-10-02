import { HIDE_MODAL_FORM, SHOW_MODAL_FORM } from "./actions";

const initialState = {
  isModalFormVisable: false,
  editItemId: null,
};

export const reducer = (state = initialState, action) =>{
  switch(action.type) {
  case SHOW_MODAL_FORM:
    return{
      ...state,
      isModalFormVisable: true,
      editItemId: action.editItemId,
    };
  case HIDE_MODAL_FORM:
    return{
      ...state,
      isModalFormVisable: false,
    };
  default:
    return state;
  }
};
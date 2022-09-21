export const SHOW_MODAL_FORM ="SHOW_MODAL_FORM";
export const HIDE_MODAL_FORM ="HIDE_MODAL_FORM";


export const showModalForm = (id) => {
    return{
        type: SHOW_MODAL_FORM,
        editItemId: id,
    }
}

export const hideModalForm = () => {
    return {
        type: HIDE_MODAL_FORM,
    }
}
import { createSelector } from "reselect";

export const selectAllGoods = state => state.goods.data;
export const selectIsDataLoading = state => state.goods.isDataLoading;
export const selectGoodsError = state => state.goods.error;
export const selectIsItemLoading = state => state.goods.isDataAdding ;
export const selectIsItemRemoving = state => state.goods.isItemRemoving;
export const selectIsItemEditing = state => state.goods.isItemEditing;
export const selectFilter = state => state.goods.filter;

export const selectGoodsToDisplay = createSelector(
  selectAllGoods,
  selectFilter,
  (goods, filter) => goods.filter(g => g.title.toLowerCase().includes(filter.toLowerCase())),
);
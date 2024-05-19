import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filters.name;
export const selectFiltersName = createSelector(
  [selectFilters, selectContacts],
  (selectFilters, selectContactList) => {
    if (!selectFilters) {
      return selectContactList;
    } else {
      return selectContactList.filter((contact) =>
        contact.name.toLowerCase().includes(selectFilters.trim().toLowerCase())
      );
    }
  }
);
export const { filterContacts } = filtersSlice.actions;
export default filtersSlice.reducer;

import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters.name;
export const selectFiltersName = createSelector(
  [selectFilters, selectContacts],
  (selectFilters, selectContacts) => {
    if (!selectFilters) {
      return selectContacts;
    } else {
      return selectContacts.filter((contact) =>
        contact.name.toLowerCase().includes(selectFilters.trim().toLowerCase())
      );
    }
  }
);

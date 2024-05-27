import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logout } from "../auth/operations";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
    edited: false,
  },
  reducers: {
    setEdited: {
      reducer: (state, action) => {
        state.edited = action.payload;
      },
    },
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const contact = state.items.find((contact) => {
          return contact.id === action.payload.id;
        });

        const newName = action.payload.name;

        const newNumber = action.payload.number;

        if (newName) {
          contact.name = newName;
        }
        if (newNumber) {
          contact.number = newNumber;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default contactsSlice.reducer;
export const { setEdited } = contactsSlice.actions;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const fetchContacts = createAsyncThunk(
  "fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "delContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "editContact",
  async (editedContact, thunkAPI) => {
    const { id, name, number } = editedContact;
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    function prepare(name, number) {
      if (!name && !number) {
        return thunkAPI.rejectWithValue("No data to update");
      } else if (!name) {
        return { number };
      } else if (!number) {
        return { name };
      }
      return { name, number };
    }

    setAuthHeader(savedToken);
    try {
      const response = await axios.patch(
        `/contacts/${id}`,
        prepare(name, number)
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

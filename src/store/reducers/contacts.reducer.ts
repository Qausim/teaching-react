import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state as staticData } from "../../data/static-data";
import { DeleteContactAction } from '../actions/contact.actions';


export type ContactsActions = DeleteContactAction;


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: staticData.contacts,
  reducers: {
    deleteContact(state, action: PayloadAction<string>) {
      delete state[action.payload];
    }
  },
});

export const { deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer: Reducer<typeof staticData.contacts, ContactsActions> = (state = staticData.contacts, action) => {
//   switch (action.type) {
//     case DELETE_CONTACT:
//       const stateCopy = {...state};
//       delete stateCopy[action.payload];
//       return stateCopy;
//     default:
//       return state;
//   }
// };

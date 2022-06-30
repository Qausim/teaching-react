import { Reducer } from 'redux';
import { state as staticData } from "../../data/static-data";
import { DeleteContactAction } from '../actions/contact.actions';
import { DELETE_CONTACT } from '../constants';


type ContactsActions = DeleteContactAction;

export const contactsReducer: Reducer<typeof staticData.contacts, ContactsActions> = (state = staticData.contacts, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      const stateCopy = {...state};
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
};

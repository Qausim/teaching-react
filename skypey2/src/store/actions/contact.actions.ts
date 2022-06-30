import { DELETE_CONTACT } from "../constants";

export type DeleteContactAction = {
  type: typeof DELETE_CONTACT;
  payload: string;
};

export const deleteContact = (contactId: string): DeleteContactAction => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

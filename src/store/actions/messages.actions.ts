import { MessageType } from "../../data/static-data";
import { DELETE_MESSAGE, SEND_MESSAGE } from "../constants"

export type SendMessageAction = {
  type: typeof SEND_MESSAGE;
  payload: {
    userId: string;
    message: MessageType;
  }
};

export const sendMessage = (userId: string, message: MessageType): SendMessageAction => ({
  type: SEND_MESSAGE,
  payload: {
    userId,
    message,
  },
});

export type DeleteMessageAction = {
  type: typeof DELETE_MESSAGE;
  payload: {
    id: string;
    userId: string;
  };
};

export const deleteMessage = (id: string, userId: string): DeleteMessageAction => ({
  type: DELETE_MESSAGE,
  payload: {
    id,
    userId,
  },
});

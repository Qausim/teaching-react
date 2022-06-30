import { MouseEvent } from "react";
import { UserType } from "../../data/static-data";
import store from "../../store";
import { deleteContact } from "../../store/actions/contact.actions";
import { SET_ACTIVE_USER_ID } from "../../store/constants";
import "./User.css";


type UserProps = {
  user: UserType;
};


const User = ({ user }: UserProps) => {
  const { name, profile_pic, status, user_id } = user;

  const deleteUser = (e: MouseEvent) => {
    e.stopPropagation();
    store.dispatch(deleteContact(user_id));
  }

  return (
    <div
      className="User"
      onClick={() => store.dispatch({
        type: SET_ACTIVE_USER_ID,
        payload: user_id,
      })}
    >
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>

      <button
        className="delete-btn"
        onClick={deleteUser}
      >
        &times;
      </button>
    </div>
  );
};

export default User;

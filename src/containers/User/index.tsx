import { MouseEvent } from "react";
import { UserType } from "../../data/static-data";
import store, { useAppDispatch } from "../../store";
// import { deleteContact } from "../../store/actions/contact.actions";
import { SET_ACTIVE_USER_ID } from "../../store/constants";
import { setActiveUserId } from "../../store/reducers/chat-state.reducer";
import { deleteContact } from "../../store/reducers/contacts.reducer";
import "./User.css";


type UserProps = {
  user: UserType;
};


const User = ({ user }: UserProps) => {
  const { name, profile_pic, status, user_id } = user;
  const dispatch = useAppDispatch();

  const deleteUser = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteContact(user_id));
  }

  return (
    <div
      className="User"
      onClick={() => dispatch(setActiveUserId(user_id))}
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

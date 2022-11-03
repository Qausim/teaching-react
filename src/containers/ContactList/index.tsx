import { useAppSelector } from "../../store";
import _ from 'lodash';
import User from "../User";


const ContactList = () => {
  const contacts = useAppSelector(state => state.contacts);

  return (
    <>
      {
        _.values(contacts).map((contact) => (
          <User
            user={contact}
            key={contact.user_id}
          />
        ))
      }
    </>
  );
}

export default ContactList

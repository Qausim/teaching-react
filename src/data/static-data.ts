import randomWords from 'random-words';
import { AvatarGenerator } from 'random-avatar-generator';
import faker from "faker";
import _ from "lodash"; // lodash is a utility lib for Javascript
import shortid from 'shortid';


export type MessageType = {
  is_user_msg: boolean;
  text: string;
  message_id: string;
};

const avatarGenerator = new AvatarGenerator();
const users = generateUsers(10);
export const contacts = _.mapKeys(users, "user_id");
export const getMessages = (messagesPerUser: number) => {
  let messages: {
    [key: string]: Map<string, MessageType>;
  } = {};
  _.forEach(users, user => {
    const generatedMessages = generateMsgs(messagesPerUser);
    const messagesMap = new Map();
    generatedMessages.forEach((message) => {
      messagesMap.set(message.message_id, message);
    });
    messages[user.user_id] = messagesMap;
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null
};

/**
 * @returns {Object} - a new user object
 */
export type UserType = {
  name: string;
  email: string;
  profile_pic: string;
  status: string;
  user_id: string;
};
export function generateUser(): UserType {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: avatarGenerator.generateRandomAvatar(),
    status: randomWords({ min: 5, max: 10, join: ' ' }),
    user_id: shortid.generate()
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg(): MessageType {
  return {
    message_id: shortid.generate(),
    text: randomWords({ min: 8, max: 15, join: ' ' }),
    is_user_msg: faker.random.boolean(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers: number): UserType[] {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs: number): MessageType[] {
  return Array.from({ length: numberOfMsgs }, () => generateMsg());
}

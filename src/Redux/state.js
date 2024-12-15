import { rerenderEntireTree } from "../render";

let state = {
  inputedText: "",
};

export let updateNewMessageText = (newMessage) => {
  state.inputedText = newMessage;
  rerenderEntireTree(state);
};

export default state;

import { Message } from "../models/message.model.js";

export const createMessageService = async (data) => {
  const message = await Message.create(data);
  return message;
};

export const getMessagesService = async () => {
  const messages = await Message.find().sort({ createdAt: -1 });
  return messages;
};

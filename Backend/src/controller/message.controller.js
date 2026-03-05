import {
  createMessageService,
  getMessagesService,
} from "../service/message.service.js";

export const createMessageController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = await createMessageService({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save message",
    });
  }
};

export const getMessagesController = async (req, res) => {
  try {
    const messages = await getMessagesService();

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};
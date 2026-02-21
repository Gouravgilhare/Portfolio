import { sendEmailService } from "../service/ses.service.js";
export const sendEmailController = async (req, res) => {
  try {
    const { to, subject, name, message } = req.body;

    await sendEmailService({ to, subject, name, message });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export const sendEmailService = async ({ to, subject, name, message }) => {
  const params = {
    Source: process.env.SES_FROM_EMAIL,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: { Data: subject },
      Body: {
        Html: {
          Data: `
            <div style="font-family: Arial; padding: 20px;">
              <h2 style="color:#4CAF50;">New Contact Message 🚀</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <hr/>
              <p style="font-size:12px;color:gray;">
                Sent from gouravgilhare.online
              </p>
            </div>
          `,
        },
      },
    },
  };

  await ses.send(new SendEmailCommand(params));
};

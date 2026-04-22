import nodemailer from 'nodemailer';

export class MailService {
  private transporter;

  constructor() {
    // Note: For production, use environment variables for credentials
    // For testing, you can use Ethereal Email or a Gmail App Password
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.ethereal.email',
      port: Number(process.env.MAIL_PORT) || 587,
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER || 'mock_user@ethereal.email',
        pass: process.env.MAIL_PASS || 'mock_pass',
      },
    });
  }

  async sendContactEmail(data: { name: string; email: string; phone: string; service: string; message: string }) {
    const { name, email, phone, service, message } = data;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || 'admin@castletech.com',
      subject: `New Contact Inquiry: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

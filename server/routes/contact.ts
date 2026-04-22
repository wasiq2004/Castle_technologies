import { Router } from 'express';
import { MailService } from '../services/mail.service';

const router = Router();
const mailService = new MailService();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    await mailService.sendContactEmail({ name, email, phone, service, message });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

export default router;

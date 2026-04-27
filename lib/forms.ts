type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

type NewsletterSubmission = {
  email: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEBSITE_NAME = 'Castle Technologies';

const getAccessKey = () => import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? '';

const ensureConfigured = () => {
  if (getAccessKey()) {
    return;
  }

  throw new Error('Form delivery is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY in your Vercel environment variables.');
};

const submitToWeb3Forms = async (payload: Record<string, string>) => {
  ensureConfigured();

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: getAccessKey(),
      from_name: WEBSITE_NAME,
      botcheck: '',
      ...payload,
    }),
  });

  const data = (await response.json().catch(() => ({}))) as Web3FormsResponse;

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Form submission failed. Please try again.');
  }
};

export const submitContactForm = async (submission: ContactSubmission) => {
  await submitToWeb3Forms({
    subject: `New Contact Inquiry${submission.service ? `: ${submission.service}` : ''}`,
    name: submission.name,
    email: submission.email,
    phone: submission.phone?.trim() || 'Not provided',
    service: submission.service?.trim() || 'Not selected',
    message: submission.message,
  });
};

export const submitNewsletterSignup = async (submission: NewsletterSubmission) => {
  await submitToWeb3Forms({
    subject: 'New Newsletter Signup',
    email: submission.email,
    message: `Newsletter signup received for ${submission.email}.`,
  });
};

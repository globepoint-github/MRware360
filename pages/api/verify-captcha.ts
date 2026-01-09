import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { captcha } = req.body;
  const storedCaptcha = req.cookies.captcha;

  if (!captcha || !storedCaptcha) {
    return res.status(200).json({ valid: false });
  }

  // Check if match (Strict case sensitivity requested)
  if (captcha === storedCaptcha) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(200).json({ valid: false });
  }
}

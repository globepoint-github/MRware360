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

  // Check if match (case insensitive if desired, but usually captcha is case sensitive or not depending on config)
  // svg-captcha default is case sensitive? No, the text is just text.
  // Generally captchas are case insensitive for UX. Let's make it case insensitive.
  if (captcha.toLowerCase() === storedCaptcha.toLowerCase()) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(200).json({ valid: false });
  }
}

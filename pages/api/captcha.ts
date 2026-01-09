import type { NextApiRequest, NextApiResponse } from 'next';
import svgCaptcha from 'svg-captcha';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const captcha = svgCaptcha.create({
    size: 6,
    noise: 0, // Remove noise lines for clarity
    color: false,
    background: "#ffffff",
  });
  
  // Set cookie
  // Note: Vercel/Next.js serverless functions might strip some headers depending on config,
  // but standard Set-Cookie usually works.
  res.setHeader(
    'Set-Cookie',
    `captcha=${captcha.text}; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  );

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  
  res.status(200).send(captcha.data);
}

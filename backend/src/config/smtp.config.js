import nodemailer from 'nodemailer'

let _transport = null

export function getTransport() {
  if (_transport) return _transport

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error('Missing required SMTP environment variables: SMTP_HOST, SMTP_USER, SMTP_PASSWORD')
  }

  _transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE !== 'false',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })

  return _transport
}

import { sendContactEmails } from '../services/mail.service.js'

export async function handleContact(req, res) {
  const { fullName, email, mobile, company, service, message } = req.body

  try {
    await sendContactEmails({ fullName, email, mobile, company, service, message })
    return res.status(200).json({ success: true, message: 'Your inquiry has been sent successfully.' })
  } catch (err) {
    console.error('[contact] Email send failure:', err.message)
    return res.status(500).json({ success: false, message: 'Failed to send your message. Please try again later.' })
  }
}

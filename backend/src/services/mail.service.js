import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getTransport } from '../config/smtp.config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const LOGO_PATH = join(__dirname, '../../assets/logo-light.svg')

const RECIPIENT = process.env.CONTACT_RECIPIENT || 'sales@privyasolution.com'

const logoAttachment = {
  filename: 'logo.png',
  path: LOGO_PATH,
  cid: 'privya-logo',
}

function gradientHeader(titleHtml) {
  return `
  <div style="background:linear-gradient(135deg,#2563EB 0%,#151745 100%);border-radius:8px 8px 0 0;padding:15px 32px 15px;text-align:center;">
    <img src="cid:privya-logo" alt="Privya Solution LLP" width="200" height="79"
      style="display:block;margin:0 auto 18px;border:0;" />
    <p style="margin:0;font-family:Inter,sans-serif;font-size:19px;font-weight:700;color:#ffffff;line-height:1.4;">
      ${titleHtml}
    </p>
  </div>`
}

export async function sendContactEmails({ fullName, email, mobile, service, company, message }) {
  const transport = getTransport()
  const subject = `New Inquiry from ${fullName}${company ? ` — ${company}` : ''}`
  const receivedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  /* ── Internal notification ─────────────────────────────────────────── */
  const internalHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#f1f5f9;font-family:Inter,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td>
      <!-- Header -->
      ${gradientHeader('New Contact Inquiry')}

      <!-- Body -->
      <div style="background:#ffffff;padding:28px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          ${row('Name',        fullName)}
          ${row('Email',       email)}
          ${row('Mobile',      mobile || '—')}
          ${row('Company',     company || '—')}
          ${row('Service',     service || '—')}
          ${row('Received At', receivedAt + ' IST')}
        </table>

        <!-- Message -->
        <div style="margin-top:20px;background:#f8fafc;border-left:4px solid #2563EB;border-radius:4px;padding:14px 16px;font-size:14px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</div>
      </div>

      <!-- Footer -->
      <div style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 8px 8px;padding:14px 32px;text-align:center;font-size:12px;color:#94a3b8;">
        Sent from the contact form at privyasolution.com
      </div>
    </td></tr>
  </table>
</body>
</html>`

  /* ── Auto-reply ────────────────────────────────────────────────────── */
  const autoReplyHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#f1f5f9;font-family:Inter,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td>
      <!-- Header -->
      ${gradientHeader('Thank you for contacting Privya Solution LLP')}

      <!-- Body -->
      <div style="background:#ffffff;padding:28px 32px;">
        <p style="margin:0 0 14px;font-size:15px;color:#374151;">Dear <strong>${fullName}</strong>,</p>
        <p style="margin:0 0 14px;font-size:15px;color:#374151;line-height:1.7;">
          Thank you for your inquiry regarding <strong>${service || 'General Inquiry'}</strong>.
          Our team has received your request and will contact you within <strong>3–4 business days</strong>.
        </p>

        <!-- Reference box -->
        <div style="background:#eff6ff;border-radius:8px;padding:16px 20px;margin:20px 0;font-size:14px;color:#1e40af;line-height:1.7;">
          <strong>Your reference details:</strong><br>
          Service: ${service || 'General Inquiry'}<br>
          Submitted: ${receivedAt} IST
        </div>

        <!-- Contact info -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
          <tr>
            <td style="padding:8px 0;font-size:14px;color:#374151;">
              📞 <a href="tel:+919904095104" style="color:#2563EB;text-decoration:none;font-weight:600;">+91-9904095104</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:14px;color:#374151;">
              ✉️ <a href="mailto:sales@privyasolution.com" style="color:#2563EB;text-decoration:none;font-weight:600;">sales@privyasolution.com</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:14px;color:#374151;">
              📍 523, Universal Trade Center, L.P. Savani Rd, Surat, Gujarat
            </td>
          </tr>
        </table>

        <p style="margin:20px 0 0;font-size:15px;color:#374151;line-height:1.7;">
          Warm regards,<br>
          <strong>Team Privya Solution LLP</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 8px 8px;padding:14px 32px;text-align:center;font-size:12px;color:#94a3b8;">
        Privya Solution LLP &bull; sales@privyasolution.com &bull; privyasolution.com
      </div>
    </td></tr>
  </table>
</body>
</html>`

  await Promise.all([
    transport.sendMail({
      from: `"Privya Solution LLP Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: `"${fullName}" <${email}>`,
      subject,
      html: internalHtml,
      attachments: [logoAttachment],
    }),
    transport.sendMail({
      from: `"Privya Solution LLP" <${process.env.SMTP_USER}>`,
      to: `"${fullName}" <${email}>`,
      subject: 'We received your inquiry — Privya Solution LLP',
      html: autoReplyHtml,
      attachments: [logoAttachment],
    }),
  ])
}

function row(label, value) {
  return `<tr>
    <td style="padding:10px 12px;font-size:14px;font-weight:600;color:#1e293b;border-bottom:1px solid #e2e8f0;width:130px;white-space:nowrap;">${label}</td>
    <td style="padding:10px 12px;font-size:14px;color:#374151;border-bottom:1px solid #e2e8f0;">${value}</td>
  </tr>`
}

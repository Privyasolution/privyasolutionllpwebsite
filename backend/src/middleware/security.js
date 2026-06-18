export function honeypotCheck(req, res, next) {
  // `website` is a hidden field — bots fill it, humans don't
  if (req.body.website) {
    // Silently accept to avoid tipping off bots
    return res.status(200).json({ success: true })
  }
  next()
}

export function sanitizeBody(req, _res, next) {
  const allowed = ['fullName', 'email', 'mobile', 'company', 'service', 'message']
  const clean = {}
  for (const key of allowed) {
    if (req.body[key] !== undefined) {
      clean[key] = String(req.body[key]).slice(0, 5000)
    }
  }
  req.body = clean
  next()
}

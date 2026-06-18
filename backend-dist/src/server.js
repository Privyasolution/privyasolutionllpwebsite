import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contact.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

// --- Security headers ---
app.use(helmet())

// --- CORS ---
const allowedOrigins = (process.env.FRONTEND_URL || 'https://privyasolution.com')
  .split(',')
  .map(o => o.trim())
  .concat(['http://localhost:5173', 'http://localhost:4173'])

app.use(cors({
  origin(origin, callback) {
    // Allow requests with no origin (curl, Postman) only in development
    if (!origin) {
      if (process.env.NODE_ENV === 'production') return callback(new Error('No origin'), false)
      return callback(null, true)
    }
    if (allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error(`CORS: origin '${origin}' is not allowed`), false)
  },
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204,
}))

// --- Rate limiting: 5 submissions per IP per 15 minutes ---
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please wait and try again.' },
})

// --- Body parsing ---
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: false, limit: '16kb' }))

// --- Routes ---
app.use('/api', contactLimiter, contactRoutes)

// --- Health check ---
app.get('/health', (_req, res) => res.json({ status: 'ok' }))

// --- 404 ---
app.use((_req, res) => res.status(404).json({ success: false, message: 'Not found' }))

// --- Error handler ---
app.use((err, _req, res, _next) => {
  console.error('[server error]', err.message)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Privya Contact API listening on port ${PORT}`)
  console.log(`Allowed origins: ${allowedOrigins.join(', ')}`)
})

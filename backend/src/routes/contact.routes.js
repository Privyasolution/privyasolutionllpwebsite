import { Router } from 'express'
import { honeypotCheck, sanitizeBody } from '../middleware/security.js'
import { contactValidationRules, handleValidationErrors } from '../middleware/validation.js'
import { handleContact } from '../controllers/contact.controller.js'

const router = Router()

router.post(
  '/contact',
  sanitizeBody,
  honeypotCheck,
  contactValidationRules,
  handleValidationErrors,
  handleContact
)

export default router

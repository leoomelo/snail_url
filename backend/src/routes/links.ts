import { Router } from 'express'
import links from '../controllers/links'
import linksController from '../controllers/links'

const router = Router()

router.get('/links/:code', linksController.getLink)

router.get('/link/stats', linksController.getStats)

router.post('/links', linksController.postLink)

export default router


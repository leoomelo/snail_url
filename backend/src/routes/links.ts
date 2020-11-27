import { Router } from 'express'
import links from '../controllers/links'
import linksController from '../controllers/links'

const router = Router()

router.get('/links/:code', linksController.getStats)

router.get('/links/:code/stats', linksController.getLink)

router.post('/links', linksController.postLink)

export default router


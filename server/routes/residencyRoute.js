import express from 'express'

import jwtCheck from '../config/auth0Config.js'
import { createResidency, getAllResidencies, getResidencyByID } from '../controllers/residencyController.js'

const router = express.Router()

router.post("/create", jwtCheck, createResidency)
router.get("/getall", getAllResidencies)
router.get("/:id", getResidencyByID)

export { router as residencyRoute }
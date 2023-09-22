import express from 'express'

import jwtCheck from '../config/auth0Config.js'
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, manageFavourites } from '../controllers/userController.js'

const router = express.Router()

router.post("/register", jwtCheck, createUser)
router.post("/bookvisit/:id", jwtCheck, bookVisit)
router.post("/getallbookings", getAllBookings)
router.post("/cancelbooking/:id", jwtCheck, cancelBooking)
router.post("/managefavourites/:id", jwtCheck, manageFavourites)
router.post("/getallfavourites", jwtCheck, getAllFavourites)

export { router as userRoute }
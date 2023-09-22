import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'

export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body.data
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                image,
                owner: {connect: {email: userEmail}},
            }
        })
        res.send({message: "Residency created successfully.", residency})
    } catch (err) {
        if (err.code == "P2002") {
            throw new Error("A residency with this address already exists.")
        }
        throw new Error(err.message)
    } 
})

export const getAllResidencies = asyncHandler(async (req, res) => {
    try {
        const residencies = await prisma.residency.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        res.send(residencies)
    } catch (err) {
        throw new Error(err.message)
    }
})

export const getResidencyByID = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const residency = await prisma.residency.findUnique({where: {id: id}})
        res.send(residency)
    } catch (err) {
        throw new Error(err.message)
    }
})
import axios from 'axios'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

export const api = axios.create({
    baseURL: "https://real-estate-82xr1ywy5-maiznadeem.vercel.app/api"
})

export const getAllProperties = async() => {
    try {
        const response = await api.get("/residency/getall", {
            timeout: 10 * 1000,
        })
        if (response.status == 400 || response.status == 500) {
            throw response.data
        }
        return response.data
    } catch (err) {
        toast.error("Something went wrong.")
        throw err
    }
}

export const getProperty = async(id) => {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        })
        if (response.status == 400 || response.status == 500) {
            throw response.data
        }
        return response.data
    } catch (err) {
        toast.error("Something went wrong.")
        throw err
    }
}

export const createUser = async(email, token) => {
    try {
        await api.post(`/user/register`, {email}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        toast.error("Something went wrong. Please try again.")
        throw err
    }
}

export const bookVisit = async(date, propertyId, email, token) => {
    try {
        await api.post(`/user/bookvisit/${propertyId}`,
        {
            email,
            id: propertyId,
            date: dayjs(date).format("DD/MM/YYYY")
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        toast.error("Something went wrong. Please try again.")
        throw err
    }
}

export const cancelBooking = async(id, email, token) => {
    try {
        await api.post(`/user/cancelbooking/${id}`,
        {
            email,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        toast.error("Something went wrong. Please try again.")
        throw err
    }
}

export const toFavourites = async(id, email, token) => {
    try {
        await api.post(`/user/managefavourites/${id}`,
        {
            email,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        toast.error("Something went wrong. Please try again.")
        throw err
    }
}

export const getAllFavourites = async(email, token) => {
    if (!token)
        return
    try {
        const res = await api.post(`/user/getallfavourites`,
        {
            email,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data["favResidenciesID"]
    } catch (err) {
        toast.error("Something went wrong while fetching favourites.")
        throw err
    }
}

export const getAllBookings = async(email, token) => {
    if (!token)
        return
    try {
        const res = await api.post(`/user/getallbookings`,
        {
            email,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data["bookedVisits"]
    } catch (err) {
        toast.error("Something went wrong while fetching bookings.")
        throw err
    }
}

export const createResidency = async(data, token) => {
    try {
        await api.post(`/residency/create`,
        {
            data,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        throw err
    }
}
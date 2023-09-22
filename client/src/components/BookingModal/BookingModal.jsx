import React, { useState, useContext } from 'react'
import { Modal, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

import { bookVisit } from '../../utils/api'
import UserDetailsContext from '../../context/UserDetailsContext'

const BookingModal = ({ opened, setOpened, email, propertyId }) => {

    const { userDetails: { token }, setUserDetails } = useContext(UserDetailsContext)
    const [value, setValue] = useState(null)

    const handleBookingSuccess = () => {
        toast.success("The visit is successfully booked.", { position: "bottom-right" })
        setUserDetails( prev => ({
            ...prev,
            bookings: [
                ...prev.bookings,
                { id: propertyId, date: dayjs(value).format("DD/MM/YYYY") }
            ]  
        }))
    }

    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisit(value, propertyId, email, token),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ res }) => toast.error(res.data.message),
        onSettled: () => setOpened(false)
    })

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Select your date of visit."
            centered
        >
            <div className="flexColCenter" style={{ gap: "1rem" }} >
                <DatePicker value={value} onChange={setValue} minDate={new Date()} />
                <Button
                    disabled={!value || isLoading}
                    onClick={() => mutate()}
                >Book Visit</Button>
            </div>
        </Modal>
    )
}

export default BookingModal
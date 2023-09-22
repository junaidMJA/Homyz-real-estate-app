import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { FaShower } from 'react-icons/fa'
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md'
import { AiTwotoneCar } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mantine/core'
import { toast } from 'react-toastify'

import Map from '../../components/Map/Map'
import useAuthCheck from '../../hooks/useAuthCheck'
import BookingModal from '../../components/BookingModal/BookingModal'
import UserDetailsContext from '../../context/UserDetailsContext'
import { cancelBooking, getProperty } from '../../utils/api'
import Heart from '../../components/Heart/Heart'

import './Property.css'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["residency", id], () => getProperty(id))

    const [ modalOpened, setModalOpened ] = useState(false)
    const { validateLogin } = useAuthCheck() 
    const { user } = useAuth0()

    const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailsContext)

    const { mutate: removeBooking, isLoading: removing } = useMutation({
        mutationFn: () => cancelBooking(id, user?.email, token),
        onSuccess: () => {
            setUserDetails( prev => ({
                ...prev,
                bookings: prev.bookings.filter(booking => booking?.id !== id)
            }))
            toast.success("Booking cancelled.", { position: "bottom-right" })
        }
    })

    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details.</span>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                <div className="like">
                    <Heart id={id} />
                </div>
                <img src={data?.image} alt="Home Image" />
                <div className="flexCenter property-details">
                    <div className="flexColStart left">
                        <div className="flexStart head">
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{fontSize: '1.5rem'}}>$ {data?.price}</span>
                        </div>
                        <div className="flexStart facilities">
                            <div className="flexStart facility">
                                <FaShower size={20} color='1F3E72' />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color='1F3E72' />
                                <span>{data?.facilities?.parkings} Parkings</span>
                            </div>
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color='1F3E72' />
                                <span>{data?.facilities?.bedrooms} Bedrooms</span>
                            </div>
                        </div>
                        <span className="secondaryText" style={{ textAlign: "justify" }}>{data?.description}</span>
                        <div className="flexStart" style={{ gap: "1rem" }}>
                            <MdLocationPin size={25} color='1F3E72' />
                            <span className="secondaryText">{data?.address}, {data?.city}, {data?.country}
                            </span>
                        </div>

                        { bookings?.map( booking => booking.id ).includes(id) ? (
                            <>
                                <Button 
                                    variant='outline'
                                    w={"100%"} 
                                    color='red'
                                    onClick={() => removeBooking()}
                                    disabled={removing}
                                >
                                    <span>Cancel Booking</span>
                                </Button>
                                <span>Your visit is booked for: {bookings?.filter( booking => booking?.id === id )[0].date}</span>
                            </>
                        ) : (
                                <button
                                    className="button"
                                    onClick={() => {
                                        validateLogin() && setModalOpened(true)
                                    }}
                                >
                                    Book your visit
                                </button>
                            )
                        }

                        <BookingModal
                            opened={modalOpened}
                            setOpened={setModalOpened}
                            propertyId={id}
                            email={user?.email}
                        />
                    </div>
                    <div className="map">
                        <Map address={data?.address} city={data?.city} country={data?.country}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property
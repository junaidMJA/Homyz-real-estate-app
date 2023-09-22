import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'

import useAuthCheck from '../../hooks/useAuthCheck'
import UserDetailsContext from '../../context/UserDetailsContext'
import { toFavourites } from '../../utils/api'
import { checkFavourites, updateFavourites } from '../../utils/common'

const Heart = ({ id }) => {

    const [heartColor, setHeartColor] = useState('white')
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0()
    const { userDetails: { favourites, token }, setUserDetails } = useContext(UserDetailsContext)

    const { mutate } = useMutation({
        mutationFn: () => toFavourites(id, user?.email, token),
        onSuccess: () => {
            setUserDetails( prev => ({
                ...prev,
                favourites: updateFavourites(id, prev.favourites)
            }))
        }
    })

    const handleLike = () => {
        if (validateLogin()) {
            mutate()
            setHeartColor( prev => prev === "#FA3E5F" ? "white" : "#FA3E5F" )
        }
    }

    useEffect (() => {
        setHeartColor(() => checkFavourites(id, favourites))
    }, [favourites])

    return (
        <AiFillHeart
            size={24}
            color={heartColor}
            onClick={(e) => {
                e.stopPropagation()
                handleLike()
            }} 
        />
    )
}

export default Heart
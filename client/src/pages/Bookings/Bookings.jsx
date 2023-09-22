import React, { useContext, useState } from 'react'
import { PuffLoader } from 'react-spinners'

import SearchBar from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import UserDetailsContext from '../../context/UserDetailsContext'

import '../Properties/Properties.css'

const Bookings = () => {

    const { data, isError, isLoading } = useProperties()
    const [ filter, setFilter ] = useState("")
    const { userDetails: { bookings } } = useContext(UserDetailsContext)

    if (isError) {
        return (
            <div className="wrapper">
                <span>Error while fetching data.</span>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader 
                    height="80"
                    width="80"
                    radius={1}
                    color='#4066FF'
                    aria-label='puff-loading'
                />
            </div>
        )
    }

    return (
        <div className='wrapper'>
            <div className="flexColCenter paddings innerWidth p-container">
                <SearchBar filter={filter} setFilter={setFilter} />
                <div className="paddings flexCenter properties">
                    {
                        data
                            .filter (
                                property => 
                                    bookings?.map( booking => booking.id ).includes(property.id)
                            )
                            .filter ( 
                                property => 
                                    property.title.toLowerCase().includes(filter.toLocaleLowerCase()) ||
                                    property.city.toLowerCase().includes(filter.toLocaleLowerCase()) ||
                                    property.country.toLowerCase().includes(filter.toLocaleLowerCase())
                            ).map (
                                (card, i) => 
                                    <PropertyCard card={card} key={i} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Bookings
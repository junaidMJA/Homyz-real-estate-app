export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        },
    }
}

export const updateFavourites = (id, favourites) => {
    console.log(favourites)
    if (favourites.includes(id))
        return favourites.filter(resID => resID !== id)
    else
        return [...favourites, id]
}

export const checkFavourites = (id, favourites) => {
    return favourites?.includes(id) ? "FA3E5F" : "white"
}

export const validateString = (value) => {
    return value?.length < 3 || value == null ? "Must be atleast 3 characters" : null
}
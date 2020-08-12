import axios from 'axios';

export const getBestSeats = async (seatsNumber, venueInfo) => {
    const baseUrl = process.env.REACT_APP_API_URL
    const endPoint = '/seat/find-best'

    const body = {
        seats_number: seatsNumber,
        venue_info: JSON.parse(venueInfo)
    }


    try {
        const { data } = await axios.post(baseUrl + endPoint, body)
        return data;
    } catch (err) {
        throw new Error(err.response.data.error)
    }
}
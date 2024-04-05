import { useNavigate, useParams } from "react-router-dom";
import movieData from '../cinema.json'
import { IMovie } from "./interface";
import { FaCouch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<IMovie[]>();
    const [platinumSeats, setplatinumSeats] = useState<boolean[]>([])
    const [silverSeats, setSilverSeats] = useState<boolean[]>([])
    const [goldSeats, setGoldSeats] = useState<boolean[]>([])    

    useEffect(() => {
        const selectedMovie: IMovie | undefined = movieData.find(data => data.id === Number(id));
        if (selectedMovie) {
            setMovie([selectedMovie]);
            setplatinumSeats(Array(selectedMovie.seatType.platinum.totalSeats).fill(false));
            setGoldSeats(Array(selectedMovie.seatType.gold.totalSeats).fill(false));
            setSilverSeats(Array(selectedMovie.seatType.silver.totalSeats).fill(false));
        }
    }, [id]);    

    const toggleBooking = (seatTypeSetter: React.Dispatch<React.SetStateAction<boolean[]>>, index: number) => {
        seatTypeSetter(prevState => prevState.map((booked, idx: number) => idx === index ? !booked : booked));
    }

    const calculatePrice = (e: React.MouseEvent,) => {
        e.preventDefault();
        navigate(`/pricing/${id}`)
    }

    return (
        <div className="p-4 w-3/4 m-auto">
            <div className="bg-gray-800 text-white text-center py-14 rounded mb-10">Screen</div>
            <div className="grid grid-cols-8 gap-2 mb-9 ">
                {platinumSeats.map((booked,idx) => (
                    <div key={idx} className={`bg-purple-500 text-white p-2 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setplatinumSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            <div className="grid grid-cols-10 gap-2 mb-9 ">
            {goldSeats.map((booked,idx) => (
                    <div key={idx} className={`bg-blue-500 text-white p-2 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setGoldSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            <div className="grid grid-cols-12 gap-2 mb-4 ">
            {silverSeats.map((booked,idx) => (
                    <div key={idx} className={`bg-green-500 text-white p-2 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setSilverSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e) => calculatePrice(e)}> Book Tickets </button>
        </div>
    )
}

export default Booking;
import { useNavigate, useParams } from "react-router-dom";
import movieData from '../cinema.json'
import { IMovie } from "./interface";
import { FaCouch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [_movie, setMovie] = useState<IMovie[]>();
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

    const bookedPlatinumSeat: number = platinumSeats.filter(Boolean).length
    const bookedGoldSeat: number = goldSeats.filter(Boolean).length
    const bookedSilverSeat: number = silverSeats.filter(Boolean).length

    const merge = () => {
        if (bookedGoldSeat == 0 && bookedPlatinumSeat == 0 && bookedSilverSeat == 0) {
            return false;
        } else {
            return true;
        }
    }
    const calculatePrice = (e: React.MouseEvent, bookedPlatinumSeat: number, bookedGoldSeat: number, bookedSilverSeat: number) => {
        e.preventDefault();
        navigate(`/pricing/${id}/platinum/${bookedPlatinumSeat}/gold/${bookedGoldSeat}/silver/${bookedSilverSeat}`)
    }

    return (
        <div className="w-3/4 m-auto mt-10">
            <div className=" bg-gray-800 text-white text-center py-14 rounded mb-10">Screen</div>
            <div className="flex flex-wrap justify-center gap-2 p-5  ">
                {platinumSeats.map((booked, idx) => (
                    <div key={idx} className={`bg-purple-500 text-white p-4 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setplatinumSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 p-5  ">
                {goldSeats.map((booked, idx) => (
                    <div key={idx} className={`bg-blue-500 text-white p-4 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setGoldSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 p-5 mb-10">
                {silverSeats.map((booked, idx) => (
                    <div key={idx} className={`bg-green-500 text-white p-4 rounded cursor-pointer ${booked ? 'opacity-50' : ''}`} onClick={() => toggleBooking(setSilverSeats, idx)}><FaCouch /></div>
                ))}
            </div>
            {
                merge() == true ? <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e) => calculatePrice(e, bookedPlatinumSeat, bookedGoldSeat, bookedSilverSeat)}> Book Tickets </button> : false
            }

        </div>
    )
}

export default Booking;
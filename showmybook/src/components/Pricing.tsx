import { useParams } from "react-router-dom";
import movieData from '../cinema.json';
import { IMovie } from "./interface";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate()
    const { id, p, g, s } = useParams<{ id: string, p: string, g: string, s: string }>();
    const selectedMovie: IMovie | undefined = movieData.find(data => data.id == Number(id))
    const pnum = Number(p) ?? 0;
    const gnum = Number(g) ?? 0;
    const snum = Number(s) ?? 0;

    const totalPrice = selectedMovie ? selectedMovie.price +
        (selectedMovie.seatType.platinum.price * pnum) +
        (selectedMovie.seatType.gold.price * gnum) +
        (selectedMovie.seatType.silver.price * snum) : 0

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20 h-1/2">
                <div className="max-w-sm rounded overflow-hidden bg-white shadow hover:shadow-xl text-center p-4 h-full ">
                    <h1 className="text-2xl">Thank You For Booking</h1>
                    <h3 className="p-4">Movie Name: {selectedMovie?.title}</h3>
                    <img className="w-full h-48 object-cover rounded" src={selectedMovie?.image} alt={selectedMovie?.title} />
                    <div className="mt-8 text-lg font-medium">Total Price: Rs{totalPrice}</div>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded mt-10" onClick={() => navigate("/")}>Go Home</button>
            </div>
        </>
    );
}

export default Pricing
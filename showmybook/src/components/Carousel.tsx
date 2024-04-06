import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SingleMovieCard from './SingleMovieCard';
import movieData from '../cinema.json'


const CarOusel = () => {
    return (
        <div className='flex justify-center '>
            <Carousel className='mt-10' infiniteLoop autoPlay showStatus={false} interval={3000} showThumbs={false} width={385} showIndicators={false}>
                {movieData.map((data, _key) => (
                    <SingleMovieCard data={data} key={data.id} />
                ))}
            </Carousel>
        </div>
    );
}

export default CarOusel
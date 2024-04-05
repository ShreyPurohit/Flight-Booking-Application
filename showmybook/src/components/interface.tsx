interface ISeatTypeDetails {
    totalSeats: number;
    bookSeats: number[];
    price: number;
}

interface ISeatTypes {
    platinum: ISeatTypeDetails;
    gold: ISeatTypeDetails;
    silver: ISeatTypeDetails;
}

interface IMovie {
    id: number;
    price: number;
    title: string;
    year: number;
    genres: string[];
    description: string;
    seatType: ISeatTypes;
    image: string;
}

interface IMovieArray{
    movies: IMovie[]
}

export type {ISeatTypeDetails, ISeatTypes, IMovie, IMovieArray}
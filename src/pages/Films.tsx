import React from "react";
import ListCover from "../components/ListCover";

const listMovies = [{
    coverId: 1,
    coverSrc: 'https://images.unsplash.com/photo-1580130718646-9f6942092ad3?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum dolor sit amet consectetur.'
},
{
    coverId: 2,
    coverSrc: 'https://images.unsplash.com/photo-1578407612742-73a9fc310859?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'
},
{
    coverId: 3,
    coverSrc: 'https://images.unsplash.com/photo-1580130718810-358e5e8af61b?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ut.'
}]

const PageFilms: React.FC<{}> = () => {    
    return(
    <div>
        <ListCover arryCovers={listMovies}></ListCover>
    </div>)
}

export default PageFilms;
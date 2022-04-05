import React from "react";
import ListCover from "../components/ListCover";

const listMovies = [{
    coverId: 1,
    coverSrc: 'http://ssssssss',
    coverAlt: 'string'
},
{
    coverId: 2,
    coverSrc: 'string',
    coverAlt: 'string'
},
{
    coverId: 3,
    coverSrc: 'string',
    coverAlt: 'string'
}]


const PageFilms: React.FC<{}> = () => {    
    return(
    <div>
        <ListCover listOfMedias={listMovies}></ListCover>
    </div>)
}

export default PageFilms;
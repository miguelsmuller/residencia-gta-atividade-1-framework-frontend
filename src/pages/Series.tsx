import React from "react";
import ListCover from "../components/ListCover";

const listSeries = [{
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

const PageSeries: React.FC<{}> = () => {
    
    return(
    <div>
        <ListCover listOfMedias={listSeries}></ListCover>
    </div>)
}
export default PageSeries;

//caroll.......
//entra no chat do live share

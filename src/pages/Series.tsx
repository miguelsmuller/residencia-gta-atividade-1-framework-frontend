import React from "react";
import ListCover from "../components/ListCover";

const listSeries = [{
    coverId: 1,
    coverSrc: 'https://images.unsplash.com/photo-1627782795730-1ae5d0d81c89?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},
{
    coverId: 2,
    coverSrc: 'https://images.unsplash.com/photo-1559108318-39ed452bb6c9?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum dolor sit amet.'
},
{
    coverId: 3,
    coverSrc: 'https://images.unsplash.com/photo-1627782794775-f07d8f3f3855?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod.'
},
{
    coverId: 3,
    coverSrc: 'https://images.unsplash.com/photo-1587047615927-8fe9f693e497?auto=format&w=450&h=450&fit=crop&crop=entropy',
    coverAlt: 'Lorem ipsum dolor sit amet consectetur.'
}]

const PageSeries: React.FC<{}> = () => {
    return(
    <div>
        <ListCover arryCovers={listSeries}></ListCover>
    </div>)
}
export default PageSeries;
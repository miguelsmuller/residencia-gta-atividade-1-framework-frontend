import React from "react";
import { CoverOfMedia } from "../interfaces/Interfaces";

interface Props {
    listOfMedias: CoverOfMedia[]
}

const ListCover: React.FC<Props> = (props) => {
    const listOfCover: any[] = [];

    props.listOfMedias.forEach(item => {
        listOfCover.push(<li key={item.coverId}><img src={item.coverSrc} alt={item.coverAlt} /></li>)
    });

    return <ul>
        {listOfCover}
    </ul>
}

export default ListCover;
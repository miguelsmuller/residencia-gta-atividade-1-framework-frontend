import React from "react";
import { CoverOfMedia } from "../interfaces/Interfaces";

import './ListCover.css';

interface Props {
    arryCovers: CoverOfMedia[]
}

const ListCover: React.FC<Props> = (props) => {
    const renderCover = (data: any, _index: number) => {
        return (
          <li key={_index}>
            <img className="list_cover__image" src={data.coverSrc} alt={data.coverAlt} />
          </li>
        );
    };

    return(<ul className="list_cover">{props.arryCovers.map(renderCover)}</ul>)
}

export default ListCover;
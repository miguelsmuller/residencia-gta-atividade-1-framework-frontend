import React from "react";
import { Packages } from "../interfaces/Interfaces";

import './listPackages.css';


interface Props {
    arryPackages: Packages[]
}

const ListPackages: React.FC<Props> = (props) => {
    const renderPackages = (data: any, _index: number) => {
        return (
            <div className="packages_item">
                <ul className="packages_wrap">
                    <li className="packages_wrap packages_wrap__header">{data.title}</li>
                    <li className="packages_wrap packages_wrap__price">R$ {data.value} / ano</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum.</li>
                    <li>
                        <span className="button">Ver +</span>
                    </li>
                </ul>
            </div>   
        );
    };

    return(<div className="list_packages">
        {props.arryPackages.map(renderPackages)}
    </div>)
}

export default ListPackages;



{/* <li key={_index}>
    <img className="list_cover__image" src={data.coverSrc} alt={data.coverAlt} />
</li> */}
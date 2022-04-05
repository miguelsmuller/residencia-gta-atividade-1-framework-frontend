import React from "react";
import { Packages } from "../interfaces/Interfaces";

interface Props {
    listOfPackages: Packages[]
}

const ListPackages: React.FC<Props> = (props) => {
    const arryPackages: any[] = [];

    props.listOfPackages.forEach(item => {
        arryPackages.push(<li>{item.title} - {item.value}</li>)
    });

    return <ul>
        {arryPackages}
    </ul>
}

export default ListPackages;
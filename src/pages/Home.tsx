import React from "react";
import ListPackages from "../components/listPackages";


const listPackages = [{
    title: "starter",
    value: 25
},
{
    title: "intermediate",
    value: 50
},
{
    title: "premmium",
    value: 100
}]

const PageHome: React.FC<{}> = () => { 

    return(
    <div>
        <ListPackages listOfPackages={listPackages}></ListPackages>
    </div>)
}

export default PageHome;
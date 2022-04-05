import React from "react";
import ListPackages from "../components/listPackages";

const listPackages = [{
    title: "Silver",
    value: 25
},
{
    title: "Bronze",
    value: 50
},
{
    title: "Gold",
    value: 100
}]

const PageHome: React.FC<{}> = () => { 
    return(
    <>
        <ListPackages arryPackages={listPackages}></ListPackages>
    </>)
}

export default PageHome;
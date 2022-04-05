import React from "react";
import { Link } from 'react-router-dom'


const Navigation: React.FC<{}> = () => {
    
   return(
      <div>
         <Link to="/">Home</Link>  |  <Link to="/media/films">Films</Link>  |    <Link to="/media/series">Series</Link>  |    <Link to="/contacts">contacts</Link>
   </div>
   )

    
}

export default Navigation;
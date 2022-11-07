import React from "react";
import { NavLink } from 'react-router-dom';

const Page404 = () => {
  return <>
     <div>
        <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" />
        <NavLink to="/app"><button className='btn btn-primary'>Go to home Page</button></NavLink>


    </div>
  </>;
};


export default Page404;
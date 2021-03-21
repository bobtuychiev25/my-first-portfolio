import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css'

function Navvv(){
    return(
        <header className="bg-dark p-3 0">
            <div className="container mx-auto flex justify-between ">
                <nav className="flex ">
                    <NavLink to='/' exact
                             activeClassName="text-white "
                             className="align-items-center d-inline-flex  px-3 mr-4  text-4xl font-weight-bold cursive tracking-widest text-decoration-none">
                        Home
                    </NavLink>

                    <NavLink to='/about' activeClassName="text-white" className="align-items-center d-inline-flex py-3 px-3 rounded text-decoration-none">
                        About
                    </NavLink>
                    <NavLink to='/education' activeClassName="text-white" className="align-items-center d-inline-flex py-3 px-3 rounded text-decoration-none">
                        Education
                    </NavLink>
                    <NavLink to='/contact' activeClassName="text-white" className="align-items-center d-inline-flex py-3 px-3 rounded text-decoration-none">
                        Contact
                    </NavLink>

                </nav>

            </div>

        </header>
    )

}export default Navvv;
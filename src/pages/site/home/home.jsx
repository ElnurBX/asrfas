import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
    
    const Home = () => {
        
        return (
        <>
                <div className='home'>
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/SFy5Za0DyMEAAAAj/erm-fingers.gif" alt="" />
                        <div className="mesaj">
                            <p>Bilirem cox sef etmisem amma iki deyqeni mene ayira bilersenmi?</p>
                            <div className="cavab">
                                <Link to={'/yes'}  className='btn btn-primary'>
                                    Hə
                                </Link>
                                <Link to={'/no'} className='btn btn-danger'>
                                    Yox
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        )
    }
    
    export default Home
        
import React from 'react'
import { Link } from 'react-router-dom'

const First_no = () => {
    return (
        <div className='home'>
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/amRuuQRN6d0AAAAi/love.gif" alt="" />
                        <div className="mesaj">
                            <p>Nolurrrrr bir şans ?</p>
                            <div className="cavab">
                                <Link to="/yes" className='btn btn-primary'>
                                    Hə
                                </Link>
                                <Link to={"/no/no"} className='btn btn-danger'>
                                    Yox
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default First_no
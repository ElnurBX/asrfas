import React from 'react'
import { Link } from 'react-router-dom'

const Tri = () => {
return (
    <div className='home'>
    <div className="ilkmesaj">
        <img src="https://media.tenor.com/EQXiLYk3D4kAAAAi/thesadtimes-the-sad-times.gif" alt="" />
        <div className="mesaj">
            <p>barisdikmi?</p>
            <div className="cavab">
                <Link  to="/yes/yes/yes/yes" className='btn btn-primary'>
                    Hə
                </Link>
                <Link to={"/no/no/no"} className='btn btn-danger'>
                    Yox
                </Link>
            </div>
        </div>
    </div>
</div>
)
}

export default Tri
import React from 'react'
import { Link } from 'react-router-dom'

const Son = () => {


return (
    <div className='home'>

    <div className="ilkmesaj">
        <img src="https://media1.tenor.com/m/XBux7dQ0PtYAAAAC/im-sorryyy.gif" alt="" />
        <div className="mesaj">
            <p>birde etmiyecem sözzz</p>
            <div className="cavab">
                <Link  to="/yes/yes/yes/yes/final" className='btn btn-primary'>
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

export default Son
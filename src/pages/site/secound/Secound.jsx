import React from 'react'
import { Link } from 'react-router-dom'

const Secound = () => {
return (
    <div className='home'>
    <div className="ilkmesaj">
        <img src="https://media.tenor.com/ZugYIZezc7AAAAAi/excuses-so-sorry.gif" alt="" />
        <div className="mesaj">
            <p>Bu hayvanligim ucun defelerle  uzur isterem. "devam ediyim izninle"</p>
            <div className="cavab">
                <Link  to="/yes/yes/yes" className='btn btn-primary'>
                    Hə
                </Link>
                <Link to={"/no"} className='btn btn-danger'>
                    Yox
                </Link>
            </div>
        </div>
    </div>
</div>
)
}

export default Secound
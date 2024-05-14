import React from 'react'
import { Link } from 'react-router-dom'

const Secound_no = () => {
return (
    <div className='home'>
    <div className="ilkmesaj">
        <img src="https://media.tenor.com/tahi_aOF2PsAAAAi/so-sorry-excuses.gif" alt="" />
        <div className="mesaj">
            <p>Cox pesmanam bir sans versen?</p>
            <div className="cavab">
                <Link  to="/" className='btn btn-primary'>
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

export default Secound_no
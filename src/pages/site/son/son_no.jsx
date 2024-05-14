import React from 'react'
import { Link } from 'react-router-dom'

const Son_no = () => {
  return (
    <div className='home'>
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/xXVlFLDXqkMAAAAi/im-dead-ouch.gif" alt="" />
                        <div className="mesaj">
                            <p>öldüm . "bu arada tum cavablarin mene gelerir"</p>
                            <div className="cavab">
                                <Link to="/" className='btn btn-primary'>
                                    en basa qayit
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Son_no
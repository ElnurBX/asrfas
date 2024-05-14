import React from 'react'
import { Link } from 'react-router-dom'

const Final_no = () => {
  return (
    <div className='home'>
                    
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/uPkyf-K4TCQAAAAi/sorry-sad.gif" alt="" />
                        <div className="mesaj">
                            <p>yasamanin artik anlami kalmacdi ben gip oluyom</p>
                            <div className="cavab">
                                <Link to="/" className='btn btn-primary'>
                                    getme
                                </Link>
                                <Link to={"/no/no/no/no/git"}  className='btn btn-danger'>
                                    git
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Final_no
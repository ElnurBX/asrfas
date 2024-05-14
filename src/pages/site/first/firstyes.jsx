import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div>
                <div className='home'>
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/8nd1FW7S2JwAAAAi/goat-cute.gif" alt="" />
                        <div className="mesaj">
                            <p>cox boyu okuzluk etdim sen kimi birine bunu etmemeli idim</p>
                            <div className="cavab">
                                <Link to={"/yes/yes"} className='btn btn-primary'>
                                    Hə
                                </Link>
                                <Link to={"/no"} className='btn btn-danger'>
                                    Yox
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default First
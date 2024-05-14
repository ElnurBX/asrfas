import React from 'react'
import { Link } from 'react-router-dom'

const Tri_no = () => {
  return (
    <div className='home'>
                    <div className="ilkmesaj">
                        <img src="https://media.tenor.com/edBnesK0OVUAAAAi/racoon-charlie-sorry.gif" alt="" />
                        <div className="mesaj">
                            <p> basimi daslardan daslara vuram nolar bagisla</p>
                            <div className="cavab">
                                <Link to={"/"} className='btn btn-primary'>
                                    Hə
                                </Link>
                                <Link to={"/no/no/no/no"} className='btn btn-danger'>
                                    Yox
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Tri_no
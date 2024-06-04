import React from 'react'
import { Link, Outlet} from 'react-router-dom'

export default function Blog() {
  return <>
  <h1 className='mt-5'>Blog</h1>
  <div className="container">
    <div className="row">
        <div className="col-md-6">
            <ul>
            <li className="nav-item">
          <Link className="nav-link" to="porfile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="serv">Serv</Link>
        </li>
            </ul>
        </div>
        <div className="col-md-6">
            <Outlet/>
        </div>
    </div>
  </div>
  
  </>
}

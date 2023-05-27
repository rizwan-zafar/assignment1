import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid brand-background ">
                    <Link className="navbar-brand text-light" to="/"><b>CRYPTO-EXCHANGE</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span className="d-flex me-auto mb-2 mb-lg-0" role="search">
                        </span>
                        <ul className="  navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-light">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-light">About</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

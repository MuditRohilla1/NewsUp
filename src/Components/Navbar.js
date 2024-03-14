import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar rounded-5 my-2 mx-2 border border-${this.props.mode==='dark'?'light':'dark'} navbar-expand-lg ${this.props.mode === 'light' ? 'navbar-light bg-secondary' : 'navbar-dark bg-dark'}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold fst-italic" to="/general">NEWS-UP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                                <li className="nav-item me-3"><Link className="nav-link" aria-current="page" to="/home">[ Home ] </Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>                                
                            </ul>
                            <form className="d-flex" role="search">
                                <div className={`form-check form-switch mx-2 text-${this.props.mode==='dark'?'light':'dark'}`}>
                                    <input className="form-check-input" type="checkbox" onChange={this.props.toggleMode} checked={this.props.mode === 'dark'} role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Theme-Mode</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

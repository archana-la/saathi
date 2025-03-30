import Link from 'next/link'
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from 'react'


function Header() {
    return (
        <>
            <section className='bg-dark text-white py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a> <FaPhone /> +977-1-5191103</a>
                            <a> <FaMapMarkerAlt />
                                Nakkhu, Lalitpur</a>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a className='p-3 text-white'> <FaFacebook /></a>
                            <a> <FaYoutube /> </a>
                            <a className='p-3 text-white'> <FaInstagram /></a>
                            <a className='p-3 text-white'><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <a className="navbar-brand" href="#">
                        <img className='a' src="https://saathi.org.np/wp-content/uploads/2023/08/cropped-saathi-logo1.jpg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse d-flex d-none justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/"> HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/programs">PROGRAMS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="gallery">GALLREY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="/archives">ARCHIVES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="/donate">DONATE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="/activities">ACTIVITIES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header

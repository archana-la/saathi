
import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  return (
   <>
  <footer className='bg-dark py-4'>
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
        <a href="">
        <img className='a' src="https://saathi.org.np/wp-content/uploads/2023/08/cropped-saathi-logo1.jpg" alt="" />
      </a>
        </div>
        <div className="col-lg-6 text-end text-white">
          <a> <FaPhone />
          +977-1-5191103</a>

          <a><MdEmail />
          saathi.ktm@gmail.com</a>
      <a> <FaMapMarkerAlt />
      Nakkhu, Lalitpur</a>
</div>
      </div>
      </div>
    </footer>
    
    <section className='h'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 text-white">
          © 2022 Saathi. All rights reserved.
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Footer

import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <footer className="footer">
          <div id="contact">
            <h1>Contact me</h1>
          </div>
          <div className="icons">
            <a href="https://github.com/Radon333" target="_blank" rel="noreferrer"><i class="fab fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/ranveer-shah333/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-3x"></i></a>
            <a href="https://www.instagram.com/ranveer_s3/" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-3x"></i></a>
            <a href = "mailto: ranveer2001s@gmail.com"><i class="far fa-envelope fa-3x"></i></a>
          </div>
        </footer>
    </div>
  )
}

export default Footer

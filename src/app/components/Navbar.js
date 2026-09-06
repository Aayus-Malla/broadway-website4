"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar(){
   const pathname = usePathname();
   const isActive = (path) => pathname === path ? "active" : "";
  return(
    <>
    <div className='site-navbar mt-3'>
            <div className='logo container mt-3 mb-3'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='me-logo'>
                    <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                      A
                    </div>
                    <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                      A
                    </div>
                    <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                      C
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="awesome navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="mintu collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                      <li className="nav-item">
                        <Link className={`nav-link ${isActive('/')}`} href="/">HOME</Link>                      
                      </li>
                      <li className="nav-item">
                         <Link className={`nav-link ${isActive('/news')}`} href="/news">NEWS</Link>
                      </li>
                      <li className="nav-item">
                         <Link className={`nav-link ${isActive('/sport')}`} href="/sport">SPORT</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={`nav-link ${isActive('/health')}`} href="/health">HEALTH</Link>
                      </li>
                      <li className="nav-item">
                         <Link className={`nav-link ${isActive('/travel')}`} href="/travel">TRAVEL</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
    </div>
    </>
  )
}
import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div >
    
    <div>
        <div className='ju'>
        <h1>Accounting<strong style={{color:"#1C64F2"}}> made simple</strong><br></br>
        for small businesses.</h1>
        </div>
          <p className='text-center' id='fdfpqowieur' style={{color:"#333"}}> Most bookkeeping software is accurate,
          but hard to use. We make the <br></br> 
          opposite trade-off, and hope you don’t get audited.
          </p>
        <div id='dfoiow'>
          <button className='btn ' id='dsfdsf'>Get 6 months free</button>
          <button className='btn btn-outline' id='dsfdsf1'><img  alt='rfdf' src='./images/Vecto.png'/>Watch video</button>
        </div> 
    </div>

      <div className="container">
      <p style={{color:"#333"}} id='logooo'>Trusted by these six companies so far</p>
      <div className="row text-center " id='dsdsloge'>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/Group.png'/></div>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/tuple.png'/></div>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/statickit.png'/></div>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/mirage.png'/></div>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/laravel.png'/></div>
      <div className="col col-lg-2 col-md-3"><img alt='iuu8' src='./images/statamic.png'/></div>
      </div>
      </div>
      </div>
  )
}

export default Header;

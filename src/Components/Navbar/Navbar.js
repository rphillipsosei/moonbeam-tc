import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    const tabsNewAnim = $('#navbarSupportedContent');
    const activeItemNewAnim = tabsNewAnim.find('.active');
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);


  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src='https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvc3F1YXJlLzUxMTI3NTEvMTU1NzIzOTk5NF9sb2dvLnBuZyIsImVkaXRzIjp7fX0='
        height="50%"
        width="50%"
        />
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" exact>
                <i 
                className="far fa-clone">
                </i>Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/products-and-partnerships" exact>
                <i 
                className="far fa-address-book">
                </i>Products & Partnerships
              </NavLink> 
            </li> */}
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" exact>
                <i 
                className="far fa-chart-bar">
                </i>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers" exact>
                <i 
                className="far fa-address-book">
                </i>Careers
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us" exact>
                <i 
                className="far fa-copy">
                </i>Contact Us
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;



import './footer.css'
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
export const Footer =() => {
     return (
         <div className="footer">
             <div className="text-container">
                 <p className='footer-details'>FAQ</p>
                 <p className='footer-details'>ABOUT</p>
                 <p className='footer-details'>TERMS AND CONDITIONS</p>
                 <p className='footer-details'>PRIVACY AND COOKIES</p>
             </div>
             <div className="subtext-container">
             <p className='footer-details'>CALL US</p> 
             <p className='footer-details'>+44 (0)10 2345 6789</p> 
             <p className='footer-details'>EMAIL CUSTOMER CARE</p>
             </div>
             <div className="icons-row">
                <p className='icons-style'><AiFillYoutube /></p>
                <p className='icons-style'><AiOutlineTwitter /></p>
                <p className='icons-style'><BiLogoFacebook /></p>
                <p className='icons-style'><BiLogoInstagram /></p>
            </div>
            
         </div>
     )
}
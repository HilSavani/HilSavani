import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen&&"active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genious.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 90996 12345</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>abcd@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

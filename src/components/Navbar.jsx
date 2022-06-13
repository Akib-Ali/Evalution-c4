import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div style={{display:"flex" , gap:"20px", backgroundColor:"grey" ,padding:"10px", color:"white"}}  >
            <Link to="/">Home</Link>
            <Link to="/company">Comanies</Link>
            <Link to="/employee">Emplyees</Link>
            
        </div>
    )
}
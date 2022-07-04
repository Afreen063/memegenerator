import { Link } from "react-router-dom";



export default function Nav()
{
    return (
        <div>
           <ol>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/product'>Product</Link></li>
            <li> <Link to='/signin'>Signin</Link></li>
           </ol>
        </div>
    )
}
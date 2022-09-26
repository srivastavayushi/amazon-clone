import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase/firebase";
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

export const Header = () =>{
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthenticaton = () =>{
        if(user){
            auth.signOut();
        }
    }
    // const image = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    
    return(
        <div className="flex bg-blue h-16 items-center sticky top-0 z-100">
            <img className="flex-none w-24 contain mx-5 mt-4" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            <div className="flex grow items-center rounded-3xl h-8">
                <input className="h-full p-2.5 w-full" type="text"/>
                <span className="p-2 bg-yellow text-blue text-lg"><AiOutlineSearch /></span>
            </div>
            <div className='flex-none flex justify-evenly'>
            <Link to={!user && '/login'}>
                <div className='flex flex-col mx-2 text-white' onClick={handleAuthenticaton}>
                    <span className='text-xs'> Hello {!user ? 'Guest' : user.email} </span>
                    <span className='text-sm font-bold'> {user ? 'Sign Out' : 'Sign In'} </span>
                </div>
            </Link>
                
            <Link to='/orders'>
            <div className='flex flex-col mx-2 text-white'>
                    <span className='text-xs'> Returns </span>
                    <span className='text-sm font-bold'> & Orders </span>
                </div>
            </Link>
                
                <div className='flex flex-col mx-2 text-white'>
                    <span className='text-xs'> Your </span>
                    <span className='text-sm font-bold'> Prime </span>
                </div>
                <Link to="/checkout">
                <div className='flex items-center text-white'>
                <span className="text-2xl"><AiOutlineShoppingCart/></span>
                    <span className='text-sm font-bold mx-2'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
        
    )
}
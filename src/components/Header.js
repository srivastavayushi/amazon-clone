import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

export const Header = () =>{
    const image = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    
    return(
        <div className="flex bg-blue h-16 items-center sticky top-0 z-100">
            <img className="flex-none w-24 contain mx-5 mt-4" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            <div className="flex grow items-center rounded-3xl h-8">
                <input className="h-full p-2.5 w-full" type="text"/>
                <span className="p-2 bg-yellow text-blue text-lg"><AiOutlineSearch /></span>
            </div>
            <div className='flex-none flex justify-evenly'>
                <div className='flex flex-col mx-2 text-white'>
                    <span className='text-xs'> Hello Guest </span>
                    <span className='text-sm font-bold'> Sign In </span>
                </div>
                <div className='flex flex-col mx-2 text-white'>
                    <span className='text-xs'> Returns </span>
                    <span className='text-sm font-bold'> & Orders </span>
                </div>
                <div className='flex flex-col mx-2 text-white'>
                    <span className='text-xs'> Your </span>
                    <span className='text-sm font-bold'> Prime </span>
                </div>
                <div className='flex items-center text-white'>
                <span className="text-2xl"><AiOutlineShoppingCart/></span>
                    
                    <span className='text-sm font-bold mx-2'>0</span>
                </div>
            </div>
        </div>
        
    )
}
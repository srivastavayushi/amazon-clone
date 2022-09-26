import {useStateValue} from '../context/StateProvider';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from '../context/Reducer';
import {useNavigate} from 'react-router-dom';

export const Subtotal = () =>{
    const navigate = useNavigate();
    const [{user,basket}, dispatch] = useStateValue();

    return(
        <div className='flex flex-col justify-between w-72 h-24 p-5 bg-white-light border-white-darker rounded subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{value}</strong>
                    </p>
                    <small className='flex items-center'>
                    <input type="checkbox" className='mr-1.5'/> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button className='bg-yellow-light rounded-sm width-full h-8 border border- mt-2.5 text-black-light'>Proceed to Checkout</button>
        </div>
    )
}
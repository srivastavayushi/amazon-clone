import {useStateValue} from '../context/StateProvider';
import { CheckoutProduct } from './CheckoutProduct';
import { Subtotal } from './Subtotal';

export const Checkout = () => {
    const [{user,basket}, dispatch] = useStateValue();
    return(
        <div className='flex p-5 bg-white h-max'>
            <div className=''>
            <img
          className="w-full mb-2.5"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
            <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className='mr-2.5 p-2.5 border-b-2-gray-light'>Your shopping Basket</h2>

                {basket.map(item=>
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />)}
            </div>
            </div>
            <div className=''>
                <Subtotal/>
            </div>
        </div>
    )
}
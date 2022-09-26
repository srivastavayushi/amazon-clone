import { useStateValue } from "../context/StateProvider";

export const Product = ({id,title,image,price,rating}) => {
    // {basket} : bring in state name basket
    // dispatch function allows to dispatch actions to change state in reducer
    const [ {basket},dispatch] = useStateValue();

    const addToBasket = () =>{

        // dispatch item to data layer
        dispatch({
            type : "ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                rating
            },
        });
    };

    return(
        <div className="flex flex-col items-center justify-end m-2.5 p-5 w-full max-h-96 max-w-xl bg-white">
            <div className="h-24 mb-4">
                <p>{title}</p>
                <p className="mt-1.5">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=><p key={i}>🌟</p>)}
                </div>
            </div>

            <img src={image} alt="" className="max-h-48 w-full object-contain mb-3.5"/>
            <button className="bg-yellow-light border mt-2.5 text-black-light" onClick={()=>addToBasket()}>Add to basket</button>
        </div>
    )
}
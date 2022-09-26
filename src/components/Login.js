import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase/firebase';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className='bg-white h-screen flex flex-col items-center justify-center'>
            <Link to='/'>
                <img 
                    className = "my-5 mx-auto w-24 object-contain"
                    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=""/>
            </Link>
            <div className='w-72 h-fit flex flex-col p-5 border border-gray-light rounded-md login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>

        </div>
    )
}
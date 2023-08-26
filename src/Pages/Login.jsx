import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi';
import { fetchSignInMethodsForEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { database } from '../config/firebaseConfig';
import { emailRegex, passwordRex } from '../Utils/Regex';
const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailRegex.test(credentials.email)) {
            setError({ email: 'Email is not valid' })
        }
        if (!passwordRex.test(credentials.password)) {
            setError({ password: `Password should must have at least 1 symbol\nand minimum 6 and maximum 16 characters` })
        }
      else{
            try {
                const userCredential = await fetchSignInMethodsForEmail(database, credentials.email);
                if (userCredential.length === 0) {
                    const newUserCredential = await createUserWithEmailAndPassword(database, credentials.email, credentials.password);
                    sessionStorage.setItem('user', newUserCredential.user.accessToken);
                }
                const userInfo = await signInWithEmailAndPassword(database, credentials.email, credentials.password);
                sessionStorage.setItem('user', userInfo.user.accessToken);
                navigate('/');

            } catch (error) {
                console.log(error);
            }
      }

    }
    return (
        <div className="flex justify-center mt-40 items-center">
            <div className="h-[90%] w-full md:w-3/4 m-4  dark:text-white ">
                <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-2 md:mt-0">
                    <h1 className="font-bold text-3xl text-purple-500 dark:text-purple-400">Sign In</h1>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div className="relative flex  flex-col rounded-xl  group md:w-fit w-3/4">
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleOnChange}
                                autoFocus
                                required
                                autoComplete="email"
                                className={`outline-none bg-white dark:bg-gray-700 border rounded-xl flex flex-grow p-3  rounded-l-xl px-4 text-xs duration-300  md:w-72 lg:w-[340px] w-full 
                                `}

                            />
                            <div className="absolute top-0  right-2 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-purple-500">
                                <FiMail className={`text-primary group-focus-within:text-white `} />
                            </div>
                            <span className="text-red-500 ml-2 mt-1 text-xs">{error.email && error.email}</span>
                        </div>
                        <div className="relative flex  flex-col rounded-xl  group md:w-fit w-3/4">
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                id="password"
                                value={credentials.password}
                                onChange={handleOnChange}
                                name="password"
                                className={`outline-none bg-white dark:bg-gray-700 border rounded-xl flex flex-grow p-3  rounded-l-xl px-4 text-xs duration-300  md:w-72 lg:w-[340px] w-full 
                                `}

                            />
                            <div className="absolute top-0  right-2 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-purple-500">
                                <FiLock className={`text-primary group-focus-within:text-white 
                                `} />
                            </div>
                            <p className="text-red-500 ml-2 mt-1 text-xs w-fit break-words" style={{ whiteSpace: 'pre-line' }}>
                                {error.password && error.password}
                            </p>
                        </div>
                        <div className="flex space-x-2 -ml-28 md:-ml-40 lg:-ml-52">
                            <input className="" type="checkbox" id="checkbox" name="checkbox" />
                            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 -mt-1 cursor-pointer">Remember Me</h3>
                        </div>
                    </div>
                    <div className="text-center mt-7">
                        <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md bg-purple-500 text-white hover:bg-white hover:text-purple-500 border border-purple-500  ease-linear transition-all duration-150 font-medium shadow-md hover:shadow-lg" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Login
import {setUser} from "../store/slice/userSlice";

const {useState} = require("react")
const {useDispatch} = require ("react-redux");
const {getAuth, createUserWithEmailAndPassword} = require ("firebase/auth");
import SignUpForm from "../pages/signUp/SignUpForm";
import {Form} from "react-router-dom";


const SignUp =() => {

    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email,password)
            .then(({user})=>{
                console.log (user);
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken
                }))
            })
            .catch(console.error)
    }

    return (
        <Form
            title = "register"
            handleClick = {handleRegister}
        />
    )
}

export default SignUp
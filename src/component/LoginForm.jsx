import FormComponent from './FormComponent';
import { Link } from 'react-router-dom';
import * as z from 'zod'
const LoginForm = () => {
    const schema = z.object({
        username: z.string().min(1, {message: "Please enter your username"}).max(15, {message: "Username must be less than 15 characters"}),
        password: z.string().min(8, {message: "Password must be at least 8 characters"}),
    })
    const formDataLayout = {
        title: "LOGIN",
        isLoginForm: true,
        submitBtnContent: "Submit",
        schema: schema,
        defaultValue: {
            username: "",
            password: ""
        },
        input: [
            {
                label: "Username",
                name: "username",
                placeholder: "Enter your username",
                required: true,
                errorMsg: "Please enter your username",
                type: "text"
            },
            {
                label: "Password",
                name: "password",
                placeholder: "Enter your password",
                required: true,
                type: "password",
                errorMsg: "Please enter your password",
            },
        ]
    }
    return (
        <>
            <div className='rounded-[21px] border max-w-[352px] px-[23px] py-9 shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-20'>
                <FormComponent layout={formDataLayout} />
            </div>
        </>
    )
}
export default LoginForm
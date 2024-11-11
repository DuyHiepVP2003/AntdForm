import FormComponent from './FormComponent';
import { Link } from 'react-router-dom';
import * as z from 'zod'
const RegisterForm = () => {
  const schema = z.object({
    username: z.string().min(1, { message: "Please enter your username" }).max(15, { message: "Username must be less than 15 characters" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must be at least 1 number",
      })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must be at least 1 uppercase characters",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must be at least 1 lowercase characters",
      }),
    confirmPassword: z.string().min(1, { message: "Please enter your confirm password" })
  })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Confirm password don't match",
      path: ["confirmPassword"],
    })
  const formDataLayout = {
    title: "REGISTER",
    isLoginForm: false,
    submitBtnContent: "Register",
    schema: schema,
    defaultValue: {
      username: "",
      password: "",
      confirmPassword: "",
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
      {
        label: "Confirm Password",
        name: "confirmPassword",
        placeholder: "Re-enter password",
        required: true,
        type: "password",
        errorMsg: "Please enter your confirm password",
      },
    ]
  }
  return (
    <div className='rounded-[21px] border max-w-[352px] px-[23px] py-9 shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-20'>
      <FormComponent layout={formDataLayout} />
      <Link to={"/"} style={{
        fontFamily: "sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        textAlign: "left",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationSkipInk: "none",
      }}>Already have account!</Link>
    </div>
  )
}
export default RegisterForm
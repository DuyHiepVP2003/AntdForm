import FormComponent from './FormComponent';
import * as z from 'zod'
const ForgotPassword = () => {
    const schema = z.object({
        username: z.string().min(1, {message: "Please enter your username"}).max(15, {message: "Username must be less than 15 characters"}),
    })
  const formDataLayout = {
    title: "FORGOT PASSWORD",
    isLoginForm: false,
    submitBtnContent: "Submit",
    schema: schema,
    defaultValue: {
        username: ""
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
    ]
}
return (
    <div className='rounded-[21px] border max-w-[352px] px-[23px] py-9 shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-20'>
        <FormComponent layout={formDataLayout} />
    </div>
)
}
export default ForgotPassword
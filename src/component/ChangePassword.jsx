import FormComponent from './FormComponent';
import * as z from 'zod'
const ChangePassword = () => {
  const schema = z.object({
    username: z.string().min(1, { message: "Please enter your username" }).max(15, { message: "Username must be less than 15 characters" }),
    password: z.string().min(1, { message: "Please enter your password" }),
    confirmPassword: z.string().min(1, { message: "Please enter your confirm password" }),
  })
  const formDataLayout = {
    title: "CHANGE PASSWORD",
    isLoginForm: false,
    submitBtnContent: "Save",
    schema: schema,
    defaultValue: {
      username: "",
      password: "",
      confirmPassword: "",
  },
    input: [
      {
        label: "Current password",
        name: "currentPassword",
        placeholder: "Enter your current password",
        required: true,
        errorMsg: "Please enter your current password",
        type: "password",
      },
      {
        label: "New password",
        name: "newPassword",
        placeholder: "Enter your new password",
        required: true,
        type: "password",
        errorMsg: "Please enter your new password",
      },
      {
        label: "Confirm password",
        name: "newConfirmPassword",
        placeholder: "Re-enter new password",
        required: true,
        type: "password",
        errorMsg: "Please enter your new confirm password",
      },
    ]
  }
  return (
    <div className='rounded-[21px] border max-w-[352px] px-[23px] py-9 shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-20'>
      <FormComponent layout={formDataLayout} />
    </div>
  )
}
export default ChangePassword
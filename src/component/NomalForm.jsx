import { Button, Form, Input } from "antd";
import {Select} from "antd";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
const NomalForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <input type="submit" />
        </form>
    );
}
export default NomalForm
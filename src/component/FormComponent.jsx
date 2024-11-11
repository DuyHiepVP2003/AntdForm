import { Button, Form, Input, Flex, Typography } from 'antd';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
const FormComponent = ({ layout }) => {
    const methods = useForm({
        defaultValues: layout.defaultValue,
        resolver: zodResolver(layout.schema),
        mode: "all"
    })
    const { control, setValue, handleSubmit, formState: { errors }, reset, getValues } = methods
    const onFinish = (values) => {
        console.log(getValues("username"))
        console.log('Received values of form: ', JSON.stringify(values));
    };
    return (
        <FormProvider {...methods}>
            <form
                name="login"
                onSubmit={handleSubmit(onFinish)}
            >
                <Typography.Title
                    level={4}
                    style={{
                        color: "#5083F1"
                    }}
                >
                    {layout.title}
                </Typography.Title>
                {
                    layout.input.map((input, index) => {
                        return (
                            <Form.Item
                                key={index}
                                label={input.label}
                                required
                                layout="vertical"
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Controller
                                    name={input.name}
                                    control={control}
                                    render={({ field }) =>
                                        <>
                                            <Input
                                                {...field}
                                                style={{
                                                    height: "40px",
                                                    border: "1px solid #000000",
                                                    borderRadius: "4px",
                                                }}
                                                placeholder={input.placeholder}
                                                type={input.type}
                                            />
                                            {
                                                errors[input.name] && (
                                                    <span style={{
                                                        color: 'red'
                                                    }} onClick={() => {
                                                        console.log(errors)
                                                    }}>{errors[input.name].message}</span>
                                                )
                                            }
                                        </>
                                    }
                                />
                                {
                                    layout.isLoginForm && index === layout.input.length-1 ?
                                        <Flex justify='flex-end'>
                                            <Link to={"/forgot"} style={{
                                                fontFamily: "sans-serif",
                                                fontSize: "12px",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                textDecorationLine: "underline",
                                                textDecorationStyle: "solid",
                                                textDecorationSkipInk: "none",
                                            }}>Forgot password?</Link>
                                        </Flex>
                                        : ""
                                }
                            </Form.Item>
                        )
                    })
                }

                <Form.Item>
                    <Button style={{
                        borderRadius: "4px",
                        border: "1px solid #5083F1",
                        fontWeight: 400,
                        fontSize: "16px",
                        padding: "2px 0 2px 0"
                    }} block type="primary" htmlType="submit">
                        {layout.submitBtnContent}
                    </Button>
                </Form.Item>
            </form>
        </FormProvider>
    )
}
export default FormComponent


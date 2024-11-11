import { Button, Checkbox, Form, Input, message } from 'antd';
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
const TestForm = () => {
    const schema = z.object({
        name: z.string().min(1, 'Tên không thể trống'),
        email: z.string().email('Email không hợp lệ'),
    });
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            <Form.Item
                label="Tên"
                rules={[{required: true}]}
                validateStatus={errors.name ? 'error' : ''}
                help={errors.name?.message}
            >
                <Input {...control.register("name")} />
            </Form.Item>

            <Form.Item
                label="Email"
                validateStatus={errors.email ? 'error' : ''}
                help={errors.email?.message}
            >
                <Input {...control.register("email")} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Gửi
                </Button>
            </Form.Item>
        </Form>
    );
}
export default TestForm
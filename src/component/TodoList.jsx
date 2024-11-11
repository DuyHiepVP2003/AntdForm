import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from 'zod'

function TodoList() {
    const schema = z.object({
        job: z.array(z.object({
            jobDes: z.string().min(1, { message: "Job description cannot be empty" })
        })).max(5, { message: "Job item must be less than 5" })
    })
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "job"
    });

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-sans text-3xl font-semibold mb-5">Todolist</h1>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <ul>
                    {fields.map((item, index) => (
                        <li className="mb-4" key={item.id}>
                            <div>
                                <input className="py-2 px-3 border rounded mr-2" placeholder="New job" {...register(`job.${index}.jobDes`)} />
                                <button className="bg-[#FC3A3A] text-white py-2 px-3 rounded" type="button" onClick={() => remove(index)}>Delete</button>
                            </div>
                            {
                                errors.job?.[index]?.jobDes && (
                                    <span style={{
                                        color: 'red'
                                    }} onClick={() => {
                                        console.log(errors)
                                    }}>{errors.job[index].jobDes.message}</span>
                                )
                            }
                        </li>
                    ))}
                </ul>
                {
                    errors.job?.root && (
                        <div style={{
                            color: 'red',
                        }} onClick={() => {
                            console.log(errors)
                        }}>{errors.job?.root.message}</div>
                    )
                }
                <button
                    className="bg-[#5083F1] text-white py-2 px-3 rounded mr-3 mt-3"
                    type="button"
                    onClick={() => {
                        append({ jobDes: "" })
                    }}
                >
                    Append
                </button>
                {/* <button
                    className="bg-[#5083F1] text-white py-2 px-3 rounded mr-3"
                    type="button"
                    onClick={() => console.log(errors)}
                >
                    Error
                </button> */}
                <button className="bg-[#5083F1] text-white py-2 px-3 rounded" type="submit" >
                    Submit
                </button>
            </form>
        </div>
    );
}
export default TodoList
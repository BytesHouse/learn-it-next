'use client'

import {useState} from "react";

interface RegisterProps {
    changeFunc?: () => void
}
const Register = (props: RegisterProps) => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: ''
        });

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            // Здесь можно добавить логику для отправки данных на сервер
            console.log('Отправка данных:', formData);
            // Очистить форму после отправки
            setFormData({ name: '', email: '', password: '' });
        };

        const handleReset = () => {
            setFormData({ name: '', email: '', password: '' });
        };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col rounded-[20px] p-[30px_50px]">
            <div className="mt-[20px]">
                <label>
                    <input
                        placeholder="Email"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div className="flex flex-col gap-[13px] mt-[103px]">
                <button className="bg-black text-white rounded-[2px]" type="submit">Registration</button>
                <button className="bg-black text-white rounded-[2px]" type="button" onClick={handleReset}>Login In</button>
            </div>
        </form>
    );
};
export default Register;
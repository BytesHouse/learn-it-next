'use client'
import {Simulate} from "react-dom/test-utils";
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
        <form  onSubmit={handleSubmit}>
            <div>
                <label>
                    Имя:
                    <input
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
                    <label></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <button type="submit">Register</button>
                <button type="button" onClick={handleReset}>Login In</button>
            </div>
        </form>
    );
};
export default Register;
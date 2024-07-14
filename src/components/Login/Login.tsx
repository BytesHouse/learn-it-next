'use client'
import {useState} from "react";

interface LoginProps {
    changeFunc?: () => void
}

// eslint-disable-next-line react-hooks/rules-of-hooks
    const Login = ({ changeFunc }: LoginProps) => {
        const [formData, setFormData] = useState({
            email: '',
            password: '',
            rememberMe: false
        });

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value, type, checked} = event.target;
            const val = type === 'checkbox' ? checked : value;
            setFormData({...formData, [name]: val});
        };

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const {email, password} = formData;
            // Здесь может быть логика для отправки данных на сервер
            console.log('Отправка данных для входа:', {email, password});
            // Передаем данные на обработку родительскому компоненту
            if (changeFunc) changeFunc();        // Очищаем форму после отправки (опционально)
            setFormData({email: '', password: '', rememberMe: false});
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:
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
                        Password:
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
                    <label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                        />
                        Remember me
                    </label>
                    <a href="#">Forgot password</a>
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        )
    }
    export default Login

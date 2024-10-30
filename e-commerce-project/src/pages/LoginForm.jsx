import { useDispatch } from 'react-redux';
import { loginUser } from '../pages/api/userSlice';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [gravatarUrl, setGravatarUrl] = useState(''); // Gravatar URL'sini saklamak için bir state ekleyin
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (data) => {
        setIsLoading(true);

        try {
            const result = await dispatch(loginUser(data)).unwrap();
            // Gravatar URL'sini oluşturma
            setGravatarUrl(getGravatarUrl(data.email));

            // Başarılı girişte yönlendirme
            const previousPage = history.location.state?.from || '/'; // Önceki sayfayı kontrol et
            history.push(previousPage); // Yönlendirme
        } catch (error) {
            toast.error(error); // Hata mesajı göster
        } finally {
            setIsLoading(false);
        }
    };

    const getGravatarUrl = (email) => {
        const hash = require('crypto').createHash('md5').update(email.trim().toLowerCase()).digest('hex');
        return `https://www.gravatar.com/avatar/${hash}`; // Şablon dizesi (template literal) için ` işaretleri kullanıldı.
    };


    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl text-[#252B42] font-bold mb-6">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-[#252B42] font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm text-[#252B42] font-medium mb-1">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        {...register('rememberMe')}
                        id="rememberMe"
                        className="h-4 w-4 text-[#23A6F0] border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#252B42]">Remember Me</label>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full p-2 bg-[#23A6F0] text-white rounded hover:bg-blue-500 disabled:opacity-50"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
            </form>

            {/* Gravatar resmini gösterme */}
            {gravatarUrl && <img src={gravatarUrl} alt="User Gravatar" className="rounded-full mt-4" />}
        </div>
    );
};

export default LoginForm; 
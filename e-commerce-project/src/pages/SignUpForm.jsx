import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

const SignUpForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('Customer');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axiosInstance.get('/roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Failed to fetch roles:', error);
            }
        };
        fetchRoles();
    }, []);

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { name, email, password, role_id, storeName, storePhone, storeTaxId, storeBankAccount } = data;

        const formData = {
            name,
            email,
            password,
            role_id,
            ...(selectedRole === 'Store' && {
                store: {
                    name: storeName,
                    phone: storePhone,
                    tax_no: storeTaxId,
                    bank_account: storeBankAccount,
                },
            }),
        };

        try {
            await axiosInstance.post('/signup', formData);
            toast.success('You need to click the link in email to activate your account!');
            history.goBack();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl text-gray-800 font-bold mb-6">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-sm text-gray-800 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm text-gray-800 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm text-gray-800 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'Minimum 8 characters' },
                            pattern: {
                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                message: 'Password must include uppercase, lowercase, number, and special character',
                            },
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Confirm Password Field */}
                <div>
                    <label className="block text-sm text-gray-800 font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Please confirm your password',
                            validate: (value) => value === watch('password') || 'Passwords do not match',
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                {/* Role Selection */}
                <div>
                    <label className="block text-sm text-gray-800 font-medium mb-1">Role</label>
                    <select
                        {...register('role_id')}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full p-2 border rounded"
                        defaultValue="Customer"
                    >
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Store-Specific Fields */}
                {selectedRole === 'Store' && (
                    <>
                        <div>
                            <label className="block text-sm text-gray-800 font-medium mb-1">Store Name</label>
                            <input
                                type="text"
                                {...register('storeName', { required: 'Store Name is required', minLength: 3 })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.storeName && <p className="text-red-500 text-sm mt-1">{errors.storeName.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-800 font-medium mb-1">Store Phone</label>
                            <input
                                type="tel"
                                {...register('storePhone', {
                                    required: 'Store Phone is required',
                                    pattern: { value: /^\+90\d{10}$/, message: 'Invalid Türkiye phone number' },
                                })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.storePhone && <p className="text-red-500 text-sm mt-1">{errors.storePhone.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-800 font-medium mb-1">Store Tax ID</label>
                            <input
                                type="text"
                                {...register('storeTaxId', {
                                    required: 'Store Tax ID is required',
                                    pattern: { value: /^T\d{4}V\d{6}$/, message: 'Invalid Tax ID format' },
                                })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.storeTaxId && <p className="text-red-500 text-sm mt-1">{errors.storeTaxId.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-800 font-medium mb-1">Store Bank Account</label>
                            <input
                                type="text"
                                {...register('storeBankAccount', {
                                    required: 'Bank Account is required',
                                    pattern: { value: /^TR\d{24}$/, message: 'Invalid IBAN format' },
                                })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.storeBankAccount && <p className="text-red-500 text-sm mt-1">{errors.storeBankAccount.message}</p>}
                        </div>
                    </>
                )}

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-[#2DC071] text-white rounded hover:[#28a745] flex justify-center items-center"
                        disabled={isLoading}
                    >
                        {isLoading ? <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div> : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com'
});

const SignUpForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('3'); // Varsayılan rol "Müşteri"
    const history = useHistory();

    // Fetch roles on component mount
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axiosInstance.get('/roles');
                setRoles(response.data);
            } catch (error) {
                toast.error('Failed to fetch roles');
            }
        };
        fetchRoles();
    }, []);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: parseInt(data.role_id)
            };

            // Add store data if role is Store
            if (data.role_id === '2') { // Assuming 2 is Store role_id
                formData.store = {
                    name: data.storeName,
                    phone: data.storePhone,
                    tax_no: data.storeTaxId,
                    bank_account: data.storeBankAccount
                };
            }

            await axiosInstance.post('/signup', formData);
            toast.warning('You need to click the link in email to activate your account!');

            // Redirect back after showing warning
            setTimeout(() => {
                history.goBack();
            }, 2000); // 2 seconds delay

        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: { value: 3, message: 'Name must be at least 3 characters' }
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'Password must be at least 8 characters' },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Password must include uppercase, lowercase, number and special character'
                            }
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Confirm Password Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Please confirm your password',
                            validate: value => value === watch('password') || 'Passwords do not match'
                        })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                {/* Role Selection */}
                <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <select
                        {...register('role_id')}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full p-2 border rounded"
                        defaultValue="3" // Varsayılan değer "Müşteri"
                    >
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Store Fields - Only show if Store role is selected */}
                {selectedRole === '2' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-1">Store Name</label>
                            <input
                                type="text"
                                {...register('storeName', {
                                    required: 'Store name is required',
                                    minLength: { value: 3, message: 'Store name must be at least 3 characters' }
                                })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.storeName && <p className="text-red-500 text-sm mt-1">{errors.storeName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Store Phone</label>
                            <input
                                type="tel"
                                {...register('storePhone', {
                                    required: 'Store phone is required',
                                    pattern: {
                                        value: /^\+90[0-9]{10}$/,
                                        message: 'Enter valid Turkish phone number (+90XXXXXXXXXX)'
                                    }
                                })}
                                className="w-full p-2 border rounded"
                                placeholder="+90XXXXXXXXXX"
                            />
                            {errors.storePhone && <p className="text-red-500 text-sm mt-1">{errors.storePhone.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Tax ID</label>
                            <input
                                type="text"
                                {...register('storeTaxId', {
                                    required: 'Tax ID is required',
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: 'Invalid Tax ID format (TXXXXVXXXXXX)'
                                    }
                                })}
                                className="w-full p-2 border rounded"
                                placeholder="TXXXXVXXXXXX"
                            />
                            {errors.storeTaxId && <p className="text-red-500 text-sm mt-1">{errors.storeTaxId.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Bank Account (IBAN)</label>
                            <input
                                type="text"
                                {...register('storeBankAccount', {
                                    required: 'IBAN is required',
                                    pattern: {
                                        value: /^TR[0-9]{24}$/,
                                        message: 'Invalid IBAN format (TR + 24 digits)'
                                    }
                                })}
                                className="w-full p-2 border rounded"
                                placeholder="TR..."
                            />
                            {errors.storeBankAccount && <p className="text-red-500 text-sm mt-1">{errors.storeBankAccount.message}</p>}
                        </div>
                    </>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full p-2 bg-[#23A6F0] text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center"
                >
                    {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;

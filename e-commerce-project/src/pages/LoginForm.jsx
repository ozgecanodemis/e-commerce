import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/reducers/userReducer";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

function LoginForm({ data }) {
    const { header = {}, email = {}, password = {}, button = "Submit", submission = {} } = data?.login || {};
    const { subtitle = "", title = "Login", description = "" } = header;

    const [token, setToken] = useLocalStorage("token", "");
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "all",
    });

    const onSubmit = (formData) => {
        dispatch(setUser(formData));
    };

    useEffect(() => {
        if (user.fetchState === FETCH_STATES.FETCHED) {
            setToken(user.user.token);
            history.push("/");
        } else if (user.fetchState === FETCH_STATES.FETCH_FAILED) {
            toast.error(submission.fail || "Login failed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [user, history, setToken, submission.fail]);

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="text-center mb-6">
                <h2 className="text-base text-gray-500">{subtitle}</h2>
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <p className="text-lg text-gray-700">{description}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">{email.label || "Email"}</label>
                    <input
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder={email.placeholder || "Enter your email"}
                        type="email"
                        {...register("email", {
                            required: email.errorMsg?.required || "Email is required",
                            validate: {
                                matchPattern: (v) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                    "Email address must be a valid address",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">{password.label || "Password"}</label>
                    <input
                        id="password"
                        className="w-full p-2 border rounded"
                        placeholder={password.placeholder || "Enter your password"}
                        type="password"
                        {...register("password", {
                            required: password.errorMsg?.required || "Password is required",
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full p-2 bg-[#23A6F0] text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {button}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setUser } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/reducers/userReducer.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

function LoginForm({ data }) {
    const { header, email, password, button, submission } = data.login;
    const { subtitle, title, description } = header;

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
            toast.error(`${submission.fail}`, {
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
    }, [user]);

    return (
        <div className="LogIn h-full">

            <div className="bg-info py-10 px-[20%] sm:p-10">
                <div className="p-12 font-bold flex flex-col gap-4 items-center text-center sm:text-center">
                    <h2 className="text-base text-accent sm:text-sm">{subtitle}</h2>
                    <h1 className="text-6xl leading-[5rem] sm:text-4xl">{title}</h1>
                    <p className="font-normal text-xl text-accent sm:text-base">
                        {description}
                    </p>
                </div>
                <form
                    className="flex flex-col gap-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            {email.label}
                        </label>
                        <input
                            id="email"
                            className="form-input"
                            placeholder={email.placeholder}
                            type="email"
                            {...register("email", {
                                required: `${email.errorMsg.required}`,
                                validate: {
                                    matchPattern: (v) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        {errors.email ? (
                            <p className="form-footnote text-red-600">
                                {errors.email.message}
                            </p>
                        ) : (
                            <p className="form-footnote">{email.footnote}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            {password.label}
                        </label>
                        <input
                            id="password"
                            className="form-input"
                            placeholder={password.placeholder}
                            type="password"
                            {...register("password", {
                                required: `${password.errorMsg.required}`,
                            })}
                        />
                        {errors.password ? (
                            <p className="form-footnote text-red-600">
                                {errors.password.message}
                            </p>
                        ) : (
                            <p className="form-footnote">{password.footnote}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={!isValid || user.fetchState === FETCH_STATES.FETCHING}
                        className={
                            !(user.fetchState === FETCH_STATES.FETCHING) && isValid
                                ? "blue-button mx-auto flex gap-4 items-center"
                                : "blue-button mx-auto flex gap-4 items-center bg-secondary-focus"
                        }
                    >
                        <span
                            className={
                                user.fetchState === FETCH_STATES.FETCHING ? "" : "hidden"
                            }
                        >

                        </span>
                        <span>{button}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;
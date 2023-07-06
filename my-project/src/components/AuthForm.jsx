import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContextProvider";
import { LSset } from "@/utils/localStorage";
const AuthForm = () => {
	const { setUserInfo } = useContext(AuthContext);
	const router = useRouter();
	function generateRandomString(length) {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
	}
	const [isReg, setIsReg] = useState(true);
	return (
		<div className="container">
			<h1>{isReg ? "Регистрация" : "Авторизация"}</h1>
			<Formik
				initialValues={{ email: "", password: "", hash: "" }}
				validate={(values) => {
					// const errors = {};
					// if (!values.email) {
					// 	errors.email = "Required";
					// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					// 	errors.email = "Invalid email address";
					// }
					// return errors;
				}}
				onSubmit={async (values) => {
					const response = await fetch("/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: isReg
							? JSON.stringify({ email: values.email, password: values.password, hash: generateRandomString(12) })
							: JSON.stringify({ email: values.email, password: values.password }),
					});
					if (response.status === 201) {
						const data = await response.json();
						console.log("data", data);
						setUserInfo(data);
						LSset("myHash", data.hash);
						alert(`${isReg ? "Регистрация успешна" : "Авторизация успешна"}`);
						router.push("/profile");
					} else if (response.status === 402) {
						alert(`Пользователь ${values.email} уже существует`);
						throw new Error("Пользователь уже существует");
					} else {
						throw new Error("Ошибка сервера");
					}
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className="form-control"
						/>
						{errors.email && touched.email && errors.email}
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className="form-control"
						/>
						{errors.password && touched.password && errors.password}
						<button type="submit" disabled={isSubmitting} className="btn btn-primary mt-2">
							{isReg ? "Регистрация" : "Авторизация"}
						</button>
					</form>
				)}
			</Formik>

			<button className="btn btn-success mt-2" onClick={() => setIsReg((prev) => !prev)}>
				{!isReg ? "Нет аккаунта ? Регистрация" : "Уже есть аккаунт ? Вход"}
			</button>
		</div>
	);
};

export default AuthForm;

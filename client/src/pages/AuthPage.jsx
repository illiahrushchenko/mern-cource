import React, { useContext, useEffect, useState } from 'react'
import 'materialize-css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
	const message = useMessage()
	const auth = useContext(AuthContext)
	const { request, loading, error, clearError } = useHttp()
	const [form, setForm] = useState({
		email: '', password: ''
	})

	useEffect(() => {
		console.log(error)
		message(error)
		clearError()
	}, [error, message, clearError])

	const changeHandler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', { ...form })
			message(data.message)
		} catch (e) {

		}
	}

	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', { ...form })
			message(data.message)
			auth.login(data.token, data.userId)
		} catch (e) {

		}
	}

	return (
		<div className="row">
			<div className="col offset-s3 s6">
				<h1>Cut Link</h1>
				<div className="card grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Authorization</span>
						<div>
							<div className="input-field">
								<input
									type="text"
									id="email"
									name="email"
									className="white-text"
									value={form.email}
									onChange={changeHandler}
								/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="input-field">
								<input
									type="password"
									id="password"
									name="password"
									className="white-text"
									value={form.password}
									onChange={changeHandler}
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
					</div>
					<div className="card-action">
						<button
							className="btn blue darken-1"
							onClick={loginHandler}
							disabled={loading}
						>
							Login
						</button>
						<button
							className="btn blue darken-3"
							onClick={registerHandler}
							disabled={loading}
						>
							Register
            </button>
					</div>
				</div>
			</div>
		</div>
	);
}

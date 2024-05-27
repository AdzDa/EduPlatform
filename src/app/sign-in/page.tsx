'use client';
import { Button } from '@/components/ui/button';
import { createSupabaseClient } from '@/utils/supabase/client';
import { useState } from 'react';

export default function SignIn() {
	const supabase = createSupabaseClient();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitUser = async (e: any) => {
		e.preventDefault();
		if (password === '' || email === '') return;
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (error) {
			console.log(error);
		} else {
			window.location.href = '/';
		}
	};
	return (
		<div className="flex">
			<div className="w-1/2">
				<img src="sign-in.jpg" alt="" />
			</div>

			<div className="items-center w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-40 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="font-bold text-5xl text-center">EduHub</h1>

					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-blue-600 hover:text-blue-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<Button
								onClick={submitUser}
								className="flex w-full justify-center rounded-md bg-color1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color1-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color1">
								Sign In
							</Button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{' '}
						<a
							href="/sign-up"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
							Create an account here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

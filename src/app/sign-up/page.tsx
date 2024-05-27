'use client';
import { Button } from '@/components/ui/button';
import { createSupabaseClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
	const supabase = createSupabaseClient();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const submitUser = async () => {
		if (password !== confirmPassword || password === '' || email === '') return;
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		if (error) {
			console.log(error.message);
		}
		console.log(data);
	};
	return (
		<div className="flex">
			<div className="w-1/2">
				<img src="sign-up.jpg" alt="" />
			</div>

			<div className="items-center w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-30 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="font-bold text-5xl text-center">EduHub</h1>

					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create New Account
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
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Confirm Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="confirm-password"
									name="confirm-password"
									type="password"
									autoComplete="current-password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{password !== confirmPassword && (
								<div className="text-sm text-red-500">
									Password do not match
								</div>
							)}
						</div>

						<div>
							<Link href="/sign-in">
								<Button
									type="submit"
									onClick={() => submitUser()}
									className="flex w-full justify-center rounded-md bg-color1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color1-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color1">
									Sign Up
								</Button>
							</Link>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Already have an account?{' '}
						<a
							href="/sign-in"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
							Sign in here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

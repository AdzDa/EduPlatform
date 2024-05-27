'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createSupabaseClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function NavBar() {
	const [userLoggedIn, setUserLoggedIn] = useState<any>(null);
	const supabase = createSupabaseClient();
	const checkIfUserLoggedIn = async () => {
		const {
			data: { user },
			error,
		} = await supabase.auth.getUser();
		if (error) {
			console.log(error);
		}
		if (user) {
			setUserLoggedIn(user);
		}
	};

	const signOutUser = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
		window.location.href = '/';
	};
	useEffect(() => {
		checkIfUserLoggedIn();
	}, []);
	return (
		<div className="flex justify-between p-4 border-b">
			<Link href="/">
				<div className="flex items-center pt-1 pl-2">
					<h1 className="font-bold text-xl">EduHub</h1>
				</div>
			</Link>
			{!userLoggedIn && (
				<div className="flex space-x-2 items-center">
					<Link href="/sign-in">
						<Button>Sign In</Button>
					</Link>

					<Link href="/sign-up">
						<Button>Sign Up</Button>
					</Link>
				</div>
			)}

			{userLoggedIn && (
				<div className="flex space-x-2 items-center">
					<Button onClick={() => signOutUser()}>Log Out</Button>
				</div>
			)}
		</div>
	);
}

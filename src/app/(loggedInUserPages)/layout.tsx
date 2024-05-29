// 'use client';
// import { createSupabaseClient } from '@/utils/supabase/client';
// import { useEffect } from 'react';

// export default function LoggedInUserLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	const supabase = createSupabaseClient();

// 	const checkIfUserLoggedIn = async () => {
// 		const {
// 			data: { user },
// 		} = await supabase.auth.getUser();

// 		if (user) {
// 			console.log('User is logged in!');
// 		} else {
// 			console.log('User is not logged in!');
// 			window.location.href = '/sign-in';
// 		}
// 	};

// 	useEffect(() => {
// 		checkIfUserLoggedIn();
// 	}, []);
// 	return <>{children}</>;
// }

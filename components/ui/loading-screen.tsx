'use client';

import { LuLoader2 } from 'react-icons/lu';

export default function LoadingScreen() {
	return (
		<div className='absolute inset-0 flex h-svh w-screen items-center justify-center bg-black'>
			<LuLoader2 className='size-6 animate-spin text-white' />
		</div>
	);
}

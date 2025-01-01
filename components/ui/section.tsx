'use client';

import { cn } from '@/lib/utils';

export default function Section({ children, className }: { children: React.ReactNode; className?: string }) {
	return <section className={cn('w-full py-24 px-8 lg:px-0', className)}>{children}</section>;
}

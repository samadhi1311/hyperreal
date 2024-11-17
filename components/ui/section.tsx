'use client';

import { cn } from '@/lib/utils';

export default function Section({ children, className }: { children: React.ReactNode; className?: string }) {
	return <section className={cn('w-full py-24', className)}>{children}</section>;
}

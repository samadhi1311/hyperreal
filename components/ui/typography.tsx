'use client';

import { cn } from '@/lib/utils';

function H1({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h1 className={cn('text-5xl font-semibold lg:text-8xl font-display', className)}>{children}</h1>;
}

function H2({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h2 className={cn('text-3xl font-medium lg:text-5xl font-display', className)}>{children}</h2>;
}

function H3({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h3 className={cn('text-xl font-medium lg:text-3xl font-display', className)}>{children}</h3>;
}

function H4({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h4 className={cn('text-lg lg:text-xl font-display', className)}>{children}</h4>;
}

function P1({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={cn('text-lg font-light', className)}>{children}</p>;
}

function P2({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={cn('text-base font-light', className)}>{children}</p>;
}

function P3({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={cn('text-sm font-light', className)}>{children}</p>;
}

function P4({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={cn('text-xs font-light uppercase tracking-wide text-white/60', className)}>{children}</p>;
}

export { H1, H2, H3, H4, P1, P2, P3, P4 };

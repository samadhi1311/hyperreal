'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import { H1, P1 } from '@/components/ui/typography';
import { LuCheckCircle2, LuLoader2, LuSendHorizonal } from 'react-icons/lu';
import Footer from '@/components/footer';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function About() {
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);

	const formSchema = z.object({
		firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }).max(25, { message: 'First name must be at most 25 characters' }),
		lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }).max(25, { message: 'Last name must be at most 25 characters' }),
		phone: z.string().min(10, { message: 'Phone number must be at least 10 characters' }).max(10, { message: 'Phone number must be at most 10 characters' }),
		subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }).max(100, { message: 'Subject must be at most 100 characters' }),
		message: z.string().min(2, { message: 'Message must be at least 2 characters' }).max(500, { message: 'Message must be at most 500 characters' }),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			subject: '',
			message: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setSending(true);
			await fetch('https://hyperreal.hyperreal.cloud/', {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					subject: values.subject,
					html: `
                    <div style="padding: 32px; font-family: sans-serif;">
                        <h2>
                            You have a new contact form submission.
                        </h2>
                        
                        <p>
                            Name: ${values.firstName + ' ' + values.lastName}
                        </p>
                        
                        <p>
                            Phone: ${values.phone}
                        </p>
                        
                        <p>
                            Subject: ${values.subject}
                        </p>
                        
                        <p>
                            Message: ${values.message}
                        </p>
                    </div>
                    
                    `,
				}),
			});

			setSuccess(true);
		} catch (error) {
			console.error(error);
			setSuccess(false);
		} finally {
			setSending(false);
		}
	}
	return (
		<>
			<PageWrapper>
				<Section className='mt-16 min-h-screen'>
					<H1 className='mb-4'>Contact us</H1>
					<div className='grid grid-cols-1 gap-8 py-16 md:grid-cols-2'>
						<div className='flex max-w-lg flex-col justify-between leading-relaxed'>
							<div>
								<P1 className='mb-4 text-2xl'>
									Tell us your idea, and we will sent you a{' '}
									<span className='bg-gradient-to-br from-violet-600 to-orange-400 bg-clip-text font-semibold tracking-wide text-transparent'>project proposal</span>.
								</P1>
								<P1 className='text-2xl'>
									Better yet, Text us on WhatsApp,
									<br />
									<span className='bg-gradient-to-br from-violet-600 to-orange-400 bg-clip-text font-semibold tracking-wide text-transparent'>+94 78 275 2500</span>
								</P1>
							</div>
						</div>
						<div>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className='mx-auto max-w-lg space-y-8 rounded-lg border bg-neutral-950 p-6 shadow-sm md:p-8'>
									<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
										<FormField
											control={form.control}
											name='firstName'
											render={({ field }) => (
												<FormItem>
													<FormLabel>First Name</FormLabel>
													<FormControl>
														<Input placeholder='John' {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name='lastName'
											render={({ field }) => (
												<FormItem>
													<FormLabel>Last Name</FormLabel>
													<FormControl>
														<Input placeholder='Doe' {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name='phone'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Phone Number</FormLabel>
												<FormControl>
													<Input placeholder='0712345678' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='subject'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Subject</FormLabel>
												<FormControl>
													<Input placeholder='Your subject' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='message'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Message</FormLabel>
												<FormControl>
													<Textarea placeholder='Your message goes here...' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className='flex flex-col items-end justify-center gap-2'>
										<Button disabled={sending} variant='secondary' className={success ? 'flex items-center gap-2 bg-emerald-600 pointer-events-none' : 'flex items-center gap-2'}>
											{sending && (
												<>
													<LuLoader2 className='animate-spin' /> Sending...
												</>
											)}
											{success && (
												<>
													<LuCheckCircle2 /> Sent
												</>
											)}
											{!success && !sending && (
												<>
													<LuSendHorizonal />
													Send
												</>
											)}
										</Button>

										<p className='col-span-2 text-right text-xs text-neutral-400'>
											By clicking Send, you agree to our{' '}
											<Link href='/privacy-policy' className='underline decoration-neutral-300 underline-offset-2'>
												Privacy Policy
											</Link>
											.
										</p>
									</div>
								</form>
							</Form>
						</div>
					</div>
				</Section>
			</PageWrapper>

			<Footer />
		</>
	);
}

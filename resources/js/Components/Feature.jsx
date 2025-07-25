import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';

export default function Feature({ feature, answer, children }) {

    const { auth } = usePage().props;

    const availableCredits = auth.user.available_credits;

  return (
    <AuthenticatedLayout
        user={auth.user}
        header={
            <h2 className='font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight'>
                {feature.name}
            </h2>
        }
    >
        <Head title="Feature 1" />

        <div className='py-12'>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                {answer !== null && (
                    <div className='mb-3 py-3 px-5 rounded text-white bg-emerald-600 text-xl'>
                        Result of Calculation: {answer}
                    </div>
                )}
                 <div className='dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg relative gap-5 text-white'>
                    {availableCredits !== null &&
                        feature.required_credits > availableCredits && (
                            <div className='absolute left-0 top-0 right-0 bottom-0 z-20 
                            flex flex-col items-center justify-center bg-white/70 gap-3 bg-red-500 p-10 rounded'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 
                                    11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 
                                    2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 
                                    2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <div className='flex flex-col gap-3'>
                                    you don't have enough credits 
                                    for this feature.   Go(" ")
                                    <Link
                                        // href="/"
                                        href={route('credit.index')}
                                        className='underline'>
                                    Buy more credits
                                    </Link>
                                </div>
                            </div>
                        )}
                        <div className='p-8 text-gray-400 border-b pb-4'>
                            <p>{feature.description}</p>
                            <p className='text-sm italic text-right'>
                                Requires { feature.required_credits} credits
                            </p>
                        </div>
                        { children}
                 </div>
            </div>
        </div>

    </AuthenticatedLayout>
  );
}

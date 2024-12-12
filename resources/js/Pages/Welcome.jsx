import { Head, Link } from '@inertiajs/react';
import Login from './Auth/Login';
import PrimaryButton from '@/Components/PrimaryButton';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Todo" />
            <div className="bg-gray-900 text-gray-50">
                {/* <header className="sticky top-0 z-10 bg-gray-50 py-10 lg:bg-gray-50">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <nav className="-mx-3 flex flex-1 justify-end border-black">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header> */}

                <main>
                    <div className="relative flex min-h-screen flex-col items-center justify-center">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            {/* Main content goes here */}
                            <h2 className='text-6xl col-span-2'>Welcome</h2>
                            <Link href={route('login')} className='bg-gray-500 rounded text-center'>Log in</Link>
                            <Link href={route('register')} className='bg-gray-500 rounded text-center'>Register</Link>
                            
                        </div>
                        {/* <Login canResetPassword={1}/> */}
                    
                    </div>
                    
                </main>

                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    {/* Footer content goes here */}
                </footer>
            </div>
        </>
    );
}
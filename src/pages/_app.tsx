import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import NavBar from '@/components/NavBar/NavBar';
import SideBar from '@/components/SideBar/SideBar';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='my-14 grid grid-cols-12  gap-6 px-5 sm:px-20 md:px-32 lg:px-48'>
        <div className='col-span-12 rounded-xl bg-white p-4 text-center shadow-custom-light dark:bg-black dark:shadow-custom-dark  lg:col-span-3'>
          <SideBar />
        </div>
        <div className='col-span-12 flex  flex-col rounded-2xl bg-white shadow-custom-light dark:bg-dark-100 dark:shadow-custom-dark lg:col-span-9'>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

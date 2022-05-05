import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';


import '@/styles/globals.css';

import NavBar from '@/components/NavBar/NavBar';
import SideBar from '@/components/SideBar/SideBar';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={true}
      storageKey='theme'
      defaultTheme='system'
      attribute='class'
    >
      <div className='my-14 grid grid-cols-12  gap-6 px-5 sm:px-20 md:px-32 lg:px-32'>
        <div className='relative z-10 col-span-12 rounded-xl bg-white p-4 text-center shadow-custom-light dark:bg-black dark:shadow-custom-dark md:static  lg:col-span-3'>
          <SideBar />
        </div>
        <div className='col-span-12 flex  flex-col rounded-2xl bg-white shadow-custom-light dark:bg-dark-100 dark:shadow-custom-dark lg:col-span-9'>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

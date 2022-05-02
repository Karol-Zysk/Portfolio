import { AppProps } from 'next/app';

import '@/styles/globals.css';

import NavBar from '@/components/NavBar/NavBar';
import SideBar from '@/components/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:px-32 lg:px-48'>
        <div className='col-span-12 rounded-xl bg-white p-4 text-center lg:col-span-3'>
          <SideBar />
        </div>
        <div className='col-span-12 rounded-2xl bg-white lg:col-span-9 flex flex-col'>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

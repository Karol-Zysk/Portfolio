import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Ubuntu:wght@300&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Page of Fullstack Developer Wannabe'
          />
          <meta name='keywords' content=' Fullstack Developer Portfolio' />
        </Head>
        <body className='bg-gradient-to-r from-violet to-blue-600 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props?.title}</title>
        <link rel="icon" href="https://image.flaticon.com/icons/png/512/731/731985.png" />
      </Head>
      <Navbar />
      <div className="mt-8">
        {props?.children}
      </div>
    </div>
  )
}

import Header from '../src/components/Header';
import Head from 'next/head';
import Work from '../src/components/Work';
import Footer from '../src/components/Footer';
import { mainColor } from '../src/utility/styles';

const Index = () => (
  <div className="root">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet" />
      <title>Helen Shiu</title>
    </Head>
    <style jsx global>{`
      html, body {
        background-color: black;
        color: white;
        font-family: Montserrat, sans-serif;
        height: 100%;
        margin: 0;
        min-width: 300px;
        padding: 0;
        text-align: center;
      }

      body {
        padding: 0 30px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      a {
        color: white;
        text-decoration: none;
      }

      a:hover {
        text-decoration: ${mainColor} line-through;
      }

      [role="button"] {
        cursor: pointer;
      }

      .root {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
        min-height: 480px;
      }

      .container {
        max-width: 650px;
      }
    `}</style>

    <div className="container">
      <Header />
      <Work />
      <Footer />
    </div>
  </div>
);

export default Index;

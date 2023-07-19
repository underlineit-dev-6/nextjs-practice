import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Next js</title>
      </Head>
      <Image
        src="/images/images.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First project</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

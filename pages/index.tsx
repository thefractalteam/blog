import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import Navbar from '../pages/comps/nav';
import Script from 'next/script';
import Link from 'next/link';
const Home: NextPage = () => {

const handleScriptLoad = () => {
    document.querySelector('main').classList.add('loaded');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fractal - Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
	 <meta name="description" content="we are a team that hope to change how people see the web." />
        <meta name="author" content="fractal team" />
        <link
          href="https://cdn.tailwindcss.com/latest.min.css"
          rel="stylesheet"
        />
        <style>{`
          main {
            display: none;
          }

          main.loaded {
            display: block;
          }
        `}</style>
      </Head>
         <Script src="https://cdn.tailwindcss.com/" async onLoad={handleScriptLoad}></Script>
      <main>
	     
      <div role="alert" className="alert alert-warning mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Fractal is under construction.</span>
</div>
 
          <span className="text-6xl font-black m-2 flex items-center">
  
            <span className="inline-block text-rose-600 font-black">blog</span>
          </span>

        <h2 className="text-4xl font-black m-2">
        welcome to the blog! here are the most recent blog posts from newest to oldest!
         
        </h2>
		
		<br /><br />
		<h3 className="text-3xl font-black m-2">First blog post: Hello Germany!/Hallo Deutschland!</h3> <small className="text-base font-bold m-2">posted by Mark on 8/3/24 at 3:32 pm CST</small>
        <p className="text-lg m-2">
		German version:/Deutsche version:
		
		Hallo, Mark hier bei Fractal. Ich habe gerade unsere Blog-Seite eingerichtet und dies ist unser erster Blog-Beitrag überhaupt! Sie fragen sich wahrscheinlich, warum dieser Beitrag auf Deutsch und nicht auf Englisch ist, da wir ein amerikanisch-kanadisches Team sind. Nun, ich habe heute meine Protokolle überprüft und festgestellt, dass Deutschland ein wichtiges Besucherland der Website war. Ich wollte mir nur die Zeit nehmen, Hallo zu sagen, und wir hoffen, dass Ihnen gefällt, woran wir arbeiten. 😀
		
		English version:/Englische Version:
		
		Hey, Mark at Fractal here. I just set up our blog page, and this is our first blog post ever! You&apos;re probably wondering why this post is in German and not English since we are an American-Canadian team. Well, I checked my logs today and found that Germany was a prominent visiting country of the site. I just wanted to take the time to say hello, and we hope you enjoy what we&apos;re working on. 😀
		
		</p>
		
		

       
      </main>
    </div>
  );
};

export default Home;

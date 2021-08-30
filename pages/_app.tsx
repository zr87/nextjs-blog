import '../styles/global.css'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {AppProps} from "next/app";

//Binding events for progress spinner.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}
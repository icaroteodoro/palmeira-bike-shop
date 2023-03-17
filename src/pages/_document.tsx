import {Html, Head, Main, NextScript} from 'next/document'


export default function Document () {
    return(
        <Html>
            <Head>
            <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@1,700&family=Sunflower:wght@300;500;700&display=swap" rel="stylesheet" />
            <title>Palmeira Bike Shop</title>
            </Head>
            <body>
                <Main />
                <NextScript />    
            </body>
        </Html>
    )
}
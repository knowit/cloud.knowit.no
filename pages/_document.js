import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>The cloud chapter</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <style>{`
            * { box-sizing: border-box; 
              margin: 0; 
              padding: 0;
              
            }
            
            body {
              font-family: Raleway, sans-serif;
            }
            .root {
              
            }
          `}</style>
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}


import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import './globals.css'

export const metadata = {
  title: '한국ICT인재개발원',
  description: 'Generated by create bible',
}

export default function RootLayout({ children }) {
  return (
    <html >
       <body>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

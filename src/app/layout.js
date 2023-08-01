import '../styles/globals.css';
import Layout from '@/components/Layout/Layout';


export const metadata = {
  title: 'DriveWell: Car-rental',
  icons: {
    icon: [
      '/favicon.ico?=v4',
    ],
    apple: [
      '/apple-touch-icon.png?=v4',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body suppressHydrationWarning={true}>
          <Layout> 
            {children}
          </Layout>
        </body>
    </html>
  )
}

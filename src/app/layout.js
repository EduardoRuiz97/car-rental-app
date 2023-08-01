import '../styles/globals.css';
import Layout from '@/components/Layout/Layout';

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

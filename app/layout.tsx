import type React from "react"
import type { Metadata } from "next"
import "@ibm/plex-sans-arabic/css/ibm-plex-sans-arabic-all.min.css"
import "./globals.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/lib/auto-init' // Auto-initialize database on server startup
import { PageLoaderWrapper } from '@/components/page-loader-wrapper'
import { GTMScript } from '@/components/gtm-script'
import { AuthProvider } from '@/hooks/use-auth'


export const metadata: Metadata = {
  title: "مشروع الزهراء السكني - جدة",
  description: "مشروع سكني متميز في حي الزهراء بجدة. أسعار تبدأ من 870,000 ريال. موقع إستراتيجي وتصميم عصري.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Initialize GTM DataLayer only */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGMC6KSC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GTMScript />
        <AuthProvider>
          <PageLoaderWrapper>
            {children}
          </PageLoaderWrapper>
        </AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}

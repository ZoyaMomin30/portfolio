// import "@/styles/globals.css"
// import { Inter } from "next/font/google"
// import type React from "react" // Import React
// import 'bootstrap/dist/css/bootstrap.min.css'

// const inter = Inter({ subsets: ["latin"] })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

// export const metadata = {
//       generator: 'v0.dev'
//     };
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zoya Momin",
  description: "Created with v0",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


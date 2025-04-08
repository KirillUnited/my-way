import "@/styles/globals.css";
import { Navbar } from "@/components/navbar"

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar"
import { Button } from "@heroui/button";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "lucide-react";

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <div className="p-4 bg-gray-900"><Button as={Link} color="primary" href="/"><ArrowLeftCircleIcon/>HOME PAGE</Button></div>
        {children}
      </body>
    </html>
  )
}
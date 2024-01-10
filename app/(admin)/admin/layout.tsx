import AdminSidebar from "@/components/admin-sidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/globals.css";
import { Providers } from "@/components/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Portfolio Dashboard",
  description: "Admin site",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <AdminSidebar />
          <main className="p-4 md:ml-48 md:p-8">{children}</main>
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

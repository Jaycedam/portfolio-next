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
      <body className="md:grid md:grid-cols-[14rem_1fr] md:gap-4">
        <Providers>
          <AdminSidebar />
          <main className="px-4 pb-16">{children}</main>
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

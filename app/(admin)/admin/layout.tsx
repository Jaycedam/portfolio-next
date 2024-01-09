import AdminSidebar from "@/components/admin-sidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/globals.css";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "Portfolio Dashboard",
  description: "Admin site",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <AdminSidebar />
          <main className="ml-48 p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

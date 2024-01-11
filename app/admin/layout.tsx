import AdminSidebar from "@/components/admin-sidebar";

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
    <div className="md:grid md:grid-cols-[auto_1fr] md:gap-8">
      <AdminSidebar />
      <main>{children}</main>
    </div>
  );
}

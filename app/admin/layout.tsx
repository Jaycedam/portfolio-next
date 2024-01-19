import AdminSidebar from "@components/admin-sidebar";

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
    <div className="space-y-16 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:space-y-0">
      <AdminSidebar />
      <section className="overflow-x-hidden">{children}</section>
    </div>
  );
}

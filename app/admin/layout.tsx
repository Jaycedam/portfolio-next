import AdminSidebar from "@components/admin-sidebar";

export const metadata = {
  title: "Admin - Jordan Cortés",
  description: "Admin site",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // checks if user is authenticated, else redirect to 401
  return (
    <div className="space-y-16 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:space-y-0">
      <AdminSidebar />
      {children}
    </div>
  );
}

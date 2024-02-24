import AdminNav from "@/components/admin-nav";

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
    <div className="space-y-16">
      <AdminNav />
      {children}
    </div>
  );
}

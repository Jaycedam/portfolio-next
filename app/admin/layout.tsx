import AdminSidebar from "@/components/admin-sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-8 md:p-8">
      <AdminSidebar />
      <section className="w-full">{children}</section>
    </main>
  );
}

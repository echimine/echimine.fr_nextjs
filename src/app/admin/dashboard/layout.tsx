import { AppSidebar } from '@/components/commons/navigations/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { HydrateProjects } from '@/app/components/hydrate-zustand-client/HydrateProjects';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch(`${process.env.API_URL}/projects`);
  const projects = await res.json();

  return (
    <SidebarProvider>
      <HydrateProjects projects={projects.data} />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}

import type { Metadata } from 'next';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/commons/Admin/Menus/SideBar';
import { Typographie } from '../components/Typographie';
export const metadata: Metadata = {
  title: 'ADMIN | ECHIMINE',
  description: 'Echimine Admin Area',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col">
        <header className="w-full">
          <Typographie variant="h1" component="h1" weight="black">
            ECHIMINE
          </Typographie>
        </header>
        <main className="w-full">
          {/* <SidebarTrigger /> */}
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

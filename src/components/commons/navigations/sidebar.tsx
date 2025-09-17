'use client';

import Link from 'next/link';
import { Folder, ChevronRight } from 'lucide-react';
import { useProjectStore } from '@/app/stores/call-api-sell-events';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';

const general = [{ title: 'Dashboard', url: '/admin/dashboard', icon: Folder }];

export function AppSidebar() {
  const projects = useProjectStore((s) => s.projects);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Général</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {general.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Folder className="mr-2 h-4 w-4" />
                      <span>Projets</span>
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-4">
                      {projects.length > 0 ? (
                        projects.map((project) => (
                          <SidebarMenuItem key={project.id}>
                            <SidebarMenuButton asChild>
                              <Link
                                href={`/admin/dashboard/projets/${project.slug}`}
                              >
                                <span>{project.name}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))
                      ) : (
                        <SidebarMenuItem>
                          <span className="text-muted-foreground text-sm">
                            Aucun projet
                          </span>
                        </SidebarMenuItem>
                      )}
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

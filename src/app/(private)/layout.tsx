import { PropsWithChildren } from 'react';

import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';

import { Navbar } from '@ui-core/components/server/navbars/navbar';

export default function PrivateLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <DashboardLayout
      headerContent={<Navbar />}
      sidebarContent={<div>Sidebar</div>}
    >
      {children}
    </DashboardLayout>
  );
}

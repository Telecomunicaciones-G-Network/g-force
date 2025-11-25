import type { PropsWithChildren } from 'react';

import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';

import { getAuthDataAction } from '@ui-auth/actions/get-auth-data.action';

import { Navbar } from '@ui-core/components/server/navbars/navbar';
import { Sidebar } from '@ui-core/components/server/sidebars/sidebar';

import { AuthProvider } from '@ui-auth/providers/auth-provider/auth.provider';

export default async function PrivateLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const authData = await getAuthDataAction();

  return (
    <AuthProvider token={authData?.token ?? null} user={authData?.user ?? null}>
      <DashboardLayout
        headerContent={<Navbar hideUserActions />}
        sidebarContent={<Sidebar />}
      >
        {children}
      </DashboardLayout>
    </AuthProvider>
  );
}

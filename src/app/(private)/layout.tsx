import type { PropsWithChildren } from 'react';

import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';

import { getAuthDataAction } from '@ui-auth/actions/get-auth-data.action';

import { Navbar } from '@ui-core/components/server/navbars/navbar';

import { AuthProvider } from '@ui-auth/providers/auth-provider/auth.provider';

export default async function PrivateLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const authData = await getAuthDataAction();

  return (
    <AuthProvider token={authData?.token ?? null} user={authData?.user ?? null}>
      <DashboardLayout
        headerContent={<Navbar />}
        sidebarContent={<div>Sidebar</div>}
      >
        {children}
      </DashboardLayout>
    </AuthProvider>
  );
}

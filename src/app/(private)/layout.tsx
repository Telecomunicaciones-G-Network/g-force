import type { PropsWithChildren } from 'react';

import { DashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout';

import { getAuthDataAction } from '@ui-auth/actions/get-auth-data.action';

import { Navbar } from '@ui-core/components/server/navbars/navbar';
import { Sidebar } from '@ui-core/components/server/sidebars/sidebar';

import { AuthProvider } from '@ui-auth/providers/auth-provider/auth.provider';

import { SocketProvider } from '@socketio/providers/socket.provider';

import { socketConfig } from '@ui-core/config/socket.config';

export default async function PrivateLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const authData = await getAuthDataAction();

  return (
    <AuthProvider token={authData?.token ?? null} user={authData?.user ?? null}>
      <SocketProvider config={socketConfig} token={authData?.token ?? null}>
        <DashboardLayout
          headerContent={
            <Navbar hideNotificationsButton hideSearchGlobalInput />
          }
          sidebarContent={<Sidebar />}
        >
          {children}
        </DashboardLayout>
      </SocketProvider>
    </AuthProvider>
  );
}

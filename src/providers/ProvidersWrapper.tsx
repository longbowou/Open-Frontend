import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/auth/providers/JWTProvider';
import {
  LayoutProvider,
  LoadersProvider,
  MenusProvider,
  SettingsProvider,
  SnackbarProvider,
  TranslationProvider
} from '@/providers';
import { HelmetProvider } from 'react-helmet-async';
import { UserProvider } from '@/pages/UserProvider.tsx';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <AuthProvider>
          <UserProvider>
            <SettingsProvider>
              <TranslationProvider>
                <HelmetProvider>
                  <LayoutProvider>
                    <LoadersProvider>
                      <MenusProvider>{children}</MenusProvider>
                    </LoadersProvider>
                  </LayoutProvider>
                </HelmetProvider>
              </TranslationProvider>
            </SettingsProvider>
          </UserProvider>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export { ProvidersWrapper };

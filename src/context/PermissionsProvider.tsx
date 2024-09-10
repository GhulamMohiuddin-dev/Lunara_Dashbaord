import React, { createContext, useContext } from 'react';

interface Permissions {
  canViewSidebar: boolean;
  canViewHeader: boolean;
  canViewChart: boolean;
  canViewDataTable: boolean;
}

interface PermissionsProviderProps {
  permissions: Permissions;
  children: React.ReactNode;
}

const PermissionsContext = createContext<Permissions | null>(null);

export const usePermissions = () => {
  return useContext(PermissionsContext);
};

export const PermissionsProvider: React.FC<PermissionsProviderProps> = ({ permissions, children }) => {
  return <PermissionsContext.Provider value={permissions}>{children}</PermissionsContext.Provider>;
};

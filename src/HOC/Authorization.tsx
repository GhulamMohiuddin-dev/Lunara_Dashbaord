import React, { useEffect, useState } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { PermissionsProvider } from '../context/PermissionsProvider';
import { permissionsConfig, Role } from '../config/permissions';

interface Permissions {
  canViewSidebar: boolean;
  canViewHeader: boolean;
  canViewChart: boolean;
  canViewDataTable: boolean;
}

const withAuthorization = (WrappedComponent: NextComponentType<NextPageContext>, role: Role) => {
  return (props: any) => {
    const [userPermissions, setUserPermissions] = useState<Permissions | null>(null);

    useEffect(() => {
      const allowedComponents = permissionsConfig[role];

      const permissions: Permissions = {
        canViewSidebar: allowedComponents.includes('Sidebar'),
        canViewHeader: allowedComponents.includes('Header'),
        canViewChart: allowedComponents.includes('CustomChart'),
        canViewDataTable: allowedComponents.includes('DataTable'),
      };

      setUserPermissions(permissions);
    }, [role]);

    if (!userPermissions) {
      return <div>Loading...</div>;
    }

    return (
      <PermissionsProvider permissions={userPermissions}>
        <WrappedComponent {...props} />
      </PermissionsProvider>
    );
  };
};

export default withAuthorization;

import React from 'react';
import { usePermissions } from '../context/PermissionsProvider';

const withPermissions = (Component: React.FC, componentName: string) => {
  return (props: any) => {
    const permissions = usePermissions();

    if (!permissions) {
      return null;
    }

    const canView = (() => {
      switch (componentName) {
        case 'Sidebar':
          return permissions.canViewSidebar;
        case 'Header':
          return permissions.canViewHeader;
        case 'Chart':
          return permissions.canViewChart;
        case 'DataTable':
          return permissions.canViewDataTable;
        default:
          return false;
      }
    })();

    return canView ? <Component {...props} /> : null;
  };
};

export default withPermissions;

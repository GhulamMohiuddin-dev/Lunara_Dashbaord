export type Role = 'admin' | 'user' | 'guest';

export const permissionsConfig: Record<Role, string[]> = {
  admin: ['Sidebar', 'Header', 'CustomChart', 'DataTable'],
  user: ['Sidebar', 'Chart'],
  guest: ['Sidebar'],
};

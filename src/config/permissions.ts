export type Role = 'admin' | 'user' | 'guest';

export const permissionsConfig: Record<Role, string[]> = {
  admin: ['Sidebar', 'Header', 'CustomChart', 'CustomTable'],
  user: ['Sidebar', 'Chart'],
  guest: ['Sidebar'],
};

import {  DASHBOARD, DIRECTORY, PROFILE } from "../constants/routes";

export interface IRoute {
  path: string;
  fullUrl: string
}


export interface SideNavItem {
  title: string,
  icon: string,
  route?: string,
  isActive: boolean,
  options?: Array<any>
}







export const sideNavList: SideNavItem[] = [
  { title: 'Home', icon: 'home', isActive: true, route: DASHBOARD.fullUrl },
  { title: 'My Profile', icon: 'person', isActive: true, route: PROFILE.fullUrl },
  { title: 'Directory', icon: 'description', isActive: true, route: DIRECTORY.fullUrl },
  { title: 'Enterpreneurship Program', icon: 'person', options: [{ subTitle: 'Explore', subicon: 'horizontal_rule' }], isActive: true, route: 'dashboar' },
  { title: 'My Links', icon: 'grid_view', options: [{ subTitle: 'Insurance Verification Details', subicon: 'checklist' }], isActive: true, route: 'dashboar' },
  { title: 'Finance', icon: 'payments', options: [], isActive: true, route: 'dashboar' },
  { title: 'Reviews', icon: 'grid_view', options: [], isActive: true, route: 'dashboar' },
  { title: 'Refer a Friend', icon: 'groups', options: [], isActive: true, route: 'dashboar' },
  { title: 'Freshers Training', icon: 'school', options: [], isActive: true, route: 'dashboar' },
  { title: 'Training', icon: 'school', options: [], isActive: true, route: 'dashboar' },
  { title: 'Assests Inventory', icon: 'science', options: [], isActive: true, route: 'dashboar' },
  { title: 'Attendance', icon: 'schedule', options: [], isActive: true, route: 'dashboar' },
  { title: 'Leave', icon: 'calendar_today', options: [], isActive: true, route: 'dashboar' },
  { title: 'Tickets', icon: 'view_day', options: [], isActive: true, route: 'dashboar' },
  { title: 'DSR', icon: 'calendar_today', options: [], isActive: true, route: 'dashboar' },
  { title: 'Projects', icon: 'view_day', isActive: true, route: 'dashboar' },
  { title: 'Expense', icon: 'monetization_on', isActive: false, },
  { title: 'Announcements', icon: 'campaign', isActive: false, },
  { title: 'Travels', icon: 'flight', isActive: false, },
  { title: 'iconut', icon: 'iconut', isActive: true, route: 'dashboar' },
];

export const profileMenuData = [
  { title: 'My Profile', icon: 'person_filled' },
  { title: 'Change Password', icon: 'key' },
  { title: 'Sign Out', icon: 'iconut' },
];





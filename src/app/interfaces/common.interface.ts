import { DASHBOARD, DIRECTORY, PROFILE } from "../constants/routes";

export interface IRoute {
  path: string;
  fullUrl: string;
}

export interface SideNavItem {
  title: string;
  icon: string;
  route?: string;
  isActive: boolean;
  options?: Array<any>;
}

export const sideNavList: SideNavItem[] = [
  { title: "Home", icon: "home", isActive: true, route: "DASHBOARD" },
  { title: "My Profile", icon: "person", isActive: true, route: "PROFILE" },
  {
    title: "Directory",
    icon: "description",
    isActive: true,
    route: "DIRECTORY",
  },
  {
    title: "Enterpreneurship Program",
    icon: "person",
    options: [
      {
        subTitle: "Explore",
        subicon: "horizontal_rule",
        route: "ENTREPRENEURSHIP_PROGRAM",
      },
    ],
    isActive: true,
  },
  {
    title: "My Links",
    icon: "grid_view",
    options: [
      {
        subTitle: "Insurance Verification Details",
        subicon: "checklist_rtl",
        route: "INSURANCE_VERIFICATION",
      },
      {
        subTitle: "Policy Documents",
        subicon: "description",
        route: "POLICY_DOCUMENTS",
      },
      {
        subTitle: "Holiday Calendar",
        subicon: "calendar_today",
        route: "HOLIDAY_CALENDAR",
      },
    ],
    isActive: true,
  },
  {
    title: "Finance",
    icon: "payments",
    options: [
      {
        subTitle: "Salary Slip",
        subicon: "horizontal_rule",
        // route: "SALARY_SLIP",
        link: "https://hrms.easysourceindia.com/Payroll/",
      },
      {
        subTitle: "Form 16",
        subicon: "horizontal_rule",
        // route: "FORM_16",
        link: "https://hrms.easysourceindia.com/Payroll/",
      },
      {
        subTitle: "Investment Declaration",
        subicon: "horizontal_rule",
        // route: "INVESTMENT_DECLARATION",
        link: "https://hrms.easysourceindia.com/Payroll/",
      },
    ],
    isActive: true,
  },
  { title: "Reviews", icon: "grid_view", options: [

    {
      subTitle: "My Performance",
      subicon: "horizontal_rule",
      route: "REVIEWS",
      // link: "https://hrms.easysourceindia.com/Payroll/",
    },
  ], isActive: true },
  { title: "Refer a Friend", icon: "groups", options: [], isActive: true },
  { title: "Freshers Training", icon: "school", options: [], isActive: true },
  { title: "Training", icon: "school", options: [], isActive: true },
  { title: "Assests Inventory", icon: "science", options: [], isActive: true },
  { title: "Attendance", icon: "schedule", options: [], isActive: true },
  { title: "Leave", icon: "calendar_today", options: [], isActive: true },
  { title: "Tickets", icon: "view_day", options: [], isActive: true },
  { title: "DSR", icon: "calendar_today", options: [], isActive: true },
  { title: "Projects", icon: "view_day", isActive: true },
  { title: "Expense", icon: "monetization_on", isActive: false },
  { title: "Announcements", icon: "campaign", isActive: false },
  { title: "Travels", icon: "flight", isActive: false },
  { title: "Logout", icon: "logout", isActive: true },
];

export const profileMenuData = [
  { title: "My Profile", icon: "person_filled" },
  { title: "Change Password", icon: "key" },
  { title: "Sign Out", icon: "logout" },
];

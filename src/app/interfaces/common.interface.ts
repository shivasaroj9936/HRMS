

export interface IRoute {
  path: string;
  fullUrl: string;
}
export interface route {
  [index: string] : Array <{ key: string; value: string; }>;
}

export interface SideNavItem {
  title: string;
  icon: string;
  route?: string;
  isActive: boolean;
  options?: Array<any>;
  subMenuClicked?:boolean
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
    subMenuClicked:false,
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
    subMenuClicked:false,
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
    subMenuClicked:false,
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
  {
    title: "Reviews", icon: "grid_view", options: [

      {
        subTitle: "My Performance",
        subicon: "horizontal_rule",
        route: "REVIEWS",
        // link: "https://hrms.easysourceindia.com/Payroll/",
      },
    ], isActive: true
  },
  {
    title: "Refer a Friend", icon: "groups", options: [
      {
        subTitle: "Job Openinings",
        subicon: "work",
        route: "JOB_OPENINGS",
      }, {
        subTitle: "Referral List",
        subicon: "list_alt",
        route: "REFERRAL_LIST",
      }
    ], isActive: true
  },
  {
    title: "Recruitment", icon: "check_box", options: [

      {
        subTitle: "My Interviews",
        subicon: "horizontal_rule",
        route: "MY_INTERVIEWS",
        // link: "https://hrms.easysourceindia.com/Payroll/",
      },
    ], isActive: true
  },
  {
    title: "Freshers Training", icon: "school", options: [
      {
        subTitle: "My Training",
        subicon: "horizontal_rule",
        route: "MY_TRAININGS",
      },

    ], isActive: true
  },
  {
    title: "Training", icon: "school", options: [
      {
        subTitle: "Upcoming Training",
        subicon: "horizontal_rule",
        route: "UPCOMING_TRAINING",

      },
      {
        subTitle: "Ongoing Training",
        subicon: "horizontal_rule",
        route: "ONGOING_TRAININGS",

      },
      {
        subTitle: "My Training",
        subicon: "horizontal_rule",
        route: "MY_INTERNAL_TRAINING",

      },
      {
        subTitle: "Requested Training",
        subicon: "horizontal_rule",
        route: "REQUESTED_TRAININGS",

      },
    ], isActive: true
  },
  {
    title: "Assests Inventory", icon: "science", options: [

      {
        subTitle: "My Assets Inventory",
        subicon: "computer",
        route: "MY_ASSET_INVENTORY",

      },
      {
        subTitle: "Request Assets",
        subicon: "request_quote",
        route: "REQUEST_ASSETS",

      },
      {
        subTitle: "Assets Declaration",
        subicon: "error",
        route: "ASSETS_DECLARATION",

      },

    ], isActive: true
  },
  {
    title: "Attendance", icon: "schedule", options: [

      {
        subTitle: "Attendance Calendar",
        subicon: "horizontal_rule",
        route: "ATTENDANCE_CALENDAR",

      },
      {
        subTitle: "Manual Punch",
        subicon: "horizontal_rule",
        route: "MANUAL_PUNCH",

      }, {
        subTitle: "Punch Log",
        subicon: "horizontal_rule",
        route: "PUNCH_LOG",

      },

    ], isActive: true
  },
  {
    title: "Leave", icon: "calendar_today", options: [

      {
        subTitle: "My Leave",
        subicon: "horizontal_rule",
        route: "MY_LEAVE",

      },
      {
        subTitle: "Floating Leave",
        subicon: "horizontal_rule",
        route: "FLOATING_LEAVE",
      },


    ], isActive: true
  },
  {
    title: "Tickets", icon: "view_day", options: [
      {
        subTitle: "Tickets",
        subicon: "horizontal_rule",
        route: "TICKETS",
      },

    ], isActive: true
  },
  {
    title: "DSR", icon: "calendar_today", options: [
      {
        subTitle: "MY DSR",
        subicon: "checklist",
        route: "MY_DSR",
      },
    ], isActive: true
  },
  {
    title: "Projects", icon: "view_day", isActive: true, route:'PROJECT'  },
  { title: "Expense", icon: "monetization_on", isActive: false },
  { title: "Announcements", icon: "campaign", isActive: false },
  { title: "Travels", icon: "flight", isActive: false },
  {
    title: "Logout", icon: "logout", isActive: true,
    route: "ACCOUNT",

  },
];

export const profileMenuData = [
  { title: "My Profile", icon: "person_filled" },
  { title: "Change Password", icon: "key" },
  { title: "Sign Out", icon: "logout" },
];


export const MYPERFORMACE_VALUE = {
  AWARDS_VALUE: 'AWARDS',
  HONOURS_VALUE: 'HONOURS',
  NULL_VALUE: 'N/A',
  TILL_NOW_VALUE: 'Till Now',
  JANUARY_LABEL: 'Jan',
  EMPLOYEE_NAME: 'Harshit Kumar Jain',
  EMPLOYEE_DESIGNATION: 'Software Engineer (Angular)',
  TECHNICAL_LABEL: 'Technical Skills',
  OWNERSHIP_LABEL: 'Ownership of Delivery',
  TEAMWORK_LABEL: 'Teamwork',
  PROCESS_LABEL: 'Process Adherence',
  YEAR_SHORTFORM: 'YRS',
  button: 'Monthly Rating',
  calendar: 'Monthly Performance Calendar',
  select_year: 'Select Year  : ',
  tech_total:5,
  ownership_total:5,
  teamwork_total:5,
  Process_total:5,

  reviewData: [
    {
      year: 2022,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        {
          month: 'July',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 4,
          ownership_rating: 5,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'August', isRating: false },
        {
          month: 'September',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 5,
          ownership_rating: 4,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
    {
      year: 2023,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        { month: 'July', isRating: false },
        { month: 'August', isRating: false },
        { month: 'September', isRating: false },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
  ],
  project_name: 'PROJECT NAME: ',
  project_tech: 'Training Project React JS',
  reviewed_by: 'REVIEWED BY: ',
  pm_name: 'Rabban Ahmad (Project Manager)',
};



export interface FRESHER_TRAINING_ITEM {
  technology: string,
  status: string,
  start_date: string,
  end_date: string,
  mode: string,
  attendees?: string
  success_btn_label: string,
  detail_btn_label: string
  route: string,
}

export const FRESHERS_TRAININGS: FRESHER_TRAINING_ITEM[] = [
  {
    technology: 'Angular Training Feb- 2022',
    status: 'completed',
    start_date: 'Feb-28-2022',
    end_date: 'Apr-02-2022',
    mode: 'Online',
    success_btn_label: 'Feedback',
    detail_btn_label: 'View Details',
    route: 'TRAINING_DETAILS'
  },
  {
    technology: 'HTML/CSS/UI',
    status: 'completed',
    start_date: 'Feb-14-2022',
    end_date: 'Feb-25-2022',
    mode: 'Offline',
    success_btn_label: 'Feedback',
    detail_btn_label: 'View Details',
    route: 'TRAINING_DETAILS'

  },
  {
    technology: 'HTML/CSS/UI',
    status: 'completed',
    start_date: 'Feb-14-2022',
    end_date: 'Feb-25-2022',
    mode: 'Offline',
    success_btn_label: 'Feedback',
    detail_btn_label: 'View Details',
    route: 'TRAINING_DETAILS'

  }
]
export const TRAININGS: FRESHER_TRAINING_ITEM[] = [
  {
    technology: 'Angular Training Feb- 2022',
    status: 'enrolled',
    start_date: 'Feb-28-2022',
    end_date: 'Apr-02-2022',
    mode: 'Online',
    attendees: 'Angular',
    success_btn_label: 'Cancel Enrollment',
    detail_btn_label: 'View Details',
    route: 'INTERNAL_TRAINING_DETAILS'


  },
  {
    technology: 'HTML/CSS/UI',
    status: 'enrolled',
    start_date: 'Feb-14-2022',
    end_date: 'Feb-25-2022',
    mode: 'Offline',
    attendees: 'Angular',
    success_btn_label: 'Cancel Enrollment',
    detail_btn_label: 'View Details',
    route: 'INTERNAL_TRAINING_DETAILS'


  }
]
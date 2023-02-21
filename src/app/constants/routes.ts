import { IRoute } from "../interfaces/common.interface";

export const ACCOUNT: IRoute = {
  path: "auth",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const ADMIN: IRoute = {
  path: "admin",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LOGIN: IRoute = {
  path: "login",
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const FORGOT_PASSWORD: IRoute = {
  path: "forgot-password",
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const DASHBOARD: IRoute = {
  path: "dashboard",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const PROFILE: IRoute = {
  path: "profile",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};

export const BASIC_INFORMATION: IRoute = {
  path: "basic-information",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const PROFILE_PICTURE: IRoute = {
  path: "profile-picture",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const QULIFICATION: IRoute = {
  path: "qualification",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const SHIFT: IRoute = {
  path: "shift",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const CHANGE_PASSWORD: IRoute = {
  path: "change-password",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};

export const APPRAISAL: IRoute = {
  path: "appraisal",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const DIRECTORY: IRoute = {
  path: "staff-directory",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};

export const MY_LINKS: IRoute = {
  path: "my-links",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const POLICY_DOCUMENTS: IRoute = {
  path: "policy-documents",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const HOLIDAY_CALENDAR: IRoute = {
  path: "holiday-calendar",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const INSURANCE_VERIFICATION: IRoute = {
  path: "insurance-verification",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};

export const FINANCE: IRoute = {
  path: "finance",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const SALARY_SLIP: IRoute = {
  path: "salary-slip",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const FORM_16: IRoute = {
  path: "form-16",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const INVESTMENT_DECLARATION: IRoute = {
  path: "investment-declaration",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};

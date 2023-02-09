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

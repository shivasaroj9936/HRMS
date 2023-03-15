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
// export const LOGOUT: IRoute = {
//   path: "logout",
//   get fullUrl(): string {
//     return `/${ACCOUNT.fullUrl}/${this.path}`;
//   },
// };

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
export const ENTREPRENEURSHIP_PROGRAM: IRoute = {
  path: "entrepreneurship-program",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const REVIEWS: IRoute = {
  path: 'reviews',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_PERFORMANCE: IRoute = {
  path: 'my-performance',
  get fullUrl(): string {
    return `/${REVIEWS.fullUrl}/${this.path}`
  }
}

export const STARTUP: IRoute = {
  path: "startup",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const ADD_PITCH: IRoute = {
  path: "add-pitch",
  get fullUrl(): string {
    return `/${STARTUP.fullUrl}/${this.path}`;
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
export const REFER_CANDIDATE: IRoute = {
  path: 'refer-candidate',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const JOB_OPENINGS: IRoute = {
  path: 'job-openings',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const REFERRAL_LIST: IRoute = {
  path: 'referral-list',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const JOB_DETAILS: IRoute = {
  path: 'job-details',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const FRESHERS: IRoute = {
  path: 'freshers',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  }
}

export const TRAINING_DETAILS:IRoute={
  path:'training-details',
  get fullUrl():string{
    return `/${FRESHERS.fullUrl}/${this.path}`;
  }
}

export const MY_TRAININGS: IRoute = {
  path: 'my-trainings',
  get fullUrl(): string {
    return `/${FRESHERS.fullUrl}/${this.path}`;
  }
}
export const TRAININGS: IRoute = {
  path: 'trainings',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_INTERNAL_TRAINING:IRoute={
  path: 'my-internal-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const ONGOING_TRAININGS:IRoute={
  path: 'ongoing-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const REQUESTED_TRAININGS:IRoute={
  path: 'requested-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const UPCOMING_TRAINING:IRoute={
  path: 'upcoming-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const INTERNAL_TRAINING_DETAILS:IRoute={
  path:'internal-training-details',
  get fullUrl():string{
    return `/${TRAININGS.fullUrl}/${this.path}`
  }
}

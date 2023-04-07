import { route } from "../interfaces/common.interface";
import { ADMIN, DASHBOARD, FRESHERS, INTERNAL_TRAINING_DETAILS, MY_INTERNAL_TRAINING, MY_PERFORMANCE, PROFILE, REVIEWS, TRAININGS, TRAINING_DETAILS } from "./routes";

export const BREADCRUMB: route = {
    'dashboard': [{ key: 'Dashboard', value: DASHBOARD.fullUrl }],

    'admin-profile': [{ key: 'Home', value: DASHBOARD.fullUrl }, { key: 'Profile', value: '' },],
    'edit-profile': [
        { key: 'Home', value: DASHBOARD.fullUrl },
        { key: 'Profile', value: ADMIN.fullUrl },
        { key: 'Edit', value: '' },
    ],
    'change-password': [
        { key: 'Home', value: DASHBOARD.fullUrl },
        { key: 'Profile', value: PROFILE.fullUrl },
        { key: 'change password', value: '' },
    ],

    'my-performance':[
        { key: 'Home', value: DASHBOARD.fullUrl },
        { key: 'reviews', value: REVIEWS.fullUrl },
        { key: 'my-performance', value: MY_PERFORMANCE.fullUrl },
    ],
    'internal-trainiing-details':[
        { key: 'Home', value: DASHBOARD.fullUrl },
        { key: 'trainings', value: TRAININGS.fullUrl },
        { key: 'details', value: INTERNAL_TRAINING_DETAILS.fullUrl },
    ] ,
    'fresher-training-details':[
        { key: 'Home', value: DASHBOARD.fullUrl },
        { key: 'trainings', value: FRESHERS.fullUrl },
        { key: 'details', value: TRAINING_DETAILS.fullUrl },
    ]

}
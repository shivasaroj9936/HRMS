export const QUALIFICATION_TABLE_HEADING = [
    { heading: "Action", key: "action", isSortable: "", type: "action" },
    {
        heading: "School/University", key: "school", isSortable: "isSortable", type: "text",
    },
    {
        heading: "Time Period", key: "time", isSortable: "isSortable", type: "date",
    },
    {
        heading: "Education Level", key: "education", isSortable: "isSortable", type: "text",
    },
];
export const POLICY_DOCUMENTS_TABLE_HEADING = [
    { heading: '#', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Name", key: 'name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Type", key: 'doc_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'File Size', key: 'doc_size', isSortable: '', type: 'text', },
    { heading: 'Last Modified', key: 'last_modification', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
]
export const REFERRAL_LIST_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Candidate Name", key: 'candidate_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Experience", key: 'experience', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Department", key: 'department', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Position', key: 'position', isSortable: '', type: 'text', },
    { heading: 'Date Of Referral', key: 'date_of_referral', isSortable: '', type: 'text', },
    { heading: 'Candidate Status', key: 'candidate_status', isSortable: '', type: 'text', },
    { heading: 'Resume/CV', key: 'action', type: 'action', action: [{}] },
]
export const MY_INTERVIEW_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Training Name", key: 'training_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Timeline to conduct", key: 'timeline_to_conduct', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Requested date", key: 'requested_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Status', key: 'status', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
]

export const TRAING_REQUEST_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Training Name", key: 'training_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Timeline to conduct", key: 'timeline_to_conduct', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Requested date", key: 'requested_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Status', key: 'status', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },

]
export const ASSETDECLARATION_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Employee Id", key: 'emp_id', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Unique Asset Code", key: 'unique_asset_code', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Serial Number", key: 'serial_no', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Model Number", key: 'model_no', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "OS", key: 'os', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "OS Version", key: 'os_version', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Brand", key: 'brand', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Colour", key: 'colour', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Images", key: 'asset_image', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Is Working ?", key: 'device_working_condition', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Added', key: 'added', isSortable: '', type: 'text', },
]

export const ASSET_REQUEST_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request Reason", key: 'request_reason', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Priority", key: 'priority', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request At", key: 'request_at', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Asset Category", key: 'asset_category', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Allocation Type", key: 'allocation_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Company', key: 'company', isSortable: '', type: 'text', },
]

export const ASSET_TABLE_HEADING = [
    { heading: "Asset Name", key: 'asset_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Asset Category", key: 'asset_category', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Company Asset Code", key: 'company_asset_code', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Brand', key: 'brand', isSortable: '', type: 'text', },
    { heading: 'Serial No.', key: 'serial_no', isSortable: '', type: 'text', },
    { heading: 'Model', key: 'model', isSortable: '', type: 'text', },
    { heading: 'Is Working', key: 'is_working', isSortable: '', type: 'text', },
    { heading: 'Company', key: 'company', isSortable: '', type: 'text', },
]

export const MANUAL_PUNCH_TABLE_HEADING = [
    { heading: 'Edit', key: 'edit', isSortable: 'isSortable', type: 'text', },
    { heading: 'Manual Punch Date', key: 'manual_punch_date', isSortable: 'isSortable', type: 'text', },
    { heading: 'In Time', key: 'in_time', isSortable: 'isSortable', type: 'text', },
    { heading: 'On Time', key: 'on_time', isSortable: 'isSortable', type: 'text', },
]
export const PUNCH_LOG_TABLE_HEADING = [
    { heading: 'Name', key: 'name', isSortable: 'isSortable', type: 'text', },
    { heading: 'Punch Time', key: 'punch_time', isSortable: 'isSortable', type: 'text', },
    { heading: 'Direction', key: 'direction', isSortable: 'isSortable', type: 'text', },
]

export const FLOATING_LEAVE_TABLE_HEADING = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Event Name", key: 'event_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Date", key: 'date', isSortable: '', type: 'text', link: 'client-details' },
]
export const LEAVE_DETAIS_TABLE_HEADING = [
    { heading: "Leave Type", key: "leave_type", type: 'text' },
    { heading: "Start Date", key: "start_date", type: 'date' },
    { heading: "End Date", key: "end_date", type: 'date' },
    { heading: "Applied On", key: "applied_on", type: 'date' },
    { heading: "Leave Duration", key: "leave_duration", type: 'text' },
    { heading: "Uploaded Document	", key: "uploaded_document", type: 'doc' },
]

export const MY_LEAVE_TABLE_HEADING = [
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
    { heading: "Leave Type", key: 'leave_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request From", key: 'start_date', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Request To", key: 'end_date', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Applied On", key: 'applied_on', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Level 1", key: 'level_1', isSortable: '', type: 'text', link: 'client-details', class: 'red' },
    { heading: "Level 2", key: 'level_2', isSortable: '', type: 'text', link: 'client-details', class: 'red' },
]
export const TICKET_TABLE_HEADING = [
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
    { heading: "Ticket Code", key: 'ticket_code', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Priority", key: 'priority', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Employee", key: 'employee', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Subject", key: 'subject', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Date", key: 'date', isSortable: '', type: 'text', link: 'client-details', class: 'red' },
]

export const MY_DSR_TABLE_HEADING = [
    { heading: "Sr.No.", key: "s_no", isSortable: "yes", type: "text" },
    {
        heading: "Emp Name", key: "emp_name", isSortable: "yes", type: "text", link: "client-details",
    },
    {
        heading: "Email", key: "email", isSortable: "", type: "text", link: "client-details",
    },
    {
        heading: "Employment Type", key: "employment_type", isSortable: "yes", type: "text", link: "client-details",
    },
    {
        heading: "Date", key: "date", isSortable: "yes", type: "date", link: "client-details",
    },
    {
        heading: "Total(Logged Hr)", key: "logged_hr", isSortable: "yes", type: "text", link: "client-details",
    },
    { heading: "Final Approval", key: "action", type: "action", action: [{}] },
]
export const MY_DSR_DETAILS_TABLE_HEADING = [
    { heading: "Sr. No.", key: 's_no', isSortable: '', type: 'text', },
    { heading: "Project Name", key: 'project_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "D s r", key: 'dsr', isSortable: '', type: 'html', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "P M Approval", key: 'pm_approval', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "A M Approval", key: 'am_approval', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'R M Approval	', key: 'rm_approval', type: 'text', },
    { heading: 'Final Approval', key: 'final_approval', type: 'text', },
    { heading: 'Logged Hrs', key: 'logged_hr', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
]
export const PROJECT_LIST_TABLE_HEADING = [
    { heading: 'Project Name', key: 'action', type: 'action', action: [{}] },
    { heading: "Billing Type	Resources", key: 'billing_type_resource', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "	Hrs.", key: 'hrs', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Total Milestone", key: 'total_milestone', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Delivered", key: 'delivered', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Pending", key: 'pending', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "% Complete", key: 'compete_status', isSortable: '', type: 'text', link: 'client-details' },
]
export const PLANNED_DELIVERIES_TABLE_HEADING = [
    { heading: "Milestones", key: 'milestones', isSortable: '', type: 'text', },
    { heading: "Release", key: 'release', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Description", key: 'description', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Into QA Date", key: 'into_qa_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Internal Demo Date", key: 'internal_demo_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Release Date", key: 'release_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Delivery Status", key: 'delivery_status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "SignOff Status", key: 'signOff_status', isSortable: '', type: 'text', link: 'client-details' },
]
export const PROJECT_TEAM_DETAILS_TABLE_HEADING = [
    { heading: "Name", key: 'name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Allocated As", key: 'allocated_as', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Department", key: 'department', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Alloc Hrs", key: 'alloc_hrs', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Exp", key: 'exp', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Relevant Exp", key: 'relevant_exp', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Hrs Log", key: 'hrs_log', isSortable: '', type: 'text', link: 'client-details' },
]
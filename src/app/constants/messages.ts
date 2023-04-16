export const VALIDATION_MESSAGES = {
    'confirm password': {
      matchPassword: 'Confirm password does not matches with new password',
    },
  };
export const toTitleCase = (str:string) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  export const TOAST_MESSAGES = {
    LOGIN_SUCCESS: "Logged In Successfully",
    CHANGE_PASSWORD_SUCCESS: "Password Changed Successfully",
    LOGOUT_SUCCESS: "Logged Out Successfully",
    PASSWORD_CHANGE_SUCCESS: "Password reset successfull",
    NO_INTERNET: "Please check your internet connection and try again later.",
    TIMEOUT_ERROR: "Your request has been timed out. Please try again!",
    CLIENTS_DELETE_SUCCESS: "Client(s) deleted successfully",
    TOKEN_EXPIRE: "Your session has been expired. Please login again.",
    SELECT_AUDIO_FILE: "Please select an mp3 file to continue",
    SELECT_IMAGE_SCENE:
      "Please select at least one image or a pano image file to continue",
    SELECT_VIDEO_SCENE: "Please select at least one video file to continue",
    FILE_TYPE_ERROR: "You can upload only pdf, docx,  jpg, png files",
    FILE_SIZE_ERROR: "File size should be less than or equal to 12 Mb",
  };
  
  export const POPUP_MESSAGES = {
    ok: "Ok",
    close: "Close",
    confrim: "Confirmation",
    no: "No",
    yes: "Yes",
    cancel: "Cancel",
    save: "Save",
    deleteAllScenes:
      "All your saved scenes will be removed, do you wish to continue?",
    BLOCK: "Block",
    UNBLOCK: "Unblock",
    LOGOUT: "Logout",
    DELETE: "Delete",
    RESTORE: "Restore",
    sendNow: "Send Now",
    deleteNow: "Delete Now",
    passwordResetTitle: "Reset Password",
    passwordResetLink:
      "Password reset link has been sent to registered email id . Please follow the link to reset password .",
    passwordChanged: "Password has been changed successfully.",
    logout: "Confirmation",
    deliveryConfirmation: "Confirm Delivery",
    deleteConfirmation: "Delete Notification",
    deleteUserTitle: "Delete User",
    unblockTitle: "Active User",
    unblockMessage: "Are you sure you want to Activate this user?",
    unblockButton: "Activate",
    blockTitle: "Deactivated User",
    blockMessage: "Are you sure you want to Deactivate this user?",
    blockButton: "Deactivate",
    deleteNotification:
      "Are you sure you want to delete this notification? Once deleted you will not be able to recover it.",
    deleteUser:
      "Are you sure you want to delete this user? Once deleted you will need not be able to undo this action.",
    logoutConfirmation: "Are you sure you want to logout?",
    sendNowMessage:
      "This notification will be sent immediately to selected audience. You will not be able to edit this notification once sent.",
    forgotPasswordTitle:
      "Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password.",
    deleteProperty: "Are you sure you want to delete this ?",
    DELETE_CLIENTS: "Are you sure you want to delete the selected clients ?",
    DELETE_SUB_ADMINS:
      "Are you sure you want to delete the selected sub admins ?",
    DELETE_PROPERTIES:
      "Are you sure you want to delete the selected properties ?",
    DELETE_SHOWCASES: "Are you sure you want to delete the selected showcases ?",
    DELETE_MUSIC:
      "Are you sure you want to delete the selected background music ?",
    DELETE_CLIENTS_SUBUSER:
      "Are you sure you want to delete the selected Sub users ?",
    EDIT_CLIENT_DETAILS: "Edit Client Details",
    EDIT_SUPER_ADMIN_DETAILS: "Edit Super Admin Details",
    EDIT_CLIENT_DETAILS_DESCRIPTION:
      "To edit user details please enter your password below.",
    EDIT_SUPER_ADMIN_DETAILS_DESCRIPTION:
      "To edit super admin details please enter your password below.",
    EDIT_CLIENT_PASSWORD: "Edit Client's Password",
    EDIT_CLIENT_PASSWORD_DESCRIPTION:
      "To edit client's password please enter your password below.",
    BLOCK_PROPERTY: "Are you sure you want to block this property ?",
    UNBLOCK_PROPERTY: "Are you sure you want to unblock this property ?",
    BLOCK_CLIENT: "Are you sure you want to block this client ?",
    UNBLOCK_CLIENT: "Are you sure you want to unblock this client ?",
  
    BLOCK_SUB_ADMIN: "Are you sure you want to block this sub admin ?",
    UNBLOCK_SUB_ADMIN: "Are you sure you want to unblock this sub admin ?",
    ARE_YOU_SURE_RESTORE: "Are you sure to restore this property ?",
    DELTE_DOC_REPO: "Are you sure you want to delete this document repository ?",
  
    BLOCK_USER: "Are you sure you want to block this user?",
    UNBLOCK_USER: "Are you sure you want to unblock this user?",
    BLOCK_CONTENT: "Are you sure you want to lock this ?",
    UNBLOCK_CONTENT: "Are you sure you want to unlock this ?",
    SEND_REPORT: "Are you sure you want to send report ?",
  };
import axios from "axios";

const BASE_URL = "https://mar-backend-production-adf8.up.railway.app/api/admin";

/* Helper: attach token */
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

/* ================= NOTIFICATIONS API ================= */

/**
 * Fetch all admin notifications
 * (shipments + contact messages)
 */
export const fetchAdminNotifications = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/notifications`,
      getAuthHeader()
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data?.message ||
      "Failed to fetch notifications"
    );
  }
};

/**
 * Clear all notifications
 */
export const clearAllNotifications = async () => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/notifications/clear`,
      getAuthHeader()
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data?.message ||
      "Failed to clear notifications"
    );
  }
};

/**
 * Delete a single notification by ID
 */
export const deleteNotification = async (notificationId: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/notifications/${notificationId}`,
      getAuthHeader()
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data?.message ||
      "Failed to delete notification"
    );
  }
};

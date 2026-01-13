import axios from "axios";

const API = axios.create({
  baseURL: "https://mar-backend-production-adf8.up.railway.app/api/client",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

/* =========================
   PROFILE
========================= */
export const getClientProfile = () => API.get("/profile");

export const updateClientProfile = (data: {
  name: string;
  phone: string;
  company: string;
  address: string;
}) => API.put("/profile", data);

/* =========================
   PASSWORD
========================= */
export const changeClientPassword = (data: {
  new_password: string;
  confirm_password: string;
}) => API.put("/change-password", data);


export const getActiveClientShipments = async () => {
  const res = await API.get("/shipments/active");
  return res.data;
};

export const getDeliveredClientShipments = async () => {
  const res = await API.get("/shipments/delivered");
  return res.data;
};
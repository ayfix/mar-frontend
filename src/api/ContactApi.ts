// src/api/contactApi.ts

const API_BASE_URL = "https://mar-backend-production-adf8.up.railway.app/api/user/contact";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const sendContactMessage = async (payload: ContactPayload) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message");
  }

  return data;
};

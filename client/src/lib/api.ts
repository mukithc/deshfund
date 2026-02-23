import axios from 'axios';

// Backend API URL - configurable via VITE_API_URL env var (for AWS deployment)
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data: { email: string; password: string; fullName: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
};

// Campaign API
export const campaignAPI = {
  getActiveCampaigns: () => api.get('/campaigns/public/active'),
  getCampaignById: (id: number) => api.get(`/campaigns/public/${id}`),
  getCampaignsByCategory: (category: string) =>
    api.get(`/campaigns/public/category/${category}`),
  createCampaign: (data: any) => api.post('/campaigns', data),
  getMyCampaigns: () => api.get('/campaigns/my-campaigns'),
};

// Investment API
export const investmentAPI = {
  createInvestment: (data: { campaignId: number; amount: number; paymentMethod: string }) =>
    api.post('/investments', data),
  getMyInvestments: () => api.get('/investments/my-investments'),
};

// AI API
export const aiAPI = {
  getRecommendations: (interests?: string) =>
    api.get('/ai/recommendations', { params: { interests } }),
  assessRisk: (campaignId: number) =>
    api.get(`/ai/risk-assessment/${campaignId}`),
  detectFraud: (campaignId: number) =>
    api.get(`/ai/fraud-detection/${campaignId}`),
  getCampaignInsights: (campaignId: number) =>
    api.get(`/ai/insights/${campaignId}`),
  analyzeCampaignDescription: (description: string) =>
    api.post('/ai/analyze-description', { description }),
};

export default api;

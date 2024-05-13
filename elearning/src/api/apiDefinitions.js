import { api } from "./apiBase";

const apiDefinitions = {
  //get all courses
  getAllCourseList: async function () {
    return await api.get(`courses/get-all-courses`);
  },

  //get all transactions
  getAllTransactions: async function () {
    return await api.get(`stripe/payments`);
  },

  //make a payment
  createPayment: async function () {
    return await api.post(`stripe/charge`);
  },
};

export default apiDefinitions;

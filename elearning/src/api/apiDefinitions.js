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

  //get all progress
  getAllProgress: async function () {
    return await api.get(`learnerProgress/getAllProgress`);
  },

  //get all progress by course
  getAllProgressByCourse: async function () {
    return await api.get(`learnerProgress/getCourseIdCounts`);
  },

  //get all progress by students
  getAllProgressByStudent: async function () {
    return await api.get(`learnerProgress/getUserIdCounts`);
  },
};

export default apiDefinitions;

import { api } from "./apiBase";

const apiDefinitions = {
  //get all courses
  getAllCourseList: async function () {
    return await api.get(`courses/get-all-courses`);
  },

  //get all approved courses
  getAllAprovedCourses: async function () {
    return await api.get(`courses/get-approved-courses`);
  },

  //get course by id
  getCourseById: async function (id) {
    return await api.get(`courses/get-course-by-code/${id}`);
  },

  //get course content by id
  getCourseContentById: async function (id) {
    return await api.get(`content/get-course-content/${id}`);
  },

  //add enrolment
  postEnrollToCourse: async function (payload) {
    return await api.post(`enrolment/addEnrolment`, payload);
  },

  //get enrolments by user id
  getEnrolmentsByUserId: async function (id) {
    return await api.get(`enrolment/getEnrolmentByUserId/${id}`);
  },

  //delete enrolment by id
  deleteEnrolmentById: async function (id) {
    return await api.delete(`enrolment/deleteEnrolment/${id}`);
  },

  //update Enrolment by userid and courseid
  putEnrolment: async function (userId, courseId, payload) {
    return await api.put(`enrolment/updateEnrolmentStatus/${userId}/${courseId}`, payload);
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

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

  //get all courses by instructor id
  getCoursesByInstructor: async function (instructorId) {
    return await api.get(`courses/Get-all-courses-by-conductorId/${instructorId}`);
  },

  //add course 
  postCourseContent: async function (payload) {
    return await api.post(`courses/add-course`, payload);
  },

  //getCourseContentById
  getSingleCourseContentById: async function (id) {
    return await api.get(`content/get-course-content-By-ID/${id}`);
  },

  //add course content
  postCourseContent: async function (id,payload) {
    return await api.post(`content/add-course-content/${id}`, payload);
  },

  //update course content
  putCourseContent: async function (id, payload) {
    return await api.put(`content/update-course-content/${id}`, payload);
  },

  //delete course content
  deleteCourseContent: async function (id) {
    return await api.delete(`content/delete-course-content/${id}`);
  },
  
};

export default apiDefinitions;

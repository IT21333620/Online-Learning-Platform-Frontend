import { api } from "./apiBase";

const apiDefinitions = {

    //get all courses
    getAllCourseList: async function(){
        return await api.get(`courses/get-all-courses`)
    },
};

export default apiDefinitions;
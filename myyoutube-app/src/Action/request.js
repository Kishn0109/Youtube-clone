import axios from "axios"

export const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyDNJC4bj65e_ldBAhqsdmmyK1VkCltxFsY"
    }
})
//AIzaSyDNJC4bj65e_ldBAhqsdmmyK1VkCltxFsY


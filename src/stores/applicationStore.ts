import { ref } from "vue";
import { defineStore } from "pinia";

export const useApplicationStore = defineStore('applicationStore', () => {
    const onRequesting = ref(true); // 网络请求状态 
    const onlineStatus = ref(false); // 用户在线状态
    return ({ onRequesting, onlineStatus });
});
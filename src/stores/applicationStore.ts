import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage, useToggle } from "@vueuse/core";
import { ApplicationStoreType } from "@/types/applicationStoreType";

export const useApplicationStore = defineStore('applicationStore', (): ApplicationStoreType => {
    const onRequesting = ref(true); // 网络请求状态
    const onlineStatus = ref(false); // 用户在线状态

    const username = useStorage('store-cqcfe-username', "");
    const password = useStorage('store-cqcfe-password', "");
    const [moreShowStatus, toggleMoreShow] = useToggle(false);
    return ({ onRequesting, onlineStatus, username, password, moreShowStatus, toggleMoreShow });
});

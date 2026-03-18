import { Ref } from "vue";

export interface ApplicationStoreType {
    username: Ref<string>;
    password: Ref<string>;
    onRequesting: Ref<boolean>;
    onlineStatus: Ref<boolean>;
    moreShowStatus: Ref<boolean>;
    toggleMoreShow: (value?: boolean | undefined) => boolean
}
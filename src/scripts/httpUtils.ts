import { showToasts } from "./utils";
import { RequestModel } from "@/types";
import { ToastType } from "@/enums/ToastType";
import { useApplicationStore } from "@/stores/applicationStore";

const serverAddress = "https://login.cqcfe.com:802"; // 校园网服务器端配置

/**
 * 登录到校园网
 * @param username 登录学号
 * @param password 登录密码
 */
export const sendLoginRequest = (username: string, password: string) => {
    if (username.trim() === "" || password.trim() === "") {
        return showToasts(ToastType.ERROR, "学号或密码不能为空");
    }
    createRequestScript(`${serverAddress}/eportal/portal/login?callback=handleLoginRequest&login_method=1&user_account=${username}&user_password=${password}`);
    window.handleLoginRequest = (data: RequestModel) => {
        if (data.result === 1 && !data.ret_code) {
            sendGetStatusRequest();
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            showToasts(ToastType.SUCCESS, "已登录到校园网");
        } else showToasts(ToastType.ERROR, data.msg);
    }
}

/**
 * 注销连接状态
 */
export const sendLogoutRequest = () => {
    createRequestScript(`${serverAddress}/eportal/portal/mac/unbind?callback=handleLogoutRequest`);
    window.handleLogoutRequest = (data: RequestModel) => {
        if (data.result === 1 && !data.ret_code) {
            showToasts(ToastType.SUCCESS, "注销连接状态成功");
            setTimeout(() => sendGetStatusRequest(), 3000); // 注销登录会有延迟
        } else showToasts(ToastType.ERROR, data.msg);
    }
}

/**
 * 获取连接状态
 */
export const sendGetStatusRequest = () => {
    const applicationStore = useApplicationStore();
    applicationStore.onRequesting = true;
    createRequestScript(`${serverAddress}/eportal/portal/online_list?callback=handleGetStatusRequest`);
    window.handleGetStatusRequest = (data: RequestModel) => applicationStore.onlineStatus = data.result === 1;
    applicationStore.onRequesting = false;
}

/**
 * 创建请求节点
 * @param src 请求链接
 */
const createRequestScript = (src: string) => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    setTimeout(() => script.remove(), 1000); // 销毁节点
}
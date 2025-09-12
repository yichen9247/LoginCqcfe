import { showToasts } from "./utils";
import { RequestModel } from "@/types";
import { ToastType } from "@/enums/ToastType";

export const sendLoginRequest = (username: string, password: string) => {
    if (username.trim() === "" || password.trim() === "") {
        return showToasts(ToastType.ERROR, "学号或密码不能为空");
    }
    const script = document.createElement('script');
    script.src = `https://login.cqcfe.com:802/eportal/portal/login?callback=handleResponse&login_method=1&user_account=${username}&user_password=${password}`;
    document.body.appendChild(script);
    setTimeout(() => script.remove(), 1000); // 销毁节点
    window.handleResponse = (data: RequestModel) => {
        if (data.result === 1 && !data.ret_code) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            showToasts(ToastType.SUCCESS, "已登录到校园网");
        } else showToasts(ToastType.ERROR, data.msg);
    }
}
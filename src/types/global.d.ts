import { RequestModel } from ".";

declare global {
  interface Window {
    handleLoginRequest: (data: RequestModel) => void;
    handleLogoutRequest: (data: RequestModel) => void;
    handleGetStatusRequest: (data: RequestModel) => void;
  }
} // 重写Window内部属性

export {};
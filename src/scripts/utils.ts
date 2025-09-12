import { ElMessage } from "element-plus";
import { ToastType } from "@/enums/ToastType";

export const showToasts = async (type: string, text: string): Promise<void> => {
    if (type === ToastType.INFO) {
        ElMessage({ message: text, type: 'info', plain: true, grouping: true });
    } else if (type === ToastType.ERROR) {
        ElMessage({ message: text, type: 'error', plain: true, grouping: true });
    } else if (type === ToastType.SUCCESS) {
        ElMessage({ message: text, type: 'success', plain: true, grouping: true });
    } else if (type === ToastType.WARNING) {
        ElMessage({ message: text, type: 'warning', plain: true, grouping: true });
    }
}
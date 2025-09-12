import { reactive } from 'vue';
import { sendLoginRequest } from '@/scripts/httpUtils';
const formData = reactive({
    username: localStorage.getItem("username") ? localStorage.getItem("username") : "",
    password: localStorage.getItem("password") ? localStorage.getItem("password") : ""
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "login-frame" },
});
const __VLS_0 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
ElForm;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "login-form" },
    model: (__VLS_ctx.formData),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "login-form" },
    model: (__VLS_ctx.formData),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
// @ts-ignore
[formData,];
const __VLS_5 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    label: "学号",
}));
const __VLS_7 = __VLS_6({
    label: "学号",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
const __VLS_10 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
ElInput;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    modelValue: (__VLS_ctx.formData.username),
    size: "large",
    placeholder: "请输入你的学号",
    clearable: true,
}));
const __VLS_12 = __VLS_11({
    modelValue: (__VLS_ctx.formData.username),
    size: "large",
    placeholder: "请输入你的学号",
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[formData,];
var __VLS_8;
const __VLS_15 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    label: "密码",
}));
const __VLS_17 = __VLS_16({
    label: "密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_19 } = __VLS_18.slots;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
ElInput;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.formData.password),
    size: "large",
    placeholder: "请输入你的密码",
    clearable: true,
    type: "password",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.formData.password),
    size: "large",
    placeholder: "请输入你的密码",
    clearable: true,
    type: "password",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
[formData,];
var __VLS_18;
const __VLS_25 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
ElButton;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    ...{ 'onClick': {} },
    ...{ class: "login-btn" },
    type: "primary",
    size: "large",
}));
const __VLS_27 = __VLS_26({
    ...{ 'onClick': {} },
    ...{ class: "login-btn" },
    type: "primary",
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_29;
let __VLS_30;
const __VLS_31 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.sendLoginRequest(__VLS_ctx.formData.username, __VLS_ctx.formData.password);
            // @ts-ignore
            [formData, formData, sendLoginRequest,];
        } });
const { default: __VLS_32 } = __VLS_28.slots;
var __VLS_28;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['login-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['login-form']} */ ;
/** @type {__VLS_StyleScopedClasses['login-btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        sendLoginRequest: sendLoginRequest,
        formData: formData,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */

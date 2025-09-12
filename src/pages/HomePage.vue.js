import HeadModel from '@/model/HeadModel.vue';
import LoginFrame from '@/frame/LoginFrame.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "loginCqcfe-page-home" },
});
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "home-main" },
});
/** @type {[typeof HeadModel, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HeadModel, new HeadModel({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "main-container" },
});
/** @type {[typeof LoginFrame, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(LoginFrame, new LoginFrame({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {__VLS_StyleScopedClasses['loginCqcfe-page-home']} */ ;
/** @type {__VLS_StyleScopedClasses['home-main']} */ ;
/** @type {__VLS_StyleScopedClasses['main-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        HeadModel: HeadModel,
        LoginFrame: LoginFrame,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */

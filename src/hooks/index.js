import {useIntersectionObserver} from '@vueuse/core';
import {ref} from 'vue';
//封装图片懒加载函数
// 接收参数
/*
 * @params1 target @params2 function
 */
export const lazyImg = (api) => {
    //定义变量
    const target = ref(null);
    const result = ref([]);
    const {stop} = useIntersectionObserver(
        target,
        ([{isIntersecting}], observerElement) => {
            if (isIntersecting) {
                stop();
                api();
            }
        },
        // 只要相交的比例大于0就触发
        {
            threshold: 0
        }
    );
    return {target, result};
};

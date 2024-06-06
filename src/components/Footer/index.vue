<template>
    <div class="footer-wrapper">
        <div class="border-text">abc</div>
        <div class="main-text">{{ context }}</div>
        <div class="bottom-wrapper">
            <router-link :to="{ name: 'Study'}">学习</router-link>
            <router-link :to="{ name: 'Exhibition'}">预约</router-link>
            <router-link :to="{ name: 'Study'}">比赛</router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const context = computed(() => {
    const text='好厉害'
  return text.repeat(40);
});
</script>

<style lang="scss" scoped>
.footer-wrapper{
    border: 2px solid $prime-color-1;
    margin: 10px 20px;
    position: relative;  // 设置相对定位
    &>*{
        position: absolute;  // 绝对定位，相对于最近的相对定位父元素
        left: 50%;  // 水平居中
        transform: translateX(-50%);  // 确保完全居中
    }

    .border-text {
        top: -10px;  // 向上移动文本，调整此值可使文本与边框对齐
        background-color: white;  // 文本的背景颜色，可以改为与页面背景一致
        padding: 0 20px;  // 文本两侧的填充，遮住边框
        font-size: large;
    }
    .main-text{
        top: 15%;
        font-size: small;
        width: 80%;
        color: #999;
    }
    .bottom-wrapper{
        bottom: 5%;
        padding: 0 20px;

        display: flex;
        a{
            font-size: 18px;
            margin: 0 20px;
            color: #777;
            &:active{
                color: $prime-color-1;
                font-weight: bold;
            }
            &:hover{
                color: $prime-color-1;
                font-weight: bold;
            }
        }
    }
}
</style>
<template>
    <div class="nav-wrapper">
        <div class="logo-wrapper"><img src="@/assets/logo.png"/></div>
        <nav-item class="nav-item" 
        :title="item.title" 
        :destination-name="item.destinationName" 
        :class="{activeRoute:activeRoute==item.destinationName}"
        v-for="(item,index,) in navItemData" :key="index"></nav-item>
    </div>
</template>

<script setup>
import router from '@/router';
import NavItem from './NavItem.vue';
import { ref , onMounted} from 'vue';
const activeRoute=ref("");
const navItemData=[
    {title:"首页",destinationName:"Main"},
    {title:"带你看展",destinationName:"Exhibition"},
    {title:"带你学艺",destinationName:"Study"},
    {title:"带你购物",destinationName:"Shop"},
    {title:"聚焦视点",destinationName:"Watch"},
];
onMounted(() => {
  router.afterEach((to, from) => {
    activeRoute.value = to.name;  // 更新当前激活的路由
  });
});
</script>

<style lang="scss" scoped>
.nav-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo-wrapper{
        background-color: $prime-color-1;
        width: 100%;
        img{

            max-height: 5vh; // 根据需要调整这个值
            width: auto; // 保持宽高比
            height: auto; // 保持宽高比
        }
    }
    .nav-item{
        background-color: $prime-color-1;
        color: rgb(223, 165, 150);
    }
    .activeRoute{
        background-color: rgb(136, 56, 36);
        color: rgb(156, 138, 134);
    }
}
</style>
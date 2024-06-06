<template>
    <div class="item-wrapper" @click="goto">
      {{ title }}
    </div>
</template>

<script setup>
import router from '@/router';
import { defineProps, ref } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  destinationName: {
    type:String,
  }
});

const goto=function(){
  if(props.destinationName&&props.destinationName.length>0){
    router.push({name:props.destinationName})
  }
}
</script>

<style lang="scss" scoped>
.item-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}
</style>
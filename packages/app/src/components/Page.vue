<script setup lang="ts">
import { ref } from 'vue'
import { sendMsg } from '../apiSev.js'
const isLoading = ref(false)
const text = ref('')

const handleSend = (data) => {
  text.value = data.content
  sendMsg(data).then(res => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  })
}

//调用555
const call555 = () => {
  const data = {
    content: '/f/bIII52III105III15III/fruser/555.luaIII/b/f'
  }
  handleSend(data)
}

//调用789
const call789 = () => {
  const data = {
    content: '/f/bIII53III105III15III/fruser/789.luaIII/b/f'
  }
  handleSend(data)
}
//自动模式
const auto = () => {
  const data = {
    content: '/f/bIII54III303III7IIIMode(0)III/b/f'
  }
  handleSend(data)
}

//手动模式
const manual = () => {
  const data = {
    content: '/f/bIII55III303III7IIIMode(1)III/b/f'
  }
  handleSend(data)
}

//开始运行
const start = () => {
  const data = {
    content: '/f/bIII56III101III5IIISTARTIII/b/f'
  }
  handleSend(data)
}


</script>

<template>
  <div class="wrapper">
    isLoading:{{ isLoading }}<br>
    当前消息:<input :value="text" /><br>
    <button @click="call555">调用555程序</button>&emsp;
    <button @click="call789">调用789程序</button>&emsp;
    <button @click="auto">自动模式</button>&emsp;
    <button @click="manual">手动模式</button>&emsp;
    <button @click="start">开始运行</button>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}
</style>

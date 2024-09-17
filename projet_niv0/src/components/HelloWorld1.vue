<script setup>

import axios from "axios";
import { onMounted, ref } from "vue";
const data1 = ref([])

const getData = async () => {
  await axios('http://localhost:3000/task/getUsers').then((res) => {
    data1.value = JSON.parse(res.data.data);
  })
}

onMounted(async()=> {
  await getData()
  console.log(data1.value)
})

</script>

<template>
  <h1>Deuxième page</h1>
  <div class="container">
    <div v-for="item in data1" class="items">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<style scoped>
.container{
  height: 50%;
  width: 100%;
  margin-top: 30px ;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  overflow-y: scroll;
}
.items{
  width: 100%;
  height: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #505059;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

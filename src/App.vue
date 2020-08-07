<template>
  <div class="app">
    <section>  <router-view/></section>
  
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '@/components/Foot'
export default {
  name: 'App',
  components:{Foot}
}
</script>

<style lang="scss">
body,html,.app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
    
}
section{
  flex: 1;
  
}
</style>

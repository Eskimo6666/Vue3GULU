<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>EskimoUI</h1>
      <h2>An awsome UI frame</h2>
      <p class="actions">
        <a href>GitHub</a>
        <a href>开始</a>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import TopNav from '../components/Topnav.vue'
export default {
    components:{TopNav}
};
</script>

<style lang="scss" scoped>
.banner{
    padding:100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightblue;
    > .actions{
        padding: 0 8px;
        a {
            margin:0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height:$h;
            line-height: $h;
            border-radius: $h / 2;
            padding: 0 8px;
        }
    }
}
</style>
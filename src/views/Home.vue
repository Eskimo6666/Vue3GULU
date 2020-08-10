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
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
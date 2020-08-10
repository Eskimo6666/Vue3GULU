<template>
  <div>
    导航栏 |
    <router-link to="/">Eskimo</router-link>|
    <router-link to="/xxx">Eskimo2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

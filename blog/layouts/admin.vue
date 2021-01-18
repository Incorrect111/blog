<template>
  <div class="wrapper">
    <Header />
    <!-- Content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <nuxt-link to="/admin" class="link link-white">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link link-white"> New Post </nuxt-link>
        <nuxt-link to="/admin/comments" class="link link-white"> Comments </nuxt-link>
        <span @click="logoutUser" class="link link-white"> Logout </span>
      </Intro>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from "@/components/system/Header.vue";

export default {
  components: { Header },
  middleware: ['auth'],
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
         .then (()=>{ this.$router.push('/admin/auth') })
    }
  }
};
</script>

<style>
</style>

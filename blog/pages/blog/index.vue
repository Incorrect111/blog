<template>
<div class="wrapper-content wrapper-content--fixed">

  <Intro  title="My posts: "/>
  <PostsList :posts="postsLoaded" />

  </div>
</template>

<script>


export default {
  head () {
    let title = 'My blog SSR',
        descr = 'My blog With Nuxt js!',
        type = 'site'
    return {
      title: title,

      meta: [
        { title: "og:title",name: 'og:title',content: title },
        { hid: "description",name: 'description',content: descr },
        { hid: "og:description",name: 'og:description',content: descr },
        { hid: "og:type",name: 'og:type',content: type },
      ]
    }
  },
 computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>


<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts: " />
    <PostsList :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'
export default {
  components: {
    promo,
    contacts
  },
  head () {
    let title = 'My blog',
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


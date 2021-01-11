<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/newPostForm.vue";
import axios from "axios";

export default {
  components: { newPostForm },

  layout: "admin",
  asyncData(contex) {
    return axios
      .get(
        `https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`
      )
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        };
      })
      .catch(e => contex.error(e))
  },

  methods: {
    onSubmit(post) {
      console.log("Post Editing");
      this.$store.dispatch('editPost', post)
       .then (()=>{this.$router.push('/admin')})
    }
  }
};
</script>
<template>
    <section class="post-list">
        <div class="contaier">
            <div class="posts__wrapper">
                   <postPreview
                   v-for="post in posts"
                    :admin="admin"
                    :key="post.id"
                    :post="post"/>
            </div>
        </div>
    </section>
</template>

<script>

import postPreview from '@/components/Blog/PostPreview'

export default {

    components: {
        postPreview
    },

    props: {
         posts: {
             type: Array,
             required: true
         },
          admin: {
               type: Boolean,
               default: false
          }
    }
}
</script>

<style lang="scss">
.posts__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
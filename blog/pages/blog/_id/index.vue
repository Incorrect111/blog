<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments='comments' />
      <newComment />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
  components: {
    post, comments, newComment
  },
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        content: 'Excepteur sint occaecat cupidatat non proident,Excepteur sint occaecat cupidatat non proident,Excepteur sint occaecat cupidatat non proident,Excepteur sint occaecat cupidatat non proident,Excepteur sint occaecat cupidatat non proident',
        descr:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
      },

      comments: [
        {
          name: 'Alex',
          text: 'lalalal'
        },

        {
          name: 'Andrey',
          text: 'oyoyoy'
        }

      ]
    };
  }
};
</script>

<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
}

.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        margin-bottom: 16px;
        max-width: 400px;
    } 
    p {
        color: #999
    }
}
.post-body {
    text-align: left;
}

</style>
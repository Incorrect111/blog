<template>
    <section v-if="comments" class="comments">
        <div class="container">
            <h2>Comments:</h2>
            <p v-if="comments.length === 0">Comments: 0</p>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="name"> {{ comment.name }} </p>
                <p class="text">{{ comment.text }} </p>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    }
}
</script>

<style lang="scss">
.comments {
    margin: 30px auto;
    text-align: center;
}

.comment {
    width: 600px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    text-align: center;
}
.name {
margin-bottom: 12px;
font-size: 24px;
color: rgb(102, 16, 240) ;
}

</style>
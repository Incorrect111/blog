<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title"> New comment: </h2>
            <Message v-if="message" :message="message" />
            <form class="contact-form" @submit.prevent="onSubmit">
                <!-- Name -->
                <AppInput v-model="comment.name" type="text">Name: </AppInput>
                    <!-- Text -->
                <AppTextArea v-model="comment.text">Text:</AppTextArea>

                <!-- buttons -->
                <div class="controls">
                     <AppButton> Submit </AppButton>

                </div>
            </form>
        </div>
    </section>
</template>



<script>


export default {
    data() {
        return{
            comment: {
                name: '',
                text: '',
            },

            message: null
        }
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('addComment', {
                postId: '',
                publish: false,
                ...this.comment,

            })
            .then(() => {
                this.message = 'Submited!'
                // Reset
                this.comment.name  = '',
                this.comment.text = ''
                })
                .catch(e =>  {console.log(e)})

            console.log(this.comment)
        }
    }
}
</script>

<style lang="scss">
.new-comment {
    text-align: center;

    .contact-form {
        max-width: 600px;
        margin: 30px auto;
    }
        .title {
            color: #fff;
        }
}
.controls {
    margin: 30px 0;
}
</style>
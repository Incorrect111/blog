<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">Contact me!</h2>

            <!-- Message -->
            <Message v-if="message" :message="message"/>
            <form class="contact-form" @submit.prevent="onSubmit">
                <!-- Name -->
                <AppInput v-model="user.name"> Name: </AppInput>
               <!-- Email -->
                <AppInput v-model="user.email" type="email"> Email: </AppInput>
               <!-- TextArea -->
                <AppTextArea v-model="user.text">Text: </AppTextArea>
                <!-- Buttons -->
                <div class="controls">
                    <AppButton class="btnWhite"> Submit </AppButton>

                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {


    data() {
        return{
            message: null,

            user: {
                name: '',
                email: '',
                text: '',
            }
        }
    },

    methods: {
        onSubmit() {
            this.message = 'Submited'
            // Reset
            this.user.name = ''
            this.user.email = ''
            this.user.text = ''

            console.log(this.user)
        }
    }
}
</script>

<style lang="scss">
.contact {
    text-align: center;
    background-color: rgb(143, 125, 241);
    color: #fff;

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
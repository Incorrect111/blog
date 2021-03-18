import axios from 'axios'

export const state = () => ({
    postsLoaded: [],
    idToken: null,
})

export const mutations = {
    setPosts(state, postsArray) {
        state.postsLoaded = postsArray
            // console.log('work')
    },
    addPost(state, post) {
        console.log('addPost mutation')
        state.postsLoaded.push(post)
    },
    editPost(state, postEdit) {
        const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
        state.postsLoaded[postIndex] = postEdit
    },
    setToken(state, idToken) {
        state.idToken = idToken
    },
    destroyToken(state) {
        state.idToken = null
    }
}

export const actions = {
    nuxtServerInit({ commit }, contex) {
        return axios.get('https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts.json')
            .then(res => {
                console.log(res)
                const postsArray = []
                for (let key in res.data) {
                    postsArray.push({...res.data[key], id: key })
                }
                //Res
                commit('setPosts', postsArray)
            })
            .catch(e => console.log(e))
    },
    authUser({ commit }, user) {
        const key = 'AIzaSyAf3kjVGrJeJHeydvSZp1mO6hhh4_UZorw'

        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
                email: user.email,
                password: user.password,
                returnSecureToken: true
            }).then((res) => {
                let token = res.data.idToken
                commit('setToken', token)
            })
            .catch(e => { console.log(e) })
    },
    initAuth({ commit }) {
        let token = localStorage.getItem('token')
        if (!token) {
            return false
        }
        commit('setToken', token)
    },
    logoutUser({ commit }) {
        commit('destroyToken')
        localStorage.removeItem('token')
    },
    addPost({ commit }, post) {
        console.log('Post :', post)
        return axios.post('https://blog)-nuxt-78497-default-rtdb.firebaseio.com/posts.json', post)
            .then(res => {
                // console.log('addPost')
                commit('addPost', {...post, id: res.data.name })
            })
            .catch(e => console.log(e))
    },
    editPost({ commit, state }, post) {
        return axios.put(`https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.idToken}`, post)
            .then(res => {
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },
    addComment({ commit }, comment) {
        return axios.post('https://blog-nuxt-78497-default-rtdb.firebaseio.com/comments.json', comment)
            .catch(e => console.log(e))
    }
}

export const getters = {
    getPostsLoaded(state) {
        return state.postsLoaded
    },
    checkAuthUser(state) {
        return state.idToken != null
    }
}
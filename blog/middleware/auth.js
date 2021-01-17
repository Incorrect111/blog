export default function(contex) {
    console.log(contex)
    if (!contex.store.getters.checkAuthUser) {
        contex.redirect('/admin/auth')
    }
}
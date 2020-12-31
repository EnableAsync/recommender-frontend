export default function getUsername() {

    let username = this.$store.state.username
    if (username == null || username === '') {
        username = "1@qq.com"
    }
    return username;
}
<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <h3>Current users</h3>
        <ul>
            <li v-for="(user, index) in usersArray" :key="index">
                <router-link :to="{name: 'Profile', params: { user_id: user }}">
                    <span> {{ user }} </span>
                </router-link>
            </li>
        </ul>
        <h3>Navigation controls</h3>
        <ul>
             <li>
                <button @click="goBack">Go back</button>
            </li>
            <li>
                <button @click="goHome">Go to home page</button>
            </li>
             <li>
                <button @click="goNext">Go next</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            usersArray: ['Alex', 'Mat', 'Dave']
        }
    },
    methods: {
        goHome () {
            this.$router.push({ name: 'Home' }).catch(() => {})
        },
        goBack () {
            this.$router.go(-1)
        },
        goNext () {
            this.$router.go(1)
        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        text-align: center;

        ul {
            display: flex;
            align-items: center;
            padding: 0;
            list-style-type: none;
            justify-content: center;
        }

        li {
            margin: 0 15px;

            a {
                color: black;

                &.router-link-exact-active {
                    color: green;
                    font-weight: 700;
                }
            }
        }
    }
</style>

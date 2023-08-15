<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="@/assets/logo-main.png" alt="">
            </div>
            <nav>
                <router-link to="/">Форма</router-link>
                <router-link to="/personal">Превью</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: normal;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    #app {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        min-height: 100%;
    }
    .container {
        width: 100%;
        margin: 0 auto;
    }
    header {
        padding: 20px;
        border-bottom: 1px solid rgba(17, 17, 17, 0.10);
        .container {
            display: flex;
            align-items: center;
            max-width: 1282px;
        }
        .logo {
            width: 50%;
            text-align: left;
        }
        nav {
            a {
                color: #1111117A;
                font-size: 14px;
                &:first-child {
                    margin-right: 25px;
                }
            }
        }
    }
</style>

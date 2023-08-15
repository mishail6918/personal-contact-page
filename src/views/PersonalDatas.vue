<template>
    <div class="personal">
        <div class="container">
            <div class="block__title">
                <h1>Персональные данные</h1>
            </div>
            <div class="personal-block" v-if="Object.keys(infos).length >= 1">
                <div class="parent">
                    <h2>{{infos.name}}, {{infos.age}} лет</h2>
                </div>
                <div class="children">
                    <h2>Дети</h2>
                    <div class="child" v-for="child of infos.children">
                        {{child.name}},
                        {{child.age}} лет
                    </div>
                </div>
            </div>
            <p v-else>Данные пока не заполнены</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "PersonalDatas",
        computed: {
            infos() {
                return this.$store.getters.infos
            },
        },
    }
</script>
<style scoped lang="scss">
    .personal {
        padding-top: 30px;
        flex: 1 1 auto;
    }
    .personal-block {
        text-align: left;
    }
    .parent {
        margin-bottom: 60px;
        h2 {
            font-weight: 700;
            font-size: 16px;
        }
    }
    .children {
        h2 {
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 20px;
        }
        .child {
            border-radius: 5px;
            background: #F1F1F1;
            padding: 10px 20px;
            font-weight: 700;
            font-size: 16px;
            width: fit-content;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
</style>

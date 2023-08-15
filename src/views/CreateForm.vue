<template>
    <div class="form">
        <div class="container">
            <form @submit.prevent="submitHandler">
                <div class="form__parent">
                    <div class="block__title">
                        <h1>Персональные данные</h1>
                    </div>
                    <div class="form-control">
                        <input type="text" id="name" required v-model="this.name">
                        <label for="name">Имя</label>
                    </div>
                    <div class="form-control">
                        <input type="text" id="age" required v-model="this.age">
                        <label for="age">Возраст</label>
                    </div>
                </div>
                <div class="form__child">
                    <div class="block__title">
                        <h1>Дети (макс. 5)</h1>
                        <a @click="addChild()" v-if="this.children.length < 5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD"/>
                            </svg>
                            <span>Добавить ребенка</span>
                        </a>
                    </div>
                    <div class="child" v-for="(child, idx) of this.children">
                        <div class="form-control">
                            <input type="text" id="child_name" required v-model="child.name">
                            <label for="name">Имя</label>
                        </div>
                        <div class="form-control">
                            <input type="text" id="child_age" required v-model="child.age">
                            <label for="age">Возраст</label>
                        </div>
                        <div class="form-control">
                            <a class="del_btn" @click="removeChild(idx)">Удалить</a>
                        </div>
                    </div>
                </div>
                <div class="form-control form-submit">
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: this.$store.getters.infos.name || '',
                age: this.$store.getters.infos.age || '',
                children: this.$store.getters.infos.children || []
            }
        },
        methods: {
            addChild() {
                if (this.children.length < 5)
                this.children.push({name: '', age: ''});
            },
            removeChild(index) {
                this.children.splice(index, 1)
            },
            submitHandler() {
                const info = {
                    name: this.name,
                    age: this.age,
                    children: this.children
                }
                this.$store.dispatch('createInfo', info);
                this.$router.push('/personal');
            }
        },
        computed: {
            infos() {
                return this.$store.getters.infos
            },
        }
    }
</script>

<style lang="scss">
    .container {
        max-width: 616px;
    }
    .block__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 10px 20px;
            color: #01A7FD;
            border: 2px solid #01A7FD;
            border-radius: 100px;
            transition: 0.3s;
            &:hover {
                background-color: #01A7FD;
                color: #fff;
                svg path{
                    fill: #fff;
                }
            }
            span {
                margin-left: 5px;
            }
        }
    }
    .form {
        padding-top: 30px;
        flex: 1 1 auto;
        form {
            .form-control {
                width: 100%;
                position: relative;
            }
            .form-control input {
                display: block;
                outline: none;
                width: 100%;
                background: #fff;
                border: 1px solid #F1F1F1;
                border-radius: 4px;
                padding: 17px;
                padding-top: 20px;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .form-control label {
                display: block;
                position: absolute;
                left: 15px;
                top: 18px;
                color: #1111117A;
                font-size: 13px;
                -webkit-transition: .2s;
                transition: .2s;
            }
            .form-control input:valid + label,
            .form-control input:focus + label {
                top: 2px;
                font-size: 13px;
            }
            .form__child {
                .child {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .form-control {
                        &:not(:last-child) {
                            margin-right: 18px;
                        }
                    }
                    .del_btn {
                        color: #01A7FD;
                        cursor: pointer;
                    }
                }
            }
            .form-submit {
                text-align: left;
                button {
                    background-color: #01A7FD;
                    border-radius: 100px;
                    padding: 10px 20px;
                    color: #fff;
                    border: none;
                    line-height: 24px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        background-color: #fff;
                        color: #01A7FD;
                    }
                }
            }
        }
    }
    .block__title {
        margin-bottom: 20px;
        text-align: left;
        h1 {
            font-weight: 500;
            font-size: 16px;
        }
    }
</style>

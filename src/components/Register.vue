<template>
    <div>
        <van-nav-bar
            title='用户注册'
            left-text='返回'
            left-arrow
            @click-left='back'
        ></van-nav-bar>
        <div class='register-panel'>
            <van-field
                v-model='username'
                label='用户名'
                icon='clear'
                placeholder='请输入用户名'
                @click-icon="username = ''"
                :error-message='usernameErrMsg'
                required />
            <van-field
                v-model='password'
                type='password'
                label='密码'
                placeholder='请输入密码'
                :error-message='passwordErrMsg'
                required />
        </div>
        <div class='register-button'>
            <van-button
                type='primary'
                size='large'
                :loading='openLoading'
                @click='registerAction'
            >
                马上注册
            </van-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'vant';
    export default {
        data () {
            return {
                username: '',
                password: '',
                openLoading: false,
                usernameErrMsg: '',
                passwordErrMsg: ''
            }
        },
        methods: {
            back () {
                this.$router.back();
            },
            register () {
                this.openLoading = true;
                const url = 'http://localhost:3000/user/register';
                axios({
                    url: url,
                    method: 'post',
                    data: {
                        userName: this.username,
                        password: this.password
                    }
                })
                .then((res) => {
                    if (res.data.code === 0) {
                        Toast.success(res.data.msg);
                        this.openLoading = false;
                        this.$router.push('/');
                    } else {
                        this.openLoading = false;
                        Toast.fail('注册失败');
                    }
                }).catch((error) => {
                    this.openLoading = false;
                    Toast.fail('注册失败');
                })
            },
            registerAction (){
                this.checkForm() && this.register();
            },
            checkForm () {
                let isOk = true;
                if (this.username.length < 5) {
                    this.usernameErrMsg = '用户名不能少于5位';
                    setTimeout(() => {
                        this.usernameErrMsg = '';
                    }, 1000);
                    isOk = false;
                } else {
                    this.usernameErrMsg = '';
                }
                if (this.password.length < 6) {
                    this.passwordErrMsg = '密码不能少于6位数字';
                    setTimeout(() => {
                        this.passwordErrMsg = '';
                    }, 1000);
                    isOk = false;
                } else {
                    this.passwordErrMsg = '';
                }
                return isOk;
            }
        }
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .register-panel
        width 96%
        border-raduis 5px
        margin .4rem auto
        padding-bottom 1rem
    .register-button
        padding-top .2rem
</style>
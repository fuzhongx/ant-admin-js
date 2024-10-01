<template >
    <div class="hearder-bgd">
        <a-form name="custom-validation" ref="formRef" :model="formState" >
            <a-form-item has-feedback name="" :wrapper-col="{ span: 4, offset: 10 }">
                <label class="label-bgd-w">用户名</label>
                <a-input type="text" autocomplete="off" class="input-mb-10" v-model="formState.username" />
            </a-form-item>
            <a-form-item has-feedback name="" :wrapper-col="{ span: 4, offset: 10 }">
                <label class="label-bgd-w">密码</label>
                <a-input type="password" autocomplete="off" class="input-mb-10" v-model="formState.password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 6, offset:10 }">
               <div style="display: flex; width: 67%;justify-content: space-between;flex: auto;" class="input-mb-10" >
                <div style="width:62%;"><a-input type="text" style=" height: 40px; width:100%;" :wrapper-col="{ span: 6, offset:10 }"/></div>
                <div><Captcha @success="onSuccess" @fail="onFail" style="width: 100%;"/></div>
               </div>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 4, offset: 10 }">
                <a-button type="primary" html-type="submit" @click="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { reactive, } from 'vue';
import { getUser } from "@/api/user.js"
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router=useRouter()
        const data = reactive({
            formState: {
                username: '',
                password: ''
            },

            layout: {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 40,
                }
            },
        })
        const onSuccess = () => {
            console.log('验证成功！');
        };

        const onFail = () => {
            console.log('验证失败！');
        };
        const submit = () => {
          router.push({path:'/index'})

        }

        return { ...data,  submit,onSuccess, onFail}

    }
}
</script>

<style lang="scss" scoped>
.ant-btn {
    width: 100%;
}

.hearder-bgd {
    width: 100%;
    height: 100%;
    background: black;
    opacity: .8;
}

.ant-form {
    padding-top: 300px;
}

.ant-form-item {
    margin-bottom: 36px;
}

.input-mb-10 {
    margin-top: 10px;
}

.label-bgd-w {
    color: #ffffff;
}
</style>
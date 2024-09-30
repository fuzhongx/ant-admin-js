<template >
    <div class="hearder-bgd">
        <a-form name="custom-validation" ref="formRef" :model="formState" :rules="rules">
            <a-form-item has-feedback label="" :name="rules.usernname" :wrapper-col="{ span: 4, offset: 10 }">
                <label class="label-bgd-w"> username</label>
                <a-input type="text" autocomplete="off" class="input-mb-10" />
            </a-form-item>
            <a-form-item has-feedback label="" :name="rules.password" :wrapper-col="{ span: 4, offset: 10 }">
                <label class="label-bgd-w"> password</label>
                <a-input type="password" autocomplete="off" class="input-mb-10" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 10 }">
                <a-button type="primary" html-type="submit" @click="submit">Submit</a-button>
                <a-button style="margin-left: 10px">Reset</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { getUser } from "@/api/user.js"
export default {
    setup() {
        const rules = {
            usernname:
            {
                required: true,
                message: 'Please input name',
            },
            password:
            {
                required: true,
                message: 'Please input password',
            }

        }
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
        const submit = () => {
            getUser({data:'',message:'邮箱',resCode:'1003'})

        }

        return { ...data, rules, submit }

    }
}
</script>

<style lang="scss" scoped>
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
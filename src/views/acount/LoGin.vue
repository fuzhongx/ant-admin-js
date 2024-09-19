<template>
    <a-form name="custom-validation" ref="formRef" :model="formState" :rules="rules" v-bind="layout" @finish="handleFinish"
        @finishFailed="handleFinishFailed">
        <a-form-item has-feedback label="Password" name="pass">
            <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="Confirm" name="checkPass">
            <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
            <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        let validatePass = async (rule, value) => {
            if (value === '') {
                return Promise.reject('Please input the password');
            } else {
                if (formState.checkPass !== '') {
                    formRef.value.validateFields('checkPass');
                }
                return Promise.resolve();
            }
        };
        let validatePass2 = async (rule, value) => {
            if (value === '') {
                return Promise.reject('Please input the password again');
            } else if (value !== formState.pass) {
                return Promise.reject("Two inputs don't match!");
            } else {
                return Promise.resolve();
            }
        };
        const data = reactive({
            layout: {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                }
            },
            rules: {
                pass: [
                    {
                        required: true,
                        validator: validatePass,
                        trigger: 'change',
                    },
                ],
                checkPass: [
                    {
                        validator: validatePass2,
                        trigger: 'change',
                    },
                ],

            }
        })
        
        return data

    }
}
</script>

<style></style>
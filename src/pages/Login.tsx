import React, { Component, createRef, RefObject } from "react";
import { Button, Form, FormInstance, Input } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
}

class Login extends Component {
    formRef: RefObject<FormInstance>

    constructor(props: any, context: any) {
        super(props, context)
        this.formRef = createRef<FormInstance>()
    }

    render() {
        return (
            <>
                <Form
                    {...layout}
                    ref={this.formRef}
                >
                    <Form.Item
                        label='用户名'
                        name='name'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='用户名'
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default Login
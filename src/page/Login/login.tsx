import { Breadcrumb, Card, Space,Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import { UserLogin } from "../../Api/user/login";
import { useAppDispatch } from "../../app/hooks";
import { onLogin } from "../../features/user/user";
import defaultAxios from "../../util/axios";

interface iForm {
  remember:boolean
  username:string
  password:string
}
export default function Login () {
  const dis = useAppDispatch()
  const onFinish = (values: iForm) => {
    defaultAxios.post<UserLogin>("/api/qmm/user/login",{
      ...values
    }).then(req=>{
      if(req.data.success){
        dis(onLogin({
          isLogin:true,
          avatar:`http://q1.qlogo.cn/g?b=qq&nk=${values.username}&s=640`,
          token:req.data.token
        }))
      }
    })
  };
  return (<>
    <Card>
      <Space>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>login</Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Card>
    <Card>
      <Form<iForm>
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input autoComplete="current-username"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password autoComplete="current-password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </>)
}  
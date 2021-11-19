import { Breadcrumb, Button, Card, Space } from 'antd'
import {Link} from 'react-router-dom'
// import * as React from 'react'
// import {Axios} from 'axios';
function Index() {
  // new Axios({

  // })
  return (<>
    <Card>
      <Space>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Card>
    <Card>
      <Space>
        <Link to="/Search">
          <Button>获取信息</Button>
        </Link>
      </Space>
    </Card>
  </>)
}
export default Index
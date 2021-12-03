import { Breadcrumb, List, Card, Space, Skeleton, Button, message } from 'antd'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import defaultAxios from '../../util/axios'
// import * as React from 'react'
// import {Axios} from 'axios';

function Index() {
  let [blogData,changeBlog] = useState<Blog[]>([])
  let [page,setPage] = useState(0)
  async function getData(iPage=0,OldList:Blog[]=[]) {
    let data = await defaultAxios.get<DataBean>("/api/qmm/blog/get",{
      params:{
        page:iPage
      }
    })
    if(iPage === 0){
      changeBlog(data.data.body)
    }else{
      if(data.data.body.length === 0){
        message.info("已经没有更多了啦")
      }
      changeBlog([...OldList,...data.data.body])
    }
  }
  useEffect(()=>{
    getData(0)
  },[])
  function loadNextPage() {
    let newPage = page+10
    setPage(newPage)
    getData(newPage,blogData)
  }
  return (<>
    <Card>
      <Space>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Card>
    <Card>
      {/* <Space>
        <Link to="/search">
          <Button>获取信息</Button>
        </Link>
        <Link to="/nsfw">
          <Button>图片hentai评定</Button>
        </Link>
      </Space> */}
      <List
        dataSource={blogData}
        renderItem={item=>(<>
          <List.Item>
            <Skeleton title={false} loading={false} >
              <List.Item.Meta 
                title={item.title}
                description={item.content}
              ></List.Item.Meta>
            </Skeleton>
          </List.Item>
        </>)}
        loadMore={<div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={loadNextPage}>load more</Button>
        </div>}
      ></List>
    </Card>
  </>)
}
export default Index
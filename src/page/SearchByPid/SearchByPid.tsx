import { Breadcrumb, Button, Card, Space,Form, Input, Descriptions, Tooltip, message,Image } from 'antd'
import axios from '../../util/axios'
import { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import moment from 'moment'
import {Res,Body} from '../../Api/pixiv/details'
import { useAppSelector } from '../../app/hooks'
interface IForm {
  pid:String
}
function getPixivImageSrc(img:string) {
  return img.replace('https://i.pximg.net/img-original','https://www.ruok.buzz/img-original')
}
type iParams = "pid"//|"id"
export default function SearchByPid() {
  let islogin = useAppSelector((state)=>state.userSlice.isLogin)
  let nav = useParams<iParams>()
  let [data,changeData] = useState<Body|undefined>(undefined)
  const [form] = Form.useForm<IForm>()
  function onFinish(value:IForm) {
    console.log(value)
    axios.get<Res>("/touch/ajax/illust/details",{
      params:{
        illust_id: value.pid,
        lang: "zh"
      }
    }).then(req=>{
      console.log(req)
      if(req.data.error){
        changeData(undefined)
        throw Error(req.data.message)
      }else{
        changeData(req.data.body)
      }
    }).catch((err:Error)=>{
      console.log(err)
      
      message.error(err.message||'pid可能不存在');
      return 
    })
  }
  useEffect(()=>{
    if(!nav.pid) return
    form.setFieldsValue({
      pid:nav.pid
    })
    form.submit()
  },[nav.pid,form])
  return (<>
    <Card>
      <Space>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SearchByPid</Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Card>
    <Card>
      <Form<IForm>
        form={form}
        name="search"
        labelCol={{span:4}}
        wrapperCol={{span:16}}
        onFinish={onFinish}
      >
        <Form.Item
          label="pid"
          name="pid"
          rules={[
            {
              required:true,
              message:"《关于没有pid肯定搜不到这件事》"
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {data&&islogin&&(<Image width={200} src={getPixivImageSrc(data.illust_details.url_big)}  />)}
      {data&&(
        <Descriptions title="图片信息" labelStyle={{fontWeight:"bold"}}>
          <Descriptions.Item label="作者ID">{data.author_details.user_id}</Descriptions.Item>
          <Descriptions.Item label="作者名字">{data.author_details.user_name}</Descriptions.Item>
          <Descriptions.Item label="作者账户">{data.author_details.user_account}</Descriptions.Item>
          <Descriptions.Item label="作者头像">
            <Tooltip title="获取此图片需要特殊操作，无法直接使用链接打开">{data.author_details.profile_img.main}</Tooltip></Descriptions.Item>
          {data.author_details.fanbox_details&&(
            <>
              <Descriptions.Item label="fanbox地址">{data.author_details.fanbox_details.url}</Descriptions.Item>
              <Descriptions.Item label="fanbox介绍">{data.author_details.fanbox_details.description}</Descriptions.Item>
              <Descriptions.Item label="fanbox是否有成人内容">{data.author_details.fanbox_details.has_adult_content === '0'?'无':'有'}</Descriptions.Item>
              <Descriptions.Item label="fanbox注册时间">{data.author_details.fanbox_details.registration_datetime}</Descriptions.Item>
              <Descriptions.Item label="fanbox最新更新时间">{data.author_details.fanbox_details.updated_datetime}</Descriptions.Item>
            </>
          )}
          <Descriptions.Item label="图片加载失败显示的缺省文字">{data.illust_details.alt}</Descriptions.Item>
          <Descriptions.Item label="标题">{data.illust_details.title}</Descriptions.Item>
          <Descriptions.Item label="评论">{data.illust_details.comment}</Descriptions.Item>
          <Descriptions.Item label="原图尺寸">{data.illust_details.width}*{data.illust_details.height}</Descriptions.Item>
          <Descriptions.Item label="标签">
            <span>
            {data.illust_details.display_tags.map((v,i)=>(
              <Tooltip key={i} title={
                <p>
                  是否可删除：{v.is_deletable?'是':'否'}<br />
                  是否锁定：{v.is_locked?'是':'否'}<br />
                  是否有pixiv百科：{v.is_pixpedia_article_exists?'是':'否'}<br />
                  是否是作者设置的标签：{v.set_by_author?'是':'否'}<br />
                  {v.translation?`翻译：${v.translation}`:''}
                </p>}><span style={{marginRight:'10px',display:"inline"}}>{v.tag}</span></Tooltip>
            ))}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="上传时间">{moment(data.illust_details.upload_timestamp*1000).format("YYYY-MM-DD HH:mm")}</Descriptions.Item>
          <Descriptions.Item label="原图地址"><a target="_blank" rel="noreferrer" href={getPixivImageSrc(data.illust_details.url_big)}>{data.illust_details.url_big}</a></Descriptions.Item>
        </Descriptions>
      )}
    </Card>
  </>)
}
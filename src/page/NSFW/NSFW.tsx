import * as nsfwjs from 'nsfwjs';
import { useEffect, useState } from 'react';
import { Card,Form,Modal } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import {InboxOutlined} from '@ant-design/icons'
import getType from '../../util/getType';
import { UploadChangeParam } from 'antd/lib/upload';

function Nsfw () {
  let [state, changeState] = useState<String>('0');
  let [model,changeModel] = useState<nsfwjs.NSFWJS|undefined>(undefined);
  async function init () {
    const modal = await nsfwjs.load('./.nsfw/')
    changeState('1')
    changeModel(modal)
    return modal
  }
  function onChange(info:UploadChangeParam) {
    console.log(info.file)
    if(info.file.type === "image/png" || info.file.type === "image/jpeg"){
      let reader = new FileReader()
      reader.onload = function (e) {
        let img = document.createElement('img')
        console.log(e.target?.result)
        img.src = e.target?.result?.toString() || ""
        img.onload= ()=>{
          model?.classify(img).then(req=>{
            Modal.success({
              content:`你的图片可能是：${getType(req[0].className)},程度${Math.floor(req[0].probability*10000+0.5)/100}%`
            })
          })
        }
      }
      reader.readAsDataURL( (info.file) as any);
    }
  }
  useEffect(()=>{
    init()
  },[])
  return (<>
    <Card>
      {state === '0'&&(<span>模块加载中……</span>)}
      {state === '1'&&(<Form>
        <Dragger 
          beforeUpload={()=>false}
          onChange={onChange} 
          showUploadList={false}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </Form>)}
    </Card>
  </>)
}
export default Nsfw
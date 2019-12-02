# hf-passports

### introduce

直接将本地文件上传到阿里云

### Installation

`npm install hf-uploader --save`

### Example

```sh
import React, { useRef, useEffect } from 'react'
import ReactDom from 'react-dom'
import HFUpload from './lib'

function Example() {
  const uploader = useRef<any>(null)
  const inputRef = useRef(null)

  useEffect(() => {
    uploader.current = createUploader({
      accessKeyId: 'your accessKeyId',
      accessKeySecret: 'your accessKeySecret',
      stsToken: 'your stsToken',
      bucket: 'your bucket',
      region: 'oss-cn-beijing'
    })
  }, [])

  function createUploader(accessInfo: any) {
    return new HFUpload({
      createOssParams: accessInfo,

      onChange: ({ fileList }) => {
        console.log(fileList)
      }
    })
  }

  function handleChange(e: any) {
    const postFiles = [...e.target.files]
    uploader.current.add(postFiles)
    e.target.value = null
  }

  function handleClick() {
    const canUpload = uploader.current
    const el = inputRef.current
    if (!el || !canUpload) {
      return
    }
    el.click()
  }

  return (
    <input
      accept=".PNG,.JPG"
      type="file"
      ref={inputRef}
      multiple={true}
      onClick={handleClick}
      onChange={handleChange}
    />
  )
}

ReactDOM.render(<Example />, container)
```

### Prop Types

| Property     | Type     | Default        | Description                      | required |
| ------------ | -------- | -------------- | -------------------------------- | -------- |
| options      | object   | DefaultOptions | Options                          | N        |
| params       | object   | null           | Params to create OSS             | N        |
| files        | array    | []             | Initial files                    | N        |
| onStart      | function |                | Upload start                     | N        |
| beforeUpload | function |                | Pre-upload operation             | N        |
| afterUpload  | function |                | Post-upload operation            | N        |
| onChange     | function |                | Upload status and percent change | N        |
| onSucceed    | function |                | Single file upload succeeded     | N        |
| onFailed     | function |                | Single file upload failed        | N        |
| onComplete   | function |                | All files are uploaded           | N        |

#### DefaultOptions

| Property      | Type   | Default        | Description   |
| ------------- | ------ | -------------- | ------------- |
| concurrency   | number | 2              | 最高并发量    |
| partSize      | number | 500            | 分片大小 (kb) |
| timeout       | number | 600\*1000ms    | 超时时间      |
| retryCountMax | number | 3              | 超时重试次数  |
| errorText     | string | 网络故障请重试 | 错误提示      |

### Method

- add(files:Array<File>) 添加上传文件
- abort(uid:string) 暂停正在上传的文件
- reupload(uid:string) 重新/继续上传
- delete(uid:string) 删除
- clear() 清除全部
- updateParams(params:Params) 更新参数

### Contributing

1. git clone git@github.com:zcued/hf-upload.git
2. cd hf-upload && yarn
3. dev：yarn dev
4. build：yarn run build

### Document

阿里云 SDK 文档：https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1208.373e5966mqf1Mw

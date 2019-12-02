# hf-upload

### Introduce

直接将本地文件上传到阿里云

Examples available here:  https://zcued.github.io/hf-upload/example

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

| Property     | Type     | Default                    | Description                      | required                                        |
| ------------ | -------- | -------------------------- | -------------------------------- | ----------------------------------------------- |
| options      | object   | [DefaultOptions](#default) | Options                          | N                                               |
| params       | object   |                            | Params to create OSS             | N (you can use [updateParams](#method) as well) |
| files        | array    |                            | Initial files                    | N                                               |
| onStart      | function |                            | Upload start                     | N                                               |
| beforeUpload | function |                            | Pre-upload operation             | N                                               |
| afterUpload  | function |                            | Post-upload operation            | N                                               |
| onChange     | function |                            | Upload status and percent change | N                                               |
| onSucceed    | function |                            | Single file upload succeeded     | N                                               |
| onFailed     | function |                            | Single file upload failed        | N                                               |
| onComplete   | function |                            | All files are uploaded           | N                                               |

#### <span id = "default">DefaultOptions</span>

| Property      | Type   | Default        | Description         |
| ------------- | ------ | -------------- | ------------------- |
| concurrency   | number | 2              | Maximum concurrency |
| partSize      | number | 500            | Part size (kb)      |
| timeout       | number | 60\*1000       | Overtime time (ms)  |
| retryCountMax | number | 3              | Retry times out     |
| errorText     | string | 网络故障请重试 | Error message       |

### <span id = "method">Method</span>

- add(files:Array<File>): Add upload file
- abort(uid:string): Pause files being uploaded
- reupload(uid:string): Resume / continue upload
- delete(uid:string): Delete file
- clear(): Clear all
- updateParams(params:Params): Update parameters

### Contributing

1. Fork, then clone the project.
2. Run the project in development mode：$ yarn start.
3. Make your changes.
4. Commit and PR.

### Document

Ali-oss SDK document：https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1208.373e5966mqf1Mw

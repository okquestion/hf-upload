# hf-upload

### Introduce

将本地文件直接上传到阿里云，分片上传，支持大文件上传

Examples available here:  https://zcued.github.io/hf-upload/example

### Installation

```npm install hf-uploader --save``` or ```yarn add hf-uploader```

 A [UMD version of hf-upload](https://github.com/zcued/hf-upload/tree/master/dist) as well

### Example

```sh
import React, { useRef, useEffect } from 'react'
import ReactDom from 'react-dom'
import HFUpload from 'hf-upload'

function Example() {
  const uploader = useRef(null)
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

  function createUploader(accessInfo) {
    return new HFUpload({
      createOssParams: accessInfo,

      onChange: ({ fileList }) => {
        console.log(fileList)
      }
    })
  }

  function handleChange(e) {
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

```javascript
const uploader = new HfUpload({})
```

- add(files:Array<File>): add upload file
  
  ``` uploader.add(files) ```
- abort(uid:string): pause files being uploaded

  ``` uploader.abort(uid) ```
- reupload(uid:string): resume / continue upload

  ``` uploader.reupload(uid) ```
- delete(uid:string): delete file

  ``` uploader.delete(uid) ```
- clear(): clear all

  ``` uploader.clear() ```
- updateParams(params:Params): update parameters
  
  ``` uploader.updateParams(params) ```

### Contributing

1. Fork, then clone the project.
2. Cd hf-upload, then ```yarn``` or ```npm install```.
3. Run the project in development mode：```yarn start``` or ```npm start```.
4. Make your changes.
5. Commit and PR.

### Document

Ali-oss SDK document：https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1208.373e5966mqf1Mw

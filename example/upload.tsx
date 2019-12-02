import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import { Button } from './create'

export default memo(function Upload({ onChange }: { onChange: Function }) {
  const inputRef = useRef(null)

  const selectFile = () => {
    const el = inputRef.current
    if (el) {
      el.click()
    }
  }

  const handleChange = e => {
    const files = e.target.files
    onChange([...files])
    e.target.value = null
  }

  return (
    <UploadButton onClick={selectFile}>
      <input
        ref={inputRef}
        type="file"
        accept=".PNG,.JPG,.MP4"
        multiple={true}
        onChange={handleChange}
      />
      上 传
    </UploadButton>
  )
})

const UploadButton = styled(Button)`
  input {
    display: none;
  }
`

import { Card, InputNumber, Input } from 'antd';

const LogoCustomerQrCode = (props) => {
  return (
    <>
      <Card title="Configuration Logo" bordered={false}>
        <div>
          <span>Source (url: http://abc/test.png):  {props.source}</span>
          <Input name="sourceLogo" onChange={ e => props.changeSourceLogo(e.target.value)} />
        </div>
        <div>
          <span>Image Width: {props.width}</span>
          <InputNumber min={0} max={50} style={{ width: '100%' }} onChange={val => props.changeWidthLogo(val)}  />
        </div>
        <div>
          <span>Image Height: {props.height}</span>
          <InputNumber min={0} max={50} style={{ width: '100%' }} onChange={val => props.changeHeightLogo(val)} />
        </div>
      </Card>
    </>
  )
}

export default LogoCustomerQrCode;
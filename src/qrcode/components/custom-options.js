import { Card, InputNumber, Input } from 'antd';

const CustomOptionsQrCode = (props) => {
  return (
    <>
      <Card title="Configuration options" bordered={false}>
        <div>
          <span>Size:  {props.size}</span>
          <InputNumber
            min={0} max={980}
            defaultValue={0}
            style={{ width: '100%' }}
            onChange={(size)=>props.changeSize(size)}
          />
        </div>
        <div>
          <span>Background Color: </span>
          <Input
            name="backgroundColor"
            type="color"
            value={props.bgColor}
            onChange={ e => props.changeBgColor(e.target.value)}
          />
        </div>
        <div>
          <span>Foreground Color: </span>
          <Input
            name="foregroundColor"
            type="color"
            value={props.fgColor}
            onChange={ e => props.changeFgColor(e.target.value)}
          />
        </div>
        <div>
          <span>Value (url: http://abc.com): </span>
          <Input.TextArea
            onChange={e => props.changeLink(e.target.value)}
          />
        </div>
      </Card>
    </>
  )
}

export default CustomOptionsQrCode;
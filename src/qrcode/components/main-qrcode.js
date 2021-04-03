
import QRCode from 'qrcode.react'

const MainViewQrCode = (props) => {
  console.log(props);
  return(
    <>
      <QRCode
        value={props.linkView}
        size={props.size}
        bgColor={props.bgColor}
        fgColor={props.fgColor}
        imageSettings={{ 
          src: props.source,
          x: null,
          y: null,
          height: props.height,
          width: props.width
          }}
      />
    </>
  )
}

export default MainViewQrCode
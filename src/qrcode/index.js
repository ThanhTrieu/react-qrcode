import { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import CustomOptions from './components/custom-options';
import LogoCustomer from './components/logo-customer';
import MainViewQrCode from './components/main-qrcode';

function validURL(str) {
  // eslint-disable-next-line no-useless-escape
  let res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g);
  if(res == null) {
    return false;
  }
  return true;
}

function checkImageURL(url) {
  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

const QrCodeApp = () => {
  const [size, setSize] = useState(0)
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const [linkView, setLinkView] = useState("");
  const [sourceLogo, setSourceLogo] = useState("");
  const [wLogo, setWidthLogo] = useState(0);
  const [hLogo, setHeightLogo] = useState(0);

  const changeSizeQrCode = (sizeQrCode) => {
    if(!isNaN(sizeQrCode)){
      setSize(sizeQrCode);
    }
  }

  const changeBgColor = (color) => {
    if(color !== ''){
      setBgColor(color)
    }
  }

  const changeFgColor = (color) => {
    if(color !== ''){
      setFgColor(color)
    }
  }

  const changeLinkView = (link) => {
    if(validURL(link)){
      setLinkView(link);
    }
  }

  const changeLogo = (logo) => {
    if(validURL(logo) && checkImageURL(logo)){
      setSourceLogo(logo);
    }
  }

  const changeWidthQrCode = (width) => {
    if(!isNaN(width)){
      setWidthLogo(width);
    }
  }

  const changeHeightQrCode = (height) => {
    if(!isNaN(height)){
      setHeightLogo(height);
    }
  }

  return(
    <>
      <Row>
        <Col span={20} offset={2}>
          <h1 style={{ margin: '20px 0px', textAlign: 'center' }}> Qr code </h1>
          <Divider dashed />
          <Row>
            <Col span={12}>
              <CustomOptions
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                linkView={linkView}
                changeSize={changeSizeQrCode}
                changeBgColor={changeBgColor}
                changeFgColor={changeFgColor}
                changeLink={changeLinkView}
              />
            </Col>
            <Col span={12}>
              <LogoCustomer
                width={wLogo}
                height={hLogo}
                source={sourceLogo}
                changeWidthLogo={changeWidthQrCode}
                changeHeightLogo={changeHeightQrCode}
                changeSourceLogo={changeLogo}
              />
            </Col>
          </Row>
          <Divider dashed />
          <Row style={{ margin: '30px 0px' }}>
            <Col span={12} offset={6}>
              <MainViewQrCode
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                linkView={linkView}
                width={wLogo}
                height={hLogo}
                source={sourceLogo}
              />
            </Col>
          </Row>        
        </Col>
      </Row>
    </>
  )
}
export default QrCodeApp;
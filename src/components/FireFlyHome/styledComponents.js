import styled from 'styled-components'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`
export const CrackerImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/dakmxu3dl/image/upload/v1719044592/Frame_6_ku7rsl.png');
  width: 1200px;
  height: 420px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 527px;
    flex-direction: column;
    gap: 0px;
    opacity: 0px;
  }
`
export const ThemeH1 = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 56px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
    font-weight: 600;
  }
`

export const Header = styled.div`
  width: 100%;
  border: 0px 0px 1px 0px;
  opacity: 0px;
  background: #1c1c1c33;
  border-bottom: 1px solid #ff777766;
  @media screen and (min-width: 768px) {
    padding: 12px 1232px 11.77px 120px;
    gap: 0px;
    left: -30px;
    margin: 0px;
    height: 71px;
  }
`
export const HeaderImg = styled.img`
  width: 80px;
  height: 40px;
  gap: 0px;
  opacity: 0px;
  margin-left: 500px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin: 0px;
    width: 116px;
    height: 47.23px;
    top: 12px;
    left: 120px;
  }
`
export const FrameDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  margin-left: 400px;
  @media screen and (min-width: 768px) {
    width: auto;
    margin: 0px;
  }
`
export const FrameLine = styled.hr`
  width: 240px;
  padding: 2px 0px 0px 0px;
  gap: 2px;
  opacity: 0px;
  angle: 90 deg;
  background-color: #f27121;
  @media screen and (min-width: 768px) {
    width: 507px;
    height: 7px;
    top: 628.97px;
    left: 120px;
  }
`
export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: left;
  margin-top: 120px;
  @media screen and (min-width: 768px) {
    margin-right: 800px;
  }
`
export const FrameH1 = styled.h1`
  width: 187px;
  top: 63px;
  left: 13px;
  gap: 0px;
  opacity: 0px;
  color: #f27121;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
`
export const AboutP = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 32px;
  width: 708px;
  height: 80px;
  text-align: center;
  color: #000000;
  margin-bottom: 85px;
  @media screen and (min-width: 768px) {
    width: 908px;
    height: 139px;
    top: 680px;
    left: 266px;
    gap: 0px;
    opacity: 0px;
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
  }
`
export const AboutPSpan = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`
export const ProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 584px;
  height: 530px;
  top: 963px;
  left: 120px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #cecece;
  padding: 10px;
`

export const ProductImg = styled.img`
  width: 560px;
  height: 434px;
  top: 12px;
  left: 12px;
  gap: 0px;
  opacity: 0px;
`

export const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 557px;
`

export const SparkImg = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 117.1px;
    height: 138.33px;
    top: 706px;
    left: 120px;
    gap: 0px;
    opacity: 0px;
  }
`

export const ProductName = styled.p`
  width: 240px;
  height: 28px;
  top: 478px;
  left: 12px;
  gap: 4px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  align-self: left;
  text-align: left;
  color: #000000;
`

export const QuickViewBtn = styled.button`
  width: 211px;
  height: 52px;
  top: 466px;
  left: 361px;
  gap: 4px;
  opacity: 0px;
  background-color: ${props => (props.orange ? '#ffffff' : '#fe0000')};
  cursor: pointer;
  outline: none;
  border: 0;
  color: ${props => (props.orange ? '#fe0000' : '#ffffff')};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
`
export const ProductsMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 400px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1190px;
    margin: 0px;
  }
`
export const BottomHrLine = styled.hr`
  width: 1197px;
  height: 7px;
  top: 1554.97px;
  left: 120px;
  padding: 2px 0px 0px 0px;
  gap: 2px;
  opacity: 0px;
  angle: 90 deg;
  background-color: #f27121;
  margin: 40px 0px 80px 0px;
`

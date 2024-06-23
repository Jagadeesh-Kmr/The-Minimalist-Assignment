import styled from 'styled-components'

export const ItemViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`
export const ItemMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 35px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    height: 600px;
    margin-left: 140px;
  }
`
export const CancelImg = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-top: 40px;
  }
`

export const ItemImg = styled.img`
  width: 430px;
  height: 280px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    width: 980px;
    height: 600px;
    margin-right: 20px;
  }
`

export const ItemNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin-bottom: 0px;
`

export const ItemName = styled.p`
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 34px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 0px;
  }
`
export const ItemPrice = styled.p`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
`
export const ItemHr = styled.hr`
  border-top: 4px dashed #f27121;
  width: 420px;
  @media screen and (min-width: 768px) {
    width: 430px;
    margin-top: 28px;
  }
`
export const ProductDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`
export const ChooseNowBtn = styled.button`
  width: 411px;
  height: 52px;
  top: 466px;
  left: 361px;
  gap: 4px;
  opacity: 0px;
  background-color: #fe0000;
  cursor: pointer;
  outline: none;
  border: 0;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
`

export const BackToHomeBtn = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: auto;
    width: 211px;
    height: 52px;
    top: 466px;
    left: 361px;
    gap: 4px;
    opacity: 0px;
    background-color: #fe0000;
    cursor: pointer;
    outline: none;
    border: 0;
    color: #ffffff;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
  }
`

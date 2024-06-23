import {Link} from 'react-router-dom'

import {
  ItemViewDiv,
  ItemImg,
  ItemMainDiv,
  ItemNameContainer,
  ItemName,
  CancelImg,
  ItemPrice,
  ItemHr,
  ProductDesc,
  ChooseNowBtn,
  BackToHomeBtn,
} from './styledComponents'

import './index.css'

const ItemView = () => (
  <>
    <ItemViewDiv>
      <ItemMainDiv>
        <ItemImg
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719052230/Frame_7_pfcgxj.png"
          alt="item image"
        />
        <div>
          <ItemNameContainer>
            <div>
              <ItemName>Raju Rassibomb</ItemName>
            </div>
            <div>
              <Link to="/">
                <CancelImg
                  src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-09-512.png"
                  alt="cancel icon"
                />
              </Link>
            </div>
          </ItemNameContainer>
          <ItemPrice>MRP:</ItemPrice>
          <ItemName id="price">Raju Rassibomb/-</ItemName>
          <ItemHr />
          <ProductDesc>Product Description</ProductDesc>
          <ProductDesc id="productDetail">
            This product packs an extra punch.thanks to the literal blood, sweat
            and tears of a young boy.
          </ProductDesc>
          <ItemHr />
          <ProductDesc>Product Contents:</ProductDesc>
          <li>10 hand-hurting pieces of rassi bombs</li>
          <li>Jilled with great pain</li>
          <li>Raju’s hopes</li>
          <ItemHr />
          <ProductDesc>Shipping Time:</ProductDesc>
          <ProductDesc id="productDetail">
            Before Raju understands that his dreams do not matter.
          </ProductDesc>
          <ChooseNowBtn type="button">Choose Now</ChooseNowBtn>
        </div>
      </ItemMainDiv>

      <Link to="/" className="link">
        <BackToHomeBtn type="button" style={{marginTop: '20px'}}>
          BACK TO HOME
        </BackToHomeBtn>
      </Link>
    </ItemViewDiv>
  </>
)

export default ItemView

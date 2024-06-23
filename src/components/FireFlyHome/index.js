import {Link} from 'react-router-dom'

import Footer from '../Footer'

import {
  HomeDiv,
  CrackerImgDiv,
  Header,
  HeaderImg,
  FrameDiv,
  FrameLine,
  FrameH1,
  AboutP,
  SparkImg,
  AboutPSpan,
  ProductsMainDiv,
  ProductsDiv,
  ProductImg,
  ProductName,
  QuickViewBtn,
  BtnDiv,
  BottomHrLine,
  ThemeDiv,
  ThemeH1,
} from './styledComponents'

const Home = () => {
  const mainContent = () => (
    <>
      <CrackerImgDiv>
        <Header>
          <HeaderImg
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719050928/Frame_uwlowy.png"
            alt="fire Work Image"
          />
        </Header>
        <ThemeDiv>
          <ThemeH1>
            The choice is yours.
            <br />
            Because they don’t have one.
          </ThemeH1>
          <QuickViewBtn type="button" orange="true">
            QUICK VIEW
          </QuickViewBtn>
        </ThemeDiv>
      </CrackerImgDiv>
    </>
  )

  const aboutContent = () => (
    <>
      <FrameDiv>
        <FrameLine />
        <FrameH1>About</FrameH1>
        <FrameLine />
      </FrameDiv>
      <ProductsMainDiv>
        <SparkImg
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719054055/Frame_1_iex4pu.png"
          alt="spark image"
        />
        <AboutP>
          Our products are crafted exclusively from the dreams and screams of
          young kids who wanted to show their mastery in their chosen fields,
          but were directed towards a factory for daily wages. Each cracker
          bursts brighter than their lost smiles, and can be heard louder than
          their cries for miles. Buy them, burst them, brag about them.
          <br />
          <AboutPSpan>
            The choice is yours. Because they don’t have one.
          </AboutPSpan>
        </AboutP>
        <SparkImg
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719054055/Frame_1_iex4pu.png"
          alt="spark image"
        />
      </ProductsMainDiv>
      <FrameDiv>
        <FrameLine />
        <FrameH1>Our Products</FrameH1>
        <FrameLine />
      </FrameDiv>
    </>
  )

  const productsContent = () => (
    <>
      <ProductsMainDiv>
        <ProductsDiv>
          <ProductImg
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719052230/Frame_7_pfcgxj.png"
            alt="Product Image"
          />
          <BtnDiv>
            <ProductName>Raju Rassibomb</ProductName>
            <Link to="/item">
              <QuickViewBtn type="button">QUICK VIEW</QuickViewBtn>
            </Link>
          </BtnDiv>
        </ProductsDiv>
        <ProductsDiv>
          <ProductImg
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719052230/Frame_7_pfcgxj.png"
            alt="Product Image"
          />
          <BtnDiv>
            <ProductName>Ladiyon ki Rani Chani</ProductName>
            <QuickViewBtn type="button">QUICK VIEW</QuickViewBtn>
          </BtnDiv>
        </ProductsDiv>
      </ProductsMainDiv>
      <BottomHrLine />
    </>
  )

  return (
    <>
      <HomeDiv>
        {mainContent()}
        {aboutContent()}
        {productsContent()}
        <Footer />
      </HomeDiv>
    </>
  )
}
export default Home

import React from 'react';
import styled from 'styled-components';
import Label from '../../components/Label';
import GalleryButtons from './GalleryButtons';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;

const Price = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
  font-weight: normal;
  text-align: right;
  margin-top: 20px;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

const Break = styled.br`
  @media (max-width: 768px) {
    display:none;
  }
`;

const Name = styled.h2`
  font-size: 64px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SaveButton = styled.button`
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  font-family: 'AvenirNext';
  color: white;
  background-color: #e3e3e3;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Details = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const SaleLabel = styled(Label)`
  margin-left: 18px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default () => (
  <Header>
    <div>
      <Name>Ultra<Break /> boost</Name>
      <SaveButton>Save</SaveButton>
    </div>
    <Wrapper>
      <Details>
        <GalleryButtons />
        <SaleLabel>sale</SaleLabel>
      </Details>

      <Price>$170</Price>
    </Wrapper>
  </Header>
);

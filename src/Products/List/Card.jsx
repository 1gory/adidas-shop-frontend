import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';

const Wrapper = styled.div`
  padding-bottom: 24px;
`;

const CardContent = styled.div`
  position: relative;
  background-color: #f4f4f4;
  padding: 9px;
`;

const SaleLabel = styled(Label)`
  position: absolute;
  right: 0;
  margin-top: 8px;
  margin-right: 17px;
`;

const BuyButton = styled(Link)`
  text-decoration: none;
  ${props => props.hasDiscount === true && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
  background-color: white;
  display: block;
  font-size: 30px;
  border: none;
  text-align: center;
  padding: 20px;
  color: ${props => (props.hasDiscount === true ? 'white' : 'black')};

  &:visited {
    color: ${props => (props.hasDiscount === true ? 'white' : 'black')};
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Card = props => (
  <Wrapper>
    <CardContent>
      {props.hasDiscount && <SaleLabel>sale</SaleLabel>}
      <Image src={props.imgSrc} alt="" />
      <BuyButton hasDiscount={props.hasDiscount} to="/product">
        ${props.price}
      </BuyButton>
    </CardContent>
  </Wrapper>
);

Card.propTypes = {
  hasDiscount: PropTypes.bool,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

Card.defaultProps = {
  hasDiscount: false,
};

export default Card;

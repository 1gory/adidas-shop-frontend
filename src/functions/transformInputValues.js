import getImage from './getImage';

export default data =>
  data.items.map((product) => {
    const imageUrl = getImage(product.images[0].id, product.images[0].fileName, 256);
    return { price: product.price, image: imageUrl, id: product.id };
  });

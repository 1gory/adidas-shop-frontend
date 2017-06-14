import getImage from './getImage';

export default (data) => {
  const imageUrl = getImage(data.images[0].id, data.images[0].fileName, 256);
  return {
    images: data.images,
    image: imageUrl,
    id: data.id,
    price: data.price / 100,
    title: data.title,
  };
};

const ShopItemsCard = ({
  image,
  title,
  price,
  size,
  material,
  weight,
  ideal,
  purpose1,
  purpose2,
  purpose3,
  purpose4,
  purpose5,
}) => {
  return (
    <div className="border border-black rounded-md shadow-md items-center">
      <img
        src={image}
        alt="product image"
        className="w-auto h-auto rounded-2xl"
      />
      <h1 className="bg-[#00008B] text-white text-center py-4 font-bold">
        {title}
      </h1>
      <p className="text-2xl text-gray-700 mb-3 my-3 mx-7">{price}</p>
      <p className="mx-7 mb-3">{size}</p>
      <p className="mx-7 mb-3">{material}</p>
      <p className="mx-7 mb-3">{weight}</p>
      <p className="mx-7 mb-3">{ideal}</p>
      <p className="ml-10 mr-6 mb-3">{purpose1}</p>
      <p className="ml-10 mr-6 mb-3">{purpose2}</p>
      <p className="ml-10 mr-6 mb-3">{purpose3}</p>
      <p className="ml-10 mr-6 mb-3">{purpose4}</p>
      <p className="ml-10 mr-6 mb-3">{purpose5}</p>
    </div>
  );
};

export default ShopItemsCard;

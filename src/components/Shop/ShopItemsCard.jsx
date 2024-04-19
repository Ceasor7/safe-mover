import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
    <Card>
      <CardHeader>
        <img
          src={image}
          alt="product image"
          className="w-auto h-auto rounded-2xl"
        />
        <CardTitle> {title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{size}</p>
        <p>{material}</p>
        <p>{weight}</p>
        <p>{ideal}</p>
        <ul className=" list-disc ml-4">
          <li>{purpose1}</li>
          <li>{purpose2}</li>
          <li>{purpose3}</li>
          <li>{purpose4}</li>
          <li>{purpose5}</li>
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ShopItemsCard;

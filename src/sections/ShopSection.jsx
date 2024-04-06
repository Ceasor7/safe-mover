import ShopItemsCard from '@/components/Shop/ShopItemsCard';

const shopCards = [
  {
    image: '/wardrobebox-1.jpg',
    title: 'Upright Boxes(Wardrobe Box)',
    price: 'Price – Ksh 920 (VAT inclusive)',
    size: 'Box Dimensions in cm : 51 x 48 x 116',
    ideal: 'Ideal for :',
    purpose1:
      'Perfect for moving, storing, shipping clothes & garments wrinkle-free on hangers.',
    purpose2: 'Comes with a hanging rail (350Kshs).',
    purpose3:
      'Ideal for length items e.g. music System speakers packaging, vase etc.',
    purpose4: 'Has handles on opposite sides for easy lifting.',
    purpose5: 'Recyclable',
  },
  {
    image: '/large-box-1.png',
    title: 'Large Boxes',
    price: 'Price – Ksh 600 (VAT inclusive)',
    size: 'Box Dimensions in cm : 60 x 48 x 48',
    ideal: 'Ideal for :',
    purpose1:
      'Ideal for moving, shipping, or storing large, lightweight bulky items.',
    purpose2:
      'Perfect for packing folded clothes, curtains, linen, portraits, picture frames, and electronic appliances.',
    purpose3: 'Recyclable',
  },
  {
    image: '/medium-boxes.webp',
    title: 'Medium Boxes',
    price: 'Price – Ksh 320 (VAT inclusive)',
    size: 'Box Dimensions in cm : 48 x 30 x 34',
    ideal: 'Ideal for :',
    purpose1:
      'Our Small Moving Boxes are ideal for moving, shipping, or storing dense, heavy yet fragile items such as books, kitchenware, linen, foodstuff, and small appliances.',
    purpose2: 'Recyclable',
  },
  {
    image: '/laying-boxes.jpg',
    title: 'Sleeping/Laying Boxes',
    price: 'Price – Ksh 825 (VAT inclusive)',
    size: 'Box Dimensions in cm : 102 x 53 x 32',
    ideal: 'Ideal for :',
    purpose1:
      'Our sleeping boxes are perfect for storing and moving trench coats, pants, gowns, and heavy-duty garments.',
    purpose2: 'Ideal storage solution for seasonal items.',
    purpose3: 'The best option for air shipping.',
    purpose4: 'Recyclable',
  },
  {
    image: '/wrap2.webp',
    title: 'Bubble Wrap',
    price: 'Price – Ksh 200/meter (VAT inclusive)',
    ideal: 'Ideal for :',
    purpose1:
      'wrapping fragile items like paintings, glass, picture frames, china ware, etc. that are meant for transportation or short-term and long-term storage.',
  },
  {
    image: '/packing-tape.png',
    title: 'Packing Tape',
    price: 'Price – Ksh 420/roll (VAT inclusive)',
    ideal: 'Ideal for :',
    purpose1:
      'Very strong adhesive and water resistant. Ideal for sealing carton boxes either meant for storage, transportation and export.',
  },
  {
    image: '/shrink-wrap.webp',
    title: 'Shrink Wrap',
    price: 'Price – Ksh 3,000 per roll (VAT inclusive)',
    size: 'length: 375m, width: 0.5m, thickness: 25microns',
    weight: 'nylon',
    weight: '4.5 kg',
    purpose1:
      'Shrink wrap is a weather-proof material used to protect furniture, appliances, and other household goods from damage from dust, moisture, or dirt when moving. Transparent shrink wrap also affords you a way to easily identify the contents of a package.',
    purpose2:
      'It provides efficient handling for large or bulky items, providing a better grip for the movers, thus preventing accidents or injuries.',
  },
];

const ShopSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-7">
      {shopCards.map((shopCard, index) => (
        <ShopItemsCard key={index} {...shopCard} />
      ))}
    </div>
  );
};

export default ShopSection;

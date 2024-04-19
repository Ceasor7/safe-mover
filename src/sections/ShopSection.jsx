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
    purpose3:
      ' Large boxes can be used to organize lightweight items from various rooms. For example, you can use them to pack up miscellaneous items from closets, shelves, or cabinets. ',
    purpose4:
      'Large boxes can be used to consolidate items from multiple smaller boxes, optimizing space in the moving truck and saving time and effort during the moving process.',
    purpose5:
      ' Large boxes provide the flexibility to accommodate these irregularly shaped items, ensuring they are securely packed and transported without damage.',
  },
  {
    image: '/medium-boxes.webp',
    title: 'Medium Boxes',
    price: 'Price – Ksh 320 (VAT inclusive)',
    size: 'Box Dimensions in cm : 48 x 30 x 34',
    ideal: 'Ideal for :',
    purpose1:
      'Our Small Moving Boxes are ideal for moving, shipping, or storing dense, heavy yet fragile items such as books, kitchenware, linen, foodstuff, and small appliances.',
    purpose2:
      'Medium boxes can be designated for miscellaneous items from different rooms, such as books, small appliances, or decorative items.',
    purpose3:
      'Items that are neither too large nor too small, like kitchen appliances (mixers, blenders) or home decor (vases, picture frames), fit well in medium boxes.',
    purpose4:
      'Medium boxes are suitable for packing clothing, linens, and bedding. ',
    purpose5:
      'Medium boxes can be used to create "essentials" boxes containing everyday items you will need immediately upon arrival at your new home.',
  },
  {
    image: '/laying-boxes.jpg',
    title: 'Sleeping/Laying Boxes',
    price: 'Price – Ksh 825 (VAT inclusive)',
    size: 'Box Dimensions in cm : 102 x 53 x 32',
    ideal: 'Ideal for :',
    purpose1:
      'Our sleeping boxes are perfect for storing and moving trench coats, pants, gowns, and heavy-duty garments.',
    purpose2:
      'Delicate or breakable items such as glassware, ceramics, or electronics can be securely packed within Sleeping/Laying Boxes. ',
    purpose3:
      'Utilizing Sleeping/Laying Boxes for linens and bedding streamlines the packing process and ensures these essentials remain clean and easily accessible upon arrival at the new destination..',
    purpose4:
      'In situations where immediate bedding is needed upon arrival at the new location, Sleeping/Laying Boxes can serve as makeshift sleeping quarters. ',
    purpose5:
      'When disassembling furniture or handling large, unwieldy items such as mattresses or mirrors, Sleeping/Laying Boxes provide a convenient solution. ',
  },
  {
    image: '/wrap2.webp',
    title: 'Bubble Wrap',
    price: 'Price – Ksh 200/meter (VAT inclusive)',
    ideal: 'Ideal for :',
    purpose1:
      'wrapping fragile items like paintings, glass, picture frames, china ware, etc. that are meant for transportation or short-term and long-term storage.',
    purpose2:
      'When packing boxes for moving, its important to fill any empty spaces to prevent items from shifting around during transit.',
    purpose3:
      ' Bubble Wrap can also be used to protect the legs and edges of furniture pieces from scratches, dings, and other damage.',
    purpose4:
      ' For items that are sensitive to temperature fluctuations, such as certain types of artwork or electronics, Bubble Wrap can provide a layer of insulation.',
    purpose5:
      ' For particularly valuable or sentimental items, such as heirlooms or antiques, Bubble Wrap can be used to create a thick protective layer.',
  },
  {
    image: '/packing-tape.png',
    title: 'Packing Tape',
    price: 'Price – Ksh 420/roll (VAT inclusive)',
    ideal: 'Ideal for :',
    purpose1:
      'Very strong adhesive and water resistant. Ideal for sealing carton boxes either meant for storage, transportation and export.',
    purpose2:
      'You can use packing tape to affix labels onto boxes, indicating their contents or destination room.',
    purpose3:
      'acking tape can be used to reinforce the bottoms and sides of boxes, especially for heavy items. ',
    purpose4:
      'When moving smaller items or items that belong together, packing tape can be used to bundle them together.',
    purpose5:
      'In case of minor damage to boxes or furniture during the moving process, packing tape can serve as a temporary fix.',
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
    purpose3:
      'Shrink wrap can be used to bundle items together, such as a set of chairs or a stack of boxes. ',
    purpose4:
      ' If you are moving in inclement weather or transporting items in an open truck or trailer, shrink wrap can provide an additional layer of protection against moisture, rain, and wind.',
    purpose5:
      ' When using moving blankets to protect fragile items or furniture, shrink wrap can be used to secure the blankets in place. ',
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

const products = [
    {
        id:1,
        name: 'T-Shirt',
        href: '#',
        imageSrc: 't-shirt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
      id: 2,
      name: 'Jean Belt',
      href: '#',
      imageSrc: 'jeanbelt1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id:3,
        name: 'T-Shirt',
        href: '#',
        imageSrc: 't-shirt3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$70',
        color: 'Pupple',
    },
    {
        id:4,
        name: 'Touser',
        href: '#',
        imageSrc: 'Touser.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$55',
        color: 'Black',
    },
    {
        id:5,
        name: 'T-Shirts',
        href: '#',
        imageSrc: 't-shirt1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$90',
        color: 'White',
    },
    {
        id:6,
        name: 'Top',
        href: '#',
        imageSrc: 'mixed.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$105',
        color: 'Black',
    },
    {
        id:7,
        name: 'Jean Belt',
        href: '#',
        imageSrc: 'jeanbelt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$55',
        color: 'Black',
    },
    {
        id:8,
        name: 'Sweatshirt',
        href: '#',
        imageSrc: 'sweatshirt1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$90',
        color: 'Gray',
    },
    {
        id:9,
        name: 'Sweatshirt',
        href: '#',
        imageSrc: 'sweatshirt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$96',
        color: 'Cream',
    },
    {
        id:10,
        name: 'Sweatshirt',
        href: '#',
        imageSrc: 'sweatshirt3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$85',
        color: 'White',
    },
    {
        id:11,
        name: 'Sweatshirt',
        href: '#',
        imageSrc: 'sweatshirt4.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
        id:12,
        name: 'Sweatshirt',
        href: '#',
        imageSrc: 'sweatshirt5.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$100',
        color: 'Navy',
    },
    {
        id:13,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$70',
        color: 'Black',
    },
    {
        id:14,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'White',
    },
    {
        id:15,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$53',
        color: 'White',
    },
    {
        id:16,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt4.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Blue',
    },
    {
        id:17,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
        id:18,
        name: 'Shoe',
        href: '#',
        imageSrc: 'shoe.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Brown',
    },
    {
        id:19,
        name: 'Bag',
        href: '#',
        imageSrc: 'bag.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$52',
        color: 'Black',
    },
    {
        id:20,
        name: 'Belt',
        href: '#',
        imageSrc: 'belt.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$15',
        color: 'Black',
    },
    {
        id:1,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
        id:1,
        name: 'T-Shirt',
        href: '#',
        imageSrc: 't-shirt1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
        id:1,
        name: 'T-Shirt',
        href: '#',
        imageSrc: 't-shirt3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
    {
        id:1,
        name: 'Shirt',
        href: '#',
        imageSrc: 'shirt1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$95',
        color: 'Black',
    },
]
  
const TShirt = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default TShirt;
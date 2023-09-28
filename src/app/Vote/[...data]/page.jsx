export default function Page({ params }) {

  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];


  return (
    <>
      <div>Nama: {params.data[0]}</div>
      <div>Nama: {params.data[1]}</div>





    </>
  );
}

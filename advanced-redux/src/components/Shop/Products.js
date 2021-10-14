import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const MOCK_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      name: "A Book",
      description: "A good book",
    },
    {
      id: "p2",
      price: 12,
      name: "Another Book",
      description: "An ok book",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {MOCK_PRODUCTS.map((product) => 
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;

import List from "@/components/ui/list";
import { cn } from "@/lib/utils";

import type { ProductType } from "../product.type";

import ProductItem from "./product-item";

interface IProductListProps {
  products: ProductType[] | undefined;
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <List
      items={products}
      renderItem={(productItem) => <ProductItem {...productItem} />}
      className={cn(
        "grid grid-cols-4 gap-3",
        "xs:grid-cols-1",
        "xsm:grid-cols-2",
        "md:grid-cols-3",
        "2xl:grid-cols-4",
      )}
    />
  );
};

export default ProductList;

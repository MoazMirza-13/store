"use client";
import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import FamilyHall from "./FamilyHall";
import ModernSofa from "./ModernSofa";
import DecentTable from "./DecentTable";
import SimpleSolidSofa from "./SimpleSolidSofa";
export default function Products({ activeCategory }) {
  const products = [
    { category: "Bedroom", component: BedRoom },
    { category: "Modern Bedroom", component: BedRoom },
    { category: "Kitchen", component: Kitchen },
    { category: "Small Kitchen", component: Kitchen },
    { category: "Family Kitchen", component: Kitchen },
    { category: "Family Hall", component: FamilyHall },
    { category: "T.V Hall", component: FamilyHall },
    { category: "Main Hall", component: FamilyHall },
    { category: "Modern Sofa", component: ModernSofa },
    { category: "Comfy Sofa", component: ModernSofa },
    { category: "Decent Table", component: DecentTable },
    { category: "Wide Table", component: DecentTable },
    { category: "Luna Table", component: DecentTable },
    { category: "Simple Solid Sofa", component: SimpleSolidSofa },
    { category: "Simple Soft Sofa", component: SimpleSolidSofa },
  ];
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const renderProduct = () => {
    return filteredProducts.map((product) => {
      const ProductComponent = product.component;
      return <ProductComponent key={product.category} />;
    });
  };
  return (
    <>
      <div>{renderProduct()}</div>
    </>
  );
}

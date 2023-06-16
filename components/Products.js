"use client";
import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import FamilyHall from "./FamilyHall";
import ModernSofa from "./ModernSofa";
import DecentTable from "./DecentTable";
import SimpleSolidSofa from "./SimpleSolidSofa";
export default function Products({ activeCategory }) {
  const renderProduct = () => {
    switch (activeCategory) {
      case "Bedroom":
        return <BedRoom />;
      case "Modern Bedroom":
        return <BedRoom />;
      case "Kitchen":
        return <Kitchen />;
      case "Small Kitchen":
        return <Kitchen />;
      case "Family Kitchen":
        return <Kitchen />;
      case "Decent Table":
        return <DecentTable />;
      case "Wide Table":
        return <DecentTable />;
      case "T.V Hall":
        return <FamilyHall />;
      case "Main Hall":
        return <FamilyHall />;
      case "Family Hall":
        return <FamilyHall />;
      case "Modern Sofa":
        return <ModernSofa />;
      case "Luna Table":
        return <DecentTable />;
      case "Comfy Sofa":
        return <ModernSofa />;
      case "Simple Solid Sofa":
        return <SimpleSolidSofa />;
      case "Simple Soft Sofa":
        return <SimpleSolidSofa />;
      default:
        return <BedRoom />;
    }
  };
  return (
    <>
      <div>{renderProduct()}</div>
    </>
  );
}

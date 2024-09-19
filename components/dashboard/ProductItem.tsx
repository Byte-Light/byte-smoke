import React from "react";

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    subCategory: string;
    description: string;
    price: string;
    category: string;
    imageUrl: string;
  };
  onEdit: (product: ProductItemProps["product"]) => void;
  onDelete: (id: string, imageUrl: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
      <div className="flex items-start">
        <img src={product.imageUrl} alt={product.name} className="w-20 h-20 rounded-lg object-cover mr-4" />
        <div>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p>{product.description}</p>
          <p className="text-sm text-gray-600">${product.price}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={() => onEdit(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Edit
        </button>
        <button onClick={() => onDelete(product.id, product.imageUrl)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

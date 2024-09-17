import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase'; // Ensure the Firebase config path is correct

// Define the Product type (this should match the structure of your Firebase documents)
type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: string;
    subCategory: string;
  };
  
  // Then your existing search function:
  export const searchProducts = async (searchTerm: string) => {
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[]; // Cast to Product[]
  
      // Case-insensitive and partial match filtering
      const filteredProducts = productsList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      return filteredProducts;
    } catch (error) {
      console.error("Error searching products:", error);
      return [];
    }
  };
  
import { useEffect, useState } from 'react';
import { Product, ContextType } from '../types';
import getImage  from './getImage';

export default function useGetFruits(): ContextType {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<{ [key: string]: string | null }>({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/fruits.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);

        const imagePromises = data.map(async (product) => {
          const imageSrc = await getImage(product.name);
          return { [product.name]: imageSrc };
        });

        const imageResults = await Promise.all(imagePromises);
        const imagesObject = Object.assign({}, ...imageResults);
        setImages(imagesObject);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, isLoading, error, images };
}
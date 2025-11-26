import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export const FeaturedProducts = () => {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground mt-1">
              Os mais vendidos e bem avaliados
            </p>
          </div>
          <Link 
            to="/produtos" 
            className="flex items-center gap-1 text-primary hover:underline font-medium"
          >
            Ver Todos
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

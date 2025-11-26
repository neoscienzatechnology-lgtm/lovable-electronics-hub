import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/produto/${product.id}`}>
        <div className="group relative bg-card rounded-xl border border-border overflow-hidden card-hover">
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-3 left-3 z-10 gradient-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-md">
              -{product.discount}%
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur text-muted-foreground hover:text-destructive transition-colors">
            <Heart className="h-4 w-4" />
          </button>

          {/* Image */}
          <div className="aspect-square overflow-hidden bg-secondary/50">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Brand */}
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {product.brand}
            </span>

            {/* Name */}
            <h3 className="font-semibold text-foreground line-clamp-2 min-h-[48px] group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews} avaliações)</span>
            </div>

            {/* Price */}
            <div className="space-y-1">
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                ou 12x de {formatPrice(product.price / 12)}
              </span>
            </div>

            {/* Add to Cart */}
            <Button
              variant="default"
              className="w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          </div>

          {/* Stock indicator */}
          {product.stock <= 5 && (
            <div className="px-4 pb-4">
              <span className="text-xs text-accent font-medium">
                Apenas {product.stock} em estoque!
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

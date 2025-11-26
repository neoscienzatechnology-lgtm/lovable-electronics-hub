import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { ChevronRight } from 'lucide-react';

export const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Navegue por Categoria
            </h2>
            <p className="text-muted-foreground mt-1">
              Encontre exatamente o que você procura
            </p>
          </div>
          <Link 
            to="/produtos" 
            className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium"
          >
            Ver Todas
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/produtos?categoria=${category.slug}`}
                className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <span className="text-xs text-muted-foreground mt-1">
                  {category.productCount} produtos
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

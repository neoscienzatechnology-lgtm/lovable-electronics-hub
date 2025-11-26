import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const PromoBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8"
          >
            <div className="relative z-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Oferta Especial
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                Notebooks até 30% OFF
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xs">
                MacBook, Dell, Lenovo e muito mais com preços imbatíveis.
              </p>
              <Link to="/produtos?categoria=notebooks">
                <Button variant="default">
                  Conferir Ofertas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-20">
              <span className="text-[200px]">💻</span>
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 p-8"
          >
            <div className="relative z-10">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Lançamento
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                PlayStation 5 Disponível
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Console de última geração em estoque. Aproveite enquanto dura!
              </p>
              <Link to="/produtos?categoria=games">
                <Button variant="accent">
                  Comprar Agora
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-20">
              <span className="text-[200px]">🎮</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Adicione produtos ao carrinho para continuar comprando.
            </p>
            <Link to="/produtos">
              <Button variant="hero" size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Explorar Produtos
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Carrinho de Compras
          </h1>
          <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
            Limpar Carrinho
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border"
              >
                {/* Image */}
                <Link to={`/produto/${item.product.id}`} className="flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link to={`/produto/${item.product.id}`}>
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.product.brand}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center justify-between sm:gap-6">
                      <span className="text-lg font-bold text-foreground">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24 bg-card rounded-xl border border-border p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} itens)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frete</span>
                  <span className="text-green-500">Grátis</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-foreground py-6">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                ou 12x de {formatPrice(totalPrice / 12)} sem juros
              </p>

              <Link to="/checkout">
                <Button variant="hero" size="xl" className="w-full">
                  Finalizar Compra
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link to="/produtos" className="block mt-4">
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

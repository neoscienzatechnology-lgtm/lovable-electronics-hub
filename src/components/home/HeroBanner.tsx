import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, CreditCard, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              🔥 Black Friday Antecipada
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Os Melhores </span>
              <span className="text-gradient">Eletrônicos</span>
              <br />
              <span className="text-foreground">com os Melhores Preços</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Descubra smartphones, notebooks, hardware e muito mais com descontos imperdíveis. 
              Entrega rápida e garantia estendida.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/produtos">
                <Button variant="hero" size="xl">
                  Ver Ofertas
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/produtos?categoria=smartphones">
                <Button variant="outline" size="xl">
                  Smartphones
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800"
                alt="iPhone 15 Pro"
                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 -left-4 md:left-0 bg-card border border-border rounded-xl p-4 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">iPhone 15 Pro</p>
                  <p className="text-xs text-muted-foreground">A partir de R$ 9.499</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 -right-4 md:right-0 bg-card border border-border rounded-xl p-4 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Até 40% OFF</p>
                  <p className="text-xs text-muted-foreground">Em produtos selecionados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { icon: Truck, label: 'Frete Grátis', desc: 'Acima de R$ 299' },
            { icon: Shield, label: 'Garantia', desc: 'Até 3 anos' },
            { icon: CreditCard, label: '12x Sem Juros', desc: 'No cartão' },
            { icon: Headphones, label: 'Suporte 24h', desc: 'Atendimento' },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border"
            >
              <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

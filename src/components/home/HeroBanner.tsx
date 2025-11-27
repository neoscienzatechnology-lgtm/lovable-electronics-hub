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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Descubra smartphones, notebooks, hardware e muito mais com descontos imperdíveis. 
              Entrega rápida e garantia estendida.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
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

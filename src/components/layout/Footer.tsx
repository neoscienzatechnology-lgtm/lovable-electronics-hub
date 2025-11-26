import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gradient">Tech</span>
                <span className="text-foreground">Store</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sua loja de eletrônicos favorita. Os melhores produtos com os melhores preços.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/produtos?categoria=smartphones" className="text-sm text-muted-foreground hover:text-primary transition-colors">Smartphones</Link></li>
              <li><Link to="/produtos?categoria=notebooks" className="text-sm text-muted-foreground hover:text-primary transition-colors">Notebooks</Link></li>
              <li><Link to="/produtos?categoria=hardware" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hardware</Link></li>
              <li><Link to="/produtos?categoria=acessorios" className="text-sm text-muted-foreground hover:text-primary transition-colors">Acessórios</Link></li>
              <li><Link to="/produtos?categoria=games" className="text-sm text-muted-foreground hover:text-primary transition-colors">Games</Link></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contato@techstore.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 TechStore. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png" alt="PayPal" className="h-6 opacity-60" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-60" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

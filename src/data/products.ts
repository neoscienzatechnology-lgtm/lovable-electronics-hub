export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  images: string[];
  specs: Record<string, string>;
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "1", name: "Smartphones", slug: "smartphones", icon: "📱", productCount: 45 },
  { id: "2", name: "Notebooks", slug: "notebooks", icon: "💻", productCount: 32 },
  { id: "3", name: "Hardware", slug: "hardware", icon: "🖥️", productCount: 78 },
  { id: "4", name: "Acessórios", slug: "acessorios", icon: "🎧", productCount: 120 },
  { id: "5", name: "Smart Home", slug: "smart-home", icon: "🏠", productCount: 25 },
  { id: "6", name: "Games", slug: "games", icon: "🎮", productCount: 56 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    description: "O iPhone mais avançado já criado. Com chip A17 Pro, câmera de 48MP e corpo em titânio.",
    price: 9499.00,
    originalPrice: 10999.00,
    category: "smartphones",
    brand: "Apple",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    ],
    specs: {
      "Tela": "6.7\" Super Retina XDR OLED",
      "Processador": "A17 Pro",
      "Câmera": "48MP + 12MP + 12MP",
      "Bateria": "4422 mAh",
      "Armazenamento": "256GB",
      "RAM": "8GB"
    },
    stock: 15,
    rating: 4.9,
    reviews: 234,
    featured: true,
    discount: 14
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 512GB",
    description: "O poder da Galaxy AI. Câmera de 200MP, S Pen integrada e tela Dynamic AMOLED 2X.",
    price: 8999.00,
    originalPrice: 9999.00,
    category: "smartphones",
    brand: "Samsung",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    ],
    specs: {
      "Tela": "6.8\" Dynamic AMOLED 2X",
      "Processador": "Snapdragon 8 Gen 3",
      "Câmera": "200MP + 12MP + 50MP + 10MP",
      "Bateria": "5000 mAh",
      "Armazenamento": "512GB",
      "RAM": "12GB"
    },
    stock: 22,
    rating: 4.8,
    reviews: 189,
    featured: true,
    discount: 10
  },
  {
    id: "3",
    name: "MacBook Pro 14\" M3 Pro",
    description: "Potência incrível para profissionais. Chip M3 Pro, tela Liquid Retina XDR e até 18h de bateria.",
    price: 18999.00,
    originalPrice: 21999.00,
    category: "notebooks",
    brand: "Apple",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    ],
    specs: {
      "Tela": "14.2\" Liquid Retina XDR",
      "Processador": "Apple M3 Pro",
      "GPU": "18 núcleos",
      "Bateria": "Até 18 horas",
      "Armazenamento": "512GB SSD",
      "RAM": "18GB"
    },
    stock: 8,
    rating: 4.9,
    reviews: 156,
    featured: true,
    discount: 14
  },
  {
    id: "4",
    name: "NVIDIA RTX 4090 24GB",
    description: "A GPU mais poderosa do mundo para gamers e criadores. Ray tracing, DLSS 3 e 24GB GDDR6X.",
    price: 12999.00,
    category: "hardware",
    brand: "NVIDIA",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800",
    ],
    specs: {
      "Memória": "24GB GDDR6X",
      "CUDA Cores": "16384",
      "Boost Clock": "2.52 GHz",
      "TDP": "450W",
      "Interface": "PCIe 4.0 x16",
      "Saídas": "3x DisplayPort, 1x HDMI"
    },
    stock: 5,
    rating: 4.9,
    reviews: 89,
    featured: true
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    description: "Headphone premium com cancelamento de ruído líder do mercado e áudio Hi-Res.",
    price: 2299.00,
    originalPrice: 2799.00,
    category: "acessorios",
    brand: "Sony",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
    ],
    specs: {
      "Driver": "30mm",
      "Resposta de Frequência": "4Hz - 40kHz",
      "Cancelamento de Ruído": "Sim, adaptativo",
      "Bateria": "Até 30 horas",
      "Bluetooth": "5.2",
      "Codecs": "LDAC, AAC, SBC"
    },
    stock: 30,
    rating: 4.8,
    reviews: 312,
    discount: 18
  },
  {
    id: "6",
    name: "PlayStation 5 Slim",
    description: "Console de última geração com SSD ultra-rápido, ray tracing e centenas de jogos exclusivos.",
    price: 3999.00,
    category: "games",
    brand: "Sony",
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800",
    ],
    specs: {
      "CPU": "AMD Zen 2 8 núcleos",
      "GPU": "10.28 TFLOPS, RDNA 2",
      "RAM": "16GB GDDR6",
      "Armazenamento": "1TB SSD",
      "Resolução": "Até 4K 120Hz",
      "Ray Tracing": "Sim"
    },
    stock: 12,
    rating: 4.9,
    reviews: 567
  },
  {
    id: "7",
    name: "Amazon Echo Show 10",
    description: "Smart display com tela HD que te acompanha, Alexa integrada e hub de casa inteligente.",
    price: 1899.00,
    originalPrice: 2199.00,
    category: "smart-home",
    brand: "Amazon",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800",
    ],
    specs: {
      "Tela": "10.1\" HD",
      "Câmera": "13MP com movimento",
      "Alto-falantes": "2x 1\" tweeter + 3\" woofer",
      "Conectividade": "Wi-Fi 6, Bluetooth, Zigbee",
      "Assistente": "Alexa",
      "Rotação": "350° automático"
    },
    stock: 25,
    rating: 4.6,
    reviews: 145,
    discount: 14
  },
  {
    id: "8",
    name: "Dell Alienware Aurora R16",
    description: "Desktop gamer de alto desempenho com Intel Core i9 e RTX 4080 para gaming extremo.",
    price: 24999.00,
    category: "hardware",
    brand: "Dell",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",
    ],
    specs: {
      "Processador": "Intel Core i9-14900KF",
      "GPU": "NVIDIA RTX 4080 16GB",
      "RAM": "32GB DDR5",
      "Armazenamento": "2TB NVMe SSD",
      "Refrigeração": "Líquida",
      "SO": "Windows 11 Pro"
    },
    stock: 3,
    rating: 4.7,
    reviews: 45
  },
  {
    id: "9",
    name: "Logitech MX Master 3S",
    description: "Mouse premium para produtividade com scroll eletromagnético e sensor 8K DPI.",
    price: 699.00,
    category: "acessorios",
    brand: "Logitech",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    ],
    specs: {
      "Sensor": "Darkfield 8000 DPI",
      "Botões": "7 programáveis",
      "Bateria": "Até 70 dias",
      "Conexão": "Bluetooth, USB-C, Unifying",
      "Compatibilidade": "Windows, macOS, Linux",
      "Scroll": "MagSpeed eletromagnético"
    },
    stock: 45,
    rating: 4.8,
    reviews: 234
  },
  {
    id: "10",
    name: "ASUS ROG Swift PG32UQX",
    description: "Monitor gaming 4K 144Hz com Mini LED, HDR1400 e G-Sync Ultimate.",
    price: 15999.00,
    category: "hardware",
    brand: "ASUS",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800",
    ],
    specs: {
      "Tela": "32\" IPS 4K",
      "Taxa de Atualização": "144Hz",
      "Tempo de Resposta": "1ms GTG",
      "HDR": "HDR1400 Mini LED",
      "Sync": "G-Sync Ultimate",
      "Conexões": "HDMI 2.1, DisplayPort 1.4"
    },
    stock: 4,
    rating: 4.9,
    reviews: 67,
    featured: true
  },
  {
    id: "11",
    name: "Xiaomi Mi 14 Ultra",
    description: "Smartphone flagship com câmera Leica, Snapdragon 8 Gen 3 e carregamento de 90W.",
    price: 6499.00,
    category: "smartphones",
    brand: "Xiaomi",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    ],
    specs: {
      "Tela": "6.73\" LTPO AMOLED",
      "Processador": "Snapdragon 8 Gen 3",
      "Câmera": "50MP Leica Quad",
      "Bateria": "5000 mAh",
      "Carregamento": "90W + 50W wireless",
      "RAM": "16GB"
    },
    stock: 18,
    rating: 4.7,
    reviews: 98
  },
  {
    id: "12",
    name: "SteelSeries Arctis Nova Pro",
    description: "Headset premium para gaming com áudio hi-fi, ANC e base DAC de alta fidelidade.",
    price: 2499.00,
    category: "acessorios",
    brand: "SteelSeries",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800",
    ],
    specs: {
      "Driver": "40mm Neodímio",
      "Resposta": "10Hz - 40kHz",
      "ANC": "4 microfones híbrido",
      "DAC": "ESS Sabre 9218",
      "Conexão": "USB-C, 3.5mm, Bluetooth",
      "Bateria": "Dual infinita (hot-swap)"
    },
    stock: 15,
    rating: 4.8,
    reviews: 156
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const searchProducts = (query: string) => 
  products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  );

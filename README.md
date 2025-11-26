# TechStore - E-commerce de Eletrônicos

Loja virtual de eletrônicos com os melhores preços em smartphones, notebooks, hardware, acessórios e muito mais.

## Stack Tecnológica

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Roteamento**: [React Router DOM](https://reactrouter.com/)
- **Estado Global**: [TanStack React Query](https://tanstack.com/query)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)

## Estrutura do Projeto

```
/src
  /components      # Componentes reutilizáveis
    /home          # Componentes da página inicial
    /layout        # Header, Footer, Layout
    /products      # Componentes de produtos
    /ui            # Componentes base shadcn/ui
  /contexts        # Contextos React (CartContext)
  /data            # Dados e constantes
  /hooks           # Hooks customizados
  /lib             # Utilitários
  /pages           # Páginas da aplicação
/public            # Assets estáticos
```

## Instalação

### Pré-requisitos

- Node.js 18+ 
- npm 9+

### Passos

```bash
# Clone o repositório
git clone <URL_DO_REPOSITÓRIO>
cd <NOME_DO_PROJETO>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:8080`.

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção via Vite |
| `npm run lint` | Executa verificação de código com ESLint |
| `npm start` | Inicia o servidor serve na porta 80 (produção) |
| `npm run start:local` | Inicia o servidor serve na porta 3000 (local) |

## Deploy no SquareCloud

### Configuração

O projeto já possui o arquivo `squarecloud.app` configurado para deploy estático.

### Passos para Deploy

1. **Crie uma conta no SquareCloud**: Acesse [squarecloud.app](https://squarecloud.app/) e faça login.

2. **Prepare o projeto**: Certifique-se de que o build funciona localmente:
   ```bash
   npm run build
   ```

3. **Faça upload do projeto**:
   - Crie um arquivo `.zip` contendo todos os arquivos do projeto (exceto `node_modules` e `dist`)
   - No painel do SquareCloud, faça upload do arquivo `.zip`
   - O SquareCloud executará automaticamente `npm install && npm run build`

4. **Aguarde o deploy**: O SquareCloud irá construir e servir os arquivos da pasta `./dist`.

### Variáveis de Ambiente

Se o projeto necessitar de variáveis de ambiente, configure-as no painel do SquareCloud ou crie um arquivo `.env` baseado no `.env.example`.

## Desenvolvimento

### Adicionando Componentes shadcn/ui

```bash
npx shadcn@latest add <nome-do-componente>
```

### Estrutura de Componentes

- Componentes de UI base ficam em `/src/components/ui/`
- Componentes de negócio ficam em suas respectivas pastas por feature

## Licença

Este projeto é privado e de uso restrito.

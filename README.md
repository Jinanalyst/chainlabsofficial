# ChainLabs

Company introduction website for ChainLabs — a platform studio building AI-powered products that connect information, work, payments, and communities into one ecosystem (ChainBrief · ChainWork · ChainPay · ChainMeet).

## Stack

- Vite + React 18
- Tailwind CSS 3
- lucide-react for icons

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build output goes to `dist/`. Ready to deploy on Vercel (zero config — pick "Vite" framework preset).

## Structure

```
src/
  App.jsx              # composition + reveal observer
  index.css            # tailwind layers + design tokens
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Ecosystem.jsx      # ChainBrief → ChainWork → ChainPay → ChainMeet flow
    Products.jsx       # four product cards
    Why.jsx            # problem / solution
    BusinessModel.jsx
    Roadmap.jsx        # 5 phases
    FinalCTA.jsx
    Footer.jsx
    BackgroundOrbs.jsx
```

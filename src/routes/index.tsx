import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle, Menu, X, Heart } from "lucide-react";
import { useState } from "react";

// Imagens
import logo from "@/assets/logo-vo-julia.png";
import hero from "@/assets/hero-paes.jpg";

import imgPaes from "@/assets/images-paes.jpg";
import imgBolos from "@/assets/images-bolos.jpg";
import imgDoces from "@/assets/images-doces.jpg";
import imgSalgados from "@/assets/salgados01.jpg";
import imgMercearia from "@/assets/itens-mercearia.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "554191562729";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá Vó Julia! Gostaria de fazer um pedido."
)}`;

const produtos = [
  {
    nome: "Pães Artesanais",
    img: imgPaes,
    items: ["Pão Francês", "Pão de Forma", "Baguete", "Pão Caseiro"],
  },
  {
    nome: "Bolos",
    img: imgBolos,
    items: ["Bolo de Cenoura", "Bolo de Fubá", "Bolo de Chocolate", "Bolo Formigueiro"],
  },
  {
    nome: "Doces",
    img: imgDoces,
    items: ["Brigadeiro", "Beijinho", "Cocada", "Quindim"],
  },
  {
    nome: "Salgados",
    img: imgSalgados,
    items: ["Coxinha", "Pastel", "Esfiha", "Empada"],
  },
  {
    nome: "Mercearia",
    img: imgMercearia,
    items: ["Arroz e Feijão", "Café e Açúcar", "Conservas", "Itens do dia a dia"],
  },
]

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-creme/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Vó Julia" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-script text-2xl text-brown leading-none">Vó Julia</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-brown/80 hover:text-vermelho transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vermelho hover:bg-vermelho/90 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Peça pelo WhatsApp
          </a>
        </nav>
        <button className="md:hidden text-brown" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-creme">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-brown font-medium py-1">
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-vermelho text-white font-medium px-4 py-2 rounded-full"
            >
              <MessageCircle className="h-4 w-4" /> Peça pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative h-[78vh] min-h-[480px] w-full overflow-hidden">
        <img src={hero} alt="Pães artesanais da Vó Julia" className="absolute inset-0 w-full h-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-start text-creme">
          <span className="inline-flex items-center gap-2 bg-creme/15 backdrop-blur px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-creme/30">
            Panificadora & Mercearia
          </span>
          <h1 className="mt-4 font-script text-5xl sm:text-7xl md:text-8xl leading-none drop-shadow-md">
            Vó Julia
          </h1>
          <p className="mt-4 max-w-xl text-lg sm:text-2xl text-creme/95">
            "Feito com carinho, como na casa da vó."
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-vermelho hover:bg-vermelho/90 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> Peça pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-creme text-brown font-medium px-6 py-3 rounded-full hover:bg-bege transition-colors"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-creme">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src={logo} alt="Logo Vó Julia" className="w-full max-w-sm mx-auto rounded-2xl shadow-md" />
        </div>
        <div>
          <span className="text-vermelho font-medium uppercase tracking-wider text-sm">Sobre Nós</span>
          <h2 className="font-script text-5xl text-brown mt-2">Nossa História</h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            A <strong>Panificadora e Mercearia Vó Julia</strong> nasceu do amor pelas receitas
            que atravessam gerações. Tudo começou na cozinha da nossa querida Vó Julia, onde
            o cheirinho de pão fresquinho, bolo no forno e café passado na hora reunia a
            família todos os dias.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Hoje, levamos esse mesmo carinho para o nosso bairro. Cada pão, cada doce e cada
            produto da nossa mercearia é escolhido com cuidado, para que você sinta o gostinho
            de casa em cada visita.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-vermelho font-medium">
            <Heart className="h-4 w-4 fill-vermelho" /> Feito com carinho, como na casa da vó.
          </p>
        </div>
      </div>
    </section>
  );
}

function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-bege/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-vermelho font-medium uppercase tracking-wider text-sm">Nossos Produtos</span>
          <h2 className="font-script text-5xl text-brown mt-2">Direto do Forno</h2>
          <p className="mt-4 text-foreground/75">
            Variedade fresquinha todos os dias — pães, bolos, doces, salgados e os itens
            essenciais da sua mercearia.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((p) => (
            <article key={p.nome} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.nome}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-script text-3xl text-brown">{p.nome}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.items.map((i) => (
                    <li key={i} className="text-xs bg-creme text-brown px-3 py-1 rounded-full border border-border">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-20 bg-creme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
        <div>
          <span className="text-vermelho font-medium uppercase tracking-wider text-sm">Contato</span>
          <h2 className="font-script text-5xl text-brown mt-2">Venha nos Visitar</h2>
          <p className="mt-4 text-foreground/75">
            Estamos esperando você para um cafezinho e um pão quentinho.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="shrink-0 h-10 w-10 rounded-full bg-vermelho/10 text-vermelho grid place-items-center">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-brown">Endereço</p>
                <p className="text-foreground/80">R. José de Assunção Bandeira, Campina Grande do Sul - PR, 83430-000</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 h-10 w-10 rounded-full bg-vermelho/10 text-vermelho grid place-items-center">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-brown">Telefone</p>
                <a href="tel:+554191562729" className="text-foreground/80 hover:text-vermelho">(41) 9156-2729</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 h-10 w-10 rounded-full bg-vermelho/10 text-vermelho grid place-items-center">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-brown">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-vermelho">
                  (41) 9156-2729
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 h-10 w-10 rounded-full bg-vermelho/10 text-vermelho grid place-items-center">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-brown">Horário de Funcionamento</p>
                <p className="text-foreground/80">Seg a Sáb: 07h às 21h</p>
                <p className="text-foreground/80">Domingo: 07h às 21h</p>
              </div>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-vermelho hover:bg-vermelho/90 text-white font-medium px-6 py-3 rounded-full shadow-sm transition-colors"
          >
            <MessageCircle className="h-5 w-5" /> Peça pelo WhatsApp
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[400px]">
          <iframe
            title="Localização Vó Julia"
            src="https://www.google.com/maps?q=-25.139918,-48.855258&output=embed&z=16"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brown text-creme/90 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Vó Julia" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-script text-2xl text-creme leading-none">Vó Julia</p>
            <p className="text-xs text-creme/70">Panificadora & Mercearia</p>
          </div>
        </div>
        <p className="text-sm text-creme/70">© {new Date().getFullYear()} Vó Julia — Feito com carinho ♥</p>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <Contato />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}

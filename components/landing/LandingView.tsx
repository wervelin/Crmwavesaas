"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Users,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronDown,
  Kanban,
  Headphones,
  XCircle,
  Play,
} from "lucide-react";

interface LandingViewProps {
  marcaNome: string;
}

export function LandingView({ marcaNome }: LandingViewProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* ──────────────────────────────────────────────────────────
          NAVBAR
      ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#070A11]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20">
              <Bot className="h-5 w-5 font-bold" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white">{marcaNome}</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-400 border border-emerald-500/20">
                CRM
              </span>
            </div>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#como-funciona" className="transition hover:text-emerald-400">
              Como Funciona
            </a>
            <a href="#recursos" className="transition hover:text-emerald-400">
              Recursos
            </a>
            <a href="#planos" className="transition hover:text-emerald-400">
              Planos
            </a>
            <a href="#duvidas" className="transition hover:text-emerald-400">
              Dúvidas
            </a>
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 transition hover:text-white px-3 py-1.5"
            >
              Entrar
            </Link>
            <Link
              href="/signup"
              className="group relative inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400 hover:shadow-emerald-500/30"
            >
              <span>Criar Conta</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agente de Vendas com IA nativo no WhatsApp</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15]">
              Transforme seu WhatsApp em uma máquina de vendas{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                24 horas por dia
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 sm:text-xl sm:leading-relaxed">
              O <strong>{marcaNome}</strong> atende seus clientes em <strong>5 segundos</strong>, qualifica o interesse, tira dúvidas da sua empresa e agenda no calendário — tudo integrado a um <strong>Funil Kanban</strong> visual completo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 hover:shadow-emerald-500/40"
              >
                <span>Começar Agora Gratuitamente</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#demonstracao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-base font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                <Play className="h-4 w-4 fill-current text-emerald-400" />
                <span>Ver Demonstração</span>
              </a>
            </div>

            {/* Micro selos de confiança */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Sem risco de banimento (ritmo humano)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Vários atendentes em 1 único número
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Configuração guiada em 5 minutos
              </span>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              SIMULADOR INTERATIVO
          ────────────────────────────────────────────────────────── */}
          <div id="demonstracao" className="mt-16 md:mt-24">
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-4 sm:p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    Ao Vivo: Atendimento com IA + Funil Kanban
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Lead qualificado às 21:42 (Fora do expediente)
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* LADO 1: WhatsApp Simulador */}
                <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-[#06090E] p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      IA
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Assistente {marcaNome} (SDR)</p>
                      <p className="text-xs text-emerald-400">online agora</p>
                    </div>
                  </div>

                  <div className="space-y-3 py-4 text-xs">
                    {/* Mensagem do Cliente */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 px-3.5 py-2 text-slate-200">
                        <p>Olá! Vi o anúncio de vocês. Como funciona o CRM para empresas?</p>
                        <span className="block mt-1 text-[10px] text-slate-400 text-right">21:42</span>
                      </div>
                    </div>

                    {/* Resposta da IA - Bolha 1 */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-700/70 border border-emerald-500/30 px-3.5 py-2 text-white">
                        <p>Olá! Tudo bem? Funciona perfeitamente! 😊</p>
                        <span className="block mt-1 text-[10px] text-emerald-200 text-right">21:42</span>
                      </div>
                    </div>

                    {/* Resposta da IA - Bolha 2 */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-700/70 border border-emerald-500/30 px-3.5 py-2 text-white">
                        <p>Ele atende seus clientes sozinho no WhatsApp, qualifica quem tem interesse e atualiza o funil de vendas.</p>
                        <span className="block mt-1 text-[10px] text-emerald-200 text-right">21:42</span>
                      </div>
                    </div>

                    {/* Pergunta de Qualificação */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-700/70 border border-emerald-500/30 px-3.5 py-2 text-white">
                        <p>Quantos contatos ou atendimentos vocês costumam receber por dia hoje?</p>
                        <span className="block mt-1 text-[10px] text-emerald-200 text-right">21:43</span>
                      </div>
                    </div>

                    {/* Resposta do Cliente */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 px-3.5 py-2 text-slate-200">
                        <p>Recebemos cerca de 30 a 50 leads por dia!</p>
                        <span className="block mt-1 text-[10px] text-slate-400 text-right">21:43</span>
                      </div>
                    </div>

                    {/* IA Fechando Agendamento */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-700/70 border border-emerald-500/30 px-3.5 py-2 text-white">
                        <p>Sensacional! O {marcaNome} Pro dá conta perfeitamente dessa demanda. Posso agendar uma demonstração rápida amanhã às 14h com nosso especialista?</p>
                        <span className="block mt-1 text-[10px] text-emerald-200 text-right">21:43</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="h-3.5 w-3.5" /> IA digitando com ritmo humano...
                    </span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                      Resposta: 4s
                    </span>
                  </div>
                </div>

                {/* LADO 2: Kanban CRM */}
                <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#090D15] p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Kanban className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                          Funil de Vendas ({marcaNome} Kanban)
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">3 Oportunidades (R$ 14.800)</span>
                    </div>

                    {/* Colunas do Kanban */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="rounded-lg bg-slate-900/80 border border-slate-800/80 p-2">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 pb-2 border-b border-slate-800 mb-2">
                          <span>Novo Lead</span>
                          <span className="rounded bg-slate-800 px-1.5 py-0.2">1</span>
                        </div>
                        <div className="rounded border border-slate-800 bg-slate-950 p-2 opacity-50">
                          <p className="text-[11px] font-semibold text-slate-300">Dr. Marcos Silva</p>
                          <p className="text-[10px] text-slate-500">Google Ads</p>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-900/80 border border-slate-800/80 p-2">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 pb-2 border-b border-slate-800 mb-2">
                          <span>Qualificado</span>
                          <span className="rounded bg-slate-800 px-1.5 py-0.2">1</span>
                        </div>
                        <div className="rounded border border-slate-800 bg-slate-950 p-2 opacity-50">
                          <p className="text-[11px] font-semibold text-slate-300">Imobiliária Prime</p>
                          <p className="text-[10px] text-slate-500">5 Corretores</p>
                        </div>
                      </div>

                      {/* Coluna 3: Agendado */}
                      <div className="rounded-lg bg-emerald-950/20 border border-emerald-500/40 p-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-8 w-8 bg-emerald-500/10 rounded-bl-lg flex items-center justify-center">
                          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-medium text-emerald-400 pb-2 border-b border-emerald-500/30 mb-2">
                          <span>Agendado</span>
                          <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-emerald-300 font-bold">NOVO</span>
                        </div>
                        <div className="rounded border border-emerald-500/30 bg-slate-950 p-2.5 shadow-lg">
                          <span className="inline-block text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1">
                            MOVIDO PELA IA
                          </span>
                          <p className="text-xs font-bold text-white">Clínica Odonto Vida</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">Demanda: 40 leads/dia</p>
                          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                            <span className="text-emerald-400 font-bold">R$ 297/mês</span>
                            <span className="text-slate-400">Amanhã 14:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-300 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <p>
                      <strong>Zero trabalho manual:</strong> A IA conversou, qualificou e posicionou o card na coluna de agendamento com a data reservada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          ANTES VS DEPOIS
      ────────────────────────────────────────────────────────── */}
      <section id="como-funciona" className="border-t border-slate-800/80 bg-[#090D15] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              A Realidade do Mercado
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Responder em 5 minutos aumenta as chances de fechamento em até 400%
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* O jeito antigo */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <XCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sem o {marcaNome}</h3>
                  <p className="text-xs text-rose-400">O jeito comum que perde clientes</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>O lead manda mensagem às 21h ou no domingo e fica sem resposta até o dia seguinte (quando já comprou do concorrente).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Vendedor esquece de fazer follow-up de quem disse "vou ver e te aviso".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Conversas de clientes presas no WhatsApp pessoal de funcionários sem controle.</span>
                </li>
              </ul>
            </div>

            {/* Com o CRM */}
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-6 sm:p-8 shadow-xl shadow-emerald-950/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Com o {marcaNome}</h3>
                  <p className="text-xs text-emerald-400">Sua operação comercial no piloto automático</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Atendimento em <strong>5 segundos</strong> em qualquer dia e horário, com simpatia e ritmo humano natural.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Follow-up inteligente programado que resgata o cliente que sumiu sem ser chato.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Toda a equipe atende pelo mesmo número oficial com histórico e funil unificados.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          RECURSOS PRINCIPAIS
      ────────────────────────────────────────────────────────── */}
      <section id="recursos" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Recursos Construídos para Vender
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tudo o que sua equipe precisa para bater metas sem perder a cabeça
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Agente de Vendas com IA (SDR)</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Ele conversa como uma pessoa real, entende o contexto, tira dúvidas sobre seus produtos e conduz o lead para o fechamento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Atendimento em 1 Número</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Coloque 2, 5, 10 ou 50 pessoas da sua equipe atendendo pelo mesmo WhatsApp oficial, com divisão de carteira e filas organizadas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Kanban className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Funil Visual (Kanban de Negócios)</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Visualize onde está cada negócio da empresa. Arraste cards, veja o valor total em negociação e saiba quem precisa de atenção.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Follow-up Automático que Resgata Vendas</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                O cliente esfriou? O sistema manda uma mensagem personalizada após 2 horas ou 1 dia para retomar o contato com simpatia.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Transbordo Humano Inteligente</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Quando o cliente pede para falar com uma pessoa, a IA passa a conversa na hora com o resumo de tudo o que foi falado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 hover:border-emerald-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Base de Conhecimento Oficial</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Suba seu catálogo, tabela de preços e regras. A IA responde estritamente baseada no seu negócio, sem inventar valores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          PLANOS E PREÇOS
      ────────────────────────────────────────────────────────── */}
      <section id="planos" className="border-t border-slate-800/80 bg-[#090D15] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Planos e Assinaturas
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Escolha o plano ideal para a sua empresa
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Sem taxas escondidas. Cancele quando quiser.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* PLANO 1 */}
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="text-xs text-slate-400 mt-1">Para profissionais e negócios no início.</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">R$ 147</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>1 Conexão</strong> de WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Até <strong>3 Atendentes</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>1 Agente de IA para Atendimento</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Funil Kanban completo</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/signup"
                className="mt-8 block w-full rounded-xl border border-slate-700 bg-slate-800 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Começar no Starter
              </Link>
            </div>

            {/* PLANO 2 (PRO) */}
            <div className="relative rounded-2xl border-2 border-emerald-500 bg-[#0B1320] p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/40">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950">
                Mais Escolhido
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Pro</h3>
                <p className="text-xs text-emerald-400 mt-1">Para empresas que querem acelerar vendas.</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">R$ 297</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>2 Conexões</strong> de WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Até <strong>10 Atendentes</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Agentes de IA Ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Follow-up Automático</strong> inteligente</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Transcrição de áudio e leitura de imagens</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/signup"
                className="mt-8 block w-full rounded-xl bg-emerald-500 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Começar no Pro
              </Link>
            </div>

            {/* PLANO 3 */}
            <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Scale</h3>
                <p className="text-xs text-slate-400 mt-1">Para grandes equipes e operações avançadas.</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">R$ 597</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>5 Conexões</strong> de WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Atendentes <strong>Ilimitados</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Múltiplos Funis de Vendas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Integrações com Webhooks e APIs</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/signup"
                className="mt-8 block w-full rounded-xl border border-slate-700 bg-slate-800 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Começar no Scale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FAQ (DÚVIDAS FREQUENTES)
      ────────────────────────────────────────────────────────── */}
      <section id="duvidas" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Tire Suas Dúvidas
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Perguntas frequentes sobre o {marcaNome}
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Preciso deixar o celular ou computador ligado 24h?",
                a: `Não! O ${marcaNome} roda 100% em nuvem no servidor. Seu WhatsApp continua atendendo e vendendo mesmo com seu computador desligado ou seu celular sem bateria.`,
              },
              {
                q: "A IA pode inventar preços ou condições que eu não autorizei?",
                a: "Não. O agente utiliza a Base de Conhecimento oficial da sua empresa. Ele só responde com base nos documentos, tabelas e regras que você cadastrar.",
              },
              {
                q: "Existe risco de o meu WhatsApp ser banido?",
                a: `O ${marcaNome} possui ritmo anti-banimento configurável. Ele digita como um humano de verdade, envia mensagens curtas com pausas naturais e não faz disparos em massa aleatórios de spam.`,
              },
              {
                q: "Posso transferir a conversa para um atendente humano a qualquer momento?",
                a: "Sim! A qualquer momento um humano pode assumir o chat, ou o próprio robô transfere automaticamente quando o cliente pede 'falar com atendente'.",
              },
              {
                q: "Como funciona a integração com Google Agenda?",
                a: `Quando a empresa conecta o Google Agenda, o ${marcaNome} mostra a ocupação da agenda e cria, altera e cancela os agendamentos pedidos pelo cliente de forma automática.`,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#0B0F19] overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-emerald-400"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform text-slate-400 ${
                      faqOpen === idx ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          CTA FINAL
      ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-slate-800/80 bg-gradient-to-b from-[#0B0F19] to-[#06080F] py-20 text-center">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pare de perder vendas no WhatsApp por falta de resposta rápida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Crie sua conta agora mesmo, conecte seu número e veja seus leads sendo atendidos e qualificados com inteligência artificial hoje mesmo.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              <span>Começar Agora Gratuitamente</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FOOTER (Com links legais obrigatórios)
      ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800 bg-[#05070B] py-10 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-emerald-400" />
            <span className="font-semibold text-slate-200">{marcaNome}</span>
            <span>— Todos os direitos reservados.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/login" className="hover:text-white transition">
              Entrar
            </Link>
            <Link href="/signup" className="hover:text-white transition">
              Criar Conta
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition">
              Termos de Uso
            </Link>
            <Link href="/legal/privacy" className="hover:text-white transition">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


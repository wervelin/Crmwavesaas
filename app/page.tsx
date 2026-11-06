import { redirect } from "next/navigation";

import { marcaDaSaida } from "@/lib/branding/saida";
import { createClient } from "@/lib/supabase/server";
import { LandingView } from "@/components/landing/LandingView";

/**
 * A página inicial pública.
 *
 * Quem tem sessão segue direto para o painel (/app).
 * Quem não tem sessão vê a Landing Page completa de vendas e apresentação do produto,
 * com links para Política de Privacidade e Termos de Uso (em conformidade com o Google).
 */
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/app");

  const marca = await marcaDaSaida(null);

  return <LandingView marcaNome={marca.nome || "CrmWave"} />;
}

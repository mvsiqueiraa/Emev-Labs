import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO, { SITE_URL } from "@/components/SEO";

const sections = [
  {
    title: "1. Aceite dos termos",
    body: "Ao acessar este site, você declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com algum ponto, recomendamos que interrompa a navegação.",
  },
  {
    title: "2. Sobre a Emev Labs",
    body: "A Emev Labs é uma marca/empresa de tecnologia vinculada ao CNPJ nº 66.387.225/0001-50, sob responsabilidade de Marcos Vinicius dos Santos Siqueira, com atuação no desenvolvimento de sites, sistemas, automações e soluções digitais sob medida. As informações do site têm finalidade institucional e comercial.",
  },
  {
    title: "3. Uso do site",
    body: "Você se compromete a utilizar o site de forma lícita, respeitosa e sem tentar comprometer sua segurança, disponibilidade, integridade, código, infraestrutura ou conteúdos.",
  },
  {
    title: "4. Orçamentos e contato",
    body: "Os botões de contato podem direcionar para canais externos, como WhatsApp e LinkedIn. O envio de mensagens por esses canais não garante contratação automática, reserva de agenda, proposta comercial definitiva ou aceite de projeto. Qualquer contratação depende de proposta, contrato, aceite formal e definição de escopo entre as partes.",
  },
  {
    title: "5. Tratamento de dados pessoais",
    body: "Ao entrar em contato com a Emev Labs por meio dos canais disponíveis no site, o usuário poderá fornecer dados como nome, telefone, e-mail e informações sobre o projeto. Esses dados poderão ser utilizados para atendimento, elaboração de orçamento, comunicação comercial e continuidade da solicitação, conforme descrito na Política de Privacidade da Emev Labs, quando disponível no site.",
  },
  {
    title: "6. Cookies e ferramentas de análise",
    body: "Este site poderá utilizar cookies, identificadores e ferramentas de análise ou mídia, como Google Analytics, Google Tag Manager, Google Ads ou tecnologias similares, para melhorar a experiência do usuário, compreender o comportamento de navegação e avaliar o desempenho das páginas e campanhas. O usuário poderá gerenciar ou bloquear cookies nas configurações do navegador, observando que algumas funcionalidades do site podem ser afetadas.",
  },
  {
    title: "7. Serviços personalizados",
    body: "Os serviços desenvolvidos pela Emev Labs são realizados de acordo com o escopo aprovado entre as partes. Funcionalidades, prazos, valores, suporte, manutenção, hospedagem, integrações e entregáveis deverão ser definidos em proposta comercial, contrato ou outro instrumento de aceite formal.",
  },
  {
    title: "8. Propriedade intelectual",
    body: "Textos, identidade visual, elementos gráficos, estrutura do site, códigos, layouts, protótipos, soluções digitais e demais conteúdos pertencem à Emev Labs ou são utilizados mediante licença. A cópia, reprodução, modificação, distribuição ou uso comercial sem autorização prévia não é permitida.",
  },
  {
    title: "9. Links externos",
    body: "Este site pode conter links para plataformas de terceiros. A Emev Labs não controla esses ambientes e não se responsabiliza por conteúdos, políticas, disponibilidade ou práticas de privacidade de sites externos.",
  },
  {
    title: "10. Disponibilidade",
    body: "Buscamos manter o site disponível e atualizado, mas podem ocorrer interrupções, manutenções, falhas técnicas ou alterações sem aviso prévio.",
  },
  {
    title: "11. Limitação de responsabilidade",
    body: "As informações apresentadas no site não constituem garantia de resultado específico. A Emev Labs não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo do site sem uma avaliação técnica ou comercial individual.",
  },
  {
    title: "12. Alterações destes termos",
    body: "Estes Termos de Uso podem ser atualizados a qualquer momento para refletir mudanças no site, nos serviços, em requisitos legais ou em práticas comerciais. A data de atualização indica a versão vigente.",
  },
  {
    title: "13. Legislação aplicável",
    body: "Estes Termos de Uso serão interpretados de acordo com a legislação brasileira aplicável, especialmente as normas relacionadas ao uso da internet (Marco Civil da Internet), proteção de dados pessoais (LGPD), propriedade intelectual (Lei de Software), relações comerciais e demais normas aplicáveis.",
  },
  {
    title: "14. Contato",
    body: "Para falar sobre estes termos, projetos, orçamentos ou solicitações relacionadas ao site, entre em contato pelos canais oficiais disponibilizados pela Emev Labs.",
  },
];

const TermsOfUse = () => {
  return (
    <div className="relative min-h-screen bg-background noise-bg">
      <SEO
        title="Termos de Uso | Emev Labs"
        description="Termos de Uso da Emev Labs para acesso ao site, contato comercial, orçamentos, propriedade intelectual e serviços digitais personalizados."
        canonical={`${SITE_URL}/termos-de-uso`}
      />
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1} className="px-6 md:px-10 pt-32 pb-24">
        <section className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-8">
            // LEGAL
          </p>

          <h1 className="font-sans font-semibold text-4xl md:text-6xl tracking-tight text-foreground leading-tight">
            Termos de Uso
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
            Estes termos explicam as regras básicas para acesso e uso do site
            da Emev Labs. Eles foram escritos para serem claros, objetivos e
            compatíveis com o funcionamento atual do site.
          </p>

          <div className="mt-10 grid gap-3 border-y border-border py-5 font-mono text-xs tracking-widest text-foreground/70">
            <span>EMEV LABS CNPJ nº 66.387.225/0001-50</span>
            <span>Responsável: Marcos Vinicius dos Santos Siqueira</span>
            <span>Atualizado em: 22/05/2026</span>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-16 space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-mono text-sm md:text-base font-bold tracking-widest text-foreground">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/80">
                {section.body}
              </p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

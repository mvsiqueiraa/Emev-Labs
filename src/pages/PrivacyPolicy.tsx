import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "1. Objetivo desta política",
    body: "Esta Política de Privacidade explica como a Emev Labs poderá coletar, utilizar, armazenar e proteger dados pessoais de usuários que acessam o site ou entram em contato pelos canais disponíveis.",
  },
  {
    title: "2. Identificação da empresa",
    body: "A Emev Labs é uma marca/empresa de tecnologia vinculada ao CNPJ nº 66.387.225/0001-50, sob responsabilidade de Marcos Vinicius dos Santos Siqueira.",
  },
  {
    title: "3. Dados que podem ser tratados",
    body: "Ao entrar em contato com a Emev Labs, o usuário poderá fornecer dados como nome, telefone, e-mail, empresa, cargo, links, informações sobre o projeto, mensagens enviadas pelo WhatsApp, LinkedIn ou outros canais oficiais. Também poderão ser tratados dados técnicos e de navegação, como endereço IP, dispositivo, navegador, páginas acessadas, origem do acesso e interações com botões do site.",
  },
  {
    title: "4. Finalidades de uso",
    body: "Os dados poderão ser utilizados para atendimento, resposta a solicitações, elaboração de orçamentos, comunicação comercial, continuidade de conversas iniciadas pelo usuário, melhoria do site, mensuração de campanhas, prevenção de abusos e cumprimento de obrigações legais ou regulatórias.",
  },
  {
    title: "5. WhatsApp e canais externos",
    body: "Quando o usuário clica em botões que direcionam para WhatsApp, LinkedIn ou outras plataformas externas, a navegação e o tratamento de dados nesses ambientes passam a seguir também as políticas de privacidade e termos dessas plataformas.",
  },
  {
    title: "6. Cookies e ferramentas de análise",
    body: "Este site poderá utilizar cookies, identificadores e ferramentas como Google Analytics, Google Tag Manager, Google Ads ou tecnologias similares para compreender o comportamento de navegação, melhorar a experiência do usuário e avaliar o desempenho de páginas e campanhas. O usuário poderá gerenciar ou bloquear cookies nas configurações do navegador. O bloqueio de cookies poderá afetar algumas funcionalidades ou medições do site.",
  },
  {
    title: "7. Compartilhamento de dados",
    body: "A Emev Labs não vende dados pessoais. Dados poderão ser compartilhados com fornecedores e plataformas necessárias para operação do site, atendimento, hospedagem, análise de desempenho, publicidade, comunicação e cumprimento de obrigações legais, sempre conforme a finalidade aplicável.",
  },
  {
    title: "8. Armazenamento e segurança",
    body: "A Emev Labs adota medidas razoáveis de segurança para proteger dados pessoais contra acessos não autorizados, perda, alteração ou uso indevido. Ainda assim, nenhum ambiente digital é completamente livre de riscos.",
  },
  {
    title: "9. Retenção dos dados",
    body: "Os dados pessoais serão mantidos pelo tempo necessário para atender às finalidades descritas nesta política, cumprir obrigações legais, preservar direitos ou manter histórico de relacionamento comercial iniciado pelo próprio usuário.",
  },
  {
    title: "10. Direitos do titular",
    body: "Nos termos da LGPD, o usuário poderá solicitar informações sobre o tratamento de seus dados pessoais, correção, atualização, exclusão, confirmação de tratamento ou outros direitos previstos na legislação aplicável.",
  },
  {
    title: "11. Atualizações desta política",
    body: "Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir mudanças no site, nos serviços, em ferramentas utilizadas, em requisitos legais ou em práticas comerciais. A data de atualização indica a versão vigente.",
  },
  {
    title: "12. Contato",
    body: "Para dúvidas, solicitações ou pedidos relacionados a dados pessoais e privacidade, o usuário poderá entrar em contato pelo e-mail ou canais oficiais informados no site da Emev Labs.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen bg-background noise-bg">
      <Navbar />
      <main className="px-6 md:px-10 pt-32 pb-24">
        <section className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-8">
            // PRIVACIDADE
          </p>

          <h1 className="font-sans font-semibold text-4xl md:text-6xl tracking-tight text-foreground leading-tight">
            Política de Privacidade
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
            Esta política descreve como dados pessoais podem ser tratados pela
            Emev Labs durante a navegação no site, contato comercial e uso de
            canais externos como WhatsApp e LinkedIn.
          </p>

          <div className="mt-10 grid gap-3 border-y border-border py-5 font-mono text-xs tracking-widest text-foreground/70">
            <span>EMEV LABS</span>
            <span>CNPJ nº 66.387.225/0001-50</span>
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

export default PrivacyPolicy;

const SkipLink = () => {
  return (
    <a
      href="#conteudo-principal"
      className="sr-only fixed left-4 top-4 z-[100] bg-card px-4 py-3 font-mono text-xs font-bold tracking-widest text-card-foreground shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-primary"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;

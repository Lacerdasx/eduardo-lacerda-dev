export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-3xl space-y-1 px-4 py-10 text-center text-xs text-[#E1E0CC]/50 sm:px-6 md:px-10">
      <p>© {year} Todos os direitos reservados.</p>
      <p>
        Vídeo de fundo do Hero: template &quot;Prisma Creative Studio&quot;
        (Aura.build).
      </p>
      <p>Vídeo de transição: gerado com IA.</p>
    </footer>
  );
}

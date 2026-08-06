export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-3xl px-4 py-10 text-center text-xs text-[#E1E0CC]/50 sm:px-6 md:px-10">
      © {year} Eduardo Lacerda. Todos os direitos reservados.
    </footer>
  );
}

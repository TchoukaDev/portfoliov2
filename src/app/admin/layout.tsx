import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (!session.user.isAdmin) redirect("/");

  return (
    // pt-16 compense la hauteur de la Navbar fixe (h-16 = 64px)
    // afin que le contenu des pages admin ne soit pas masqué derrière elle.
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-10">
      {children}
    </main>
  );
}

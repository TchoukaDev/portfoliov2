import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ArticlesLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-10">
      {children}
    </main>
  );
}

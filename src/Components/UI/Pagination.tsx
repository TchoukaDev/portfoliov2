import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ page, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      {page > 1 ? (
        <Link
          href={`${basePath}?page=${page - 1}`}
          className="px-4 py-2 text-sm text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
        >
          ← Précédent
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-gray-600 bg-white/5 rounded-lg cursor-not-allowed">
          ← Précédent
        </span>
      )}

      <span className="text-sm text-gray-400">
        Page {page} / {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          href={`${basePath}?page=${page + 1}`}
          className="px-4 py-2 text-sm text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
        >
          Suivant →
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-gray-600 bg-white/5 rounded-lg cursor-not-allowed">
          Suivant →
        </span>
      )}
    </div>
  );
}

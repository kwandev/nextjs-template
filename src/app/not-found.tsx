import Link from 'next/link';

// 루트 app/not-found는 notFound() 호출뿐 아니라 매칭되지 않는 모든 URL의 404도 처리한다.
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">404 — 페이지를 찾을 수 없습니다</h1>
      <p className="text-sm text-zinc-500">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        href="/"
        className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

import Image from 'next/image';

import { api } from '@/shared/lib';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

export default async function Home() {
  const photos = await api.get<Photo[]>('https://jsonplaceholder.typicode.com/photos', {
    params: { _limit: '12' },
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Photos</h1>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo, index) => (
          <li
            key={photo.id}
            className="overflow-hidden rounded-lg border bg-white dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Image
              src={`https://picsum.photos/id/${index + 500}/200`}
              alt={photo.title}
              width={150}
              height={150}
              unoptimized
              className="aspect-square w-full object-cover"
            />
            <div className="px-3 py-2">
              <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{photo.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

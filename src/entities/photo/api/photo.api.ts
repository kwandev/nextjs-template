import { env } from '@/shared/config';
import { api } from '@/shared/lib';
import type { Photo } from '@/entities/photo/model/photo.types';

export function fetchPhotos(limit = 12) {
  return api.get<Photo[]>(`${env.apiBaseUrl}/photos`, { params: { _limit: String(limit) } });
}

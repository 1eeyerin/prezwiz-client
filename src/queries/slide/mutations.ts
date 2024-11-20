import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { Slide } from '@/types/slide';

export const slideMutations = {
  createOutlines: {
    mutationKey: queryKeys.slide.createOutlines.queryKey,
    mutationFn: (topic: string) => apis.slide.createOutlines(topic),
  },
  create: {
    mutationKey: queryKeys.slide.create.queryKey,
    mutationFn: ({ id, outlines }: { id: number; outlines: Slide[] }) => apis.slide.create({ id, outlines }),
  },
} as const;
import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { QuranReadingPage } from "../../../../features/quran/pages/quran-reading-page/quran-reading-page";
import { z } from 'zod';

export const QuranReadingRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/quran/quran-reading",
  component: QuranReadingPage,
  validateSearch: z.object({
    isPages: z.coerce.boolean().default(true),
    page: z.coerce.number().min(1).max(604).optional(),
    juz: z.coerce.number().min(1).max(30).optional(),
    hizb: z.coerce.number().min(1).max(60).optional(),
    surah: z.coerce.number().min(1).max(114).optional(),
    ayah: z.coerce.number().min(0).optional(),
  }).transform((data) => {
    if (!data.page && !data.juz && !data.surah) {
      return { ...data, page: 1 };
    }
    return data;
  })

});

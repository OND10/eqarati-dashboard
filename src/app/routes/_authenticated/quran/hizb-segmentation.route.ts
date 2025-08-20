import { createRoute } from '@tanstack/react-router';
import { HizbSegmentationPage } from '../../../../features/quran/pages/hizb-segmentation-page';
import { AuthRoute } from '../../main';

export const HizbSegmentationRoute = createRoute({
    getParentRoute : ()=> AuthRoute,
    path : "/quran/hizb-segmentation",
    component : HizbSegmentationPage
}) 

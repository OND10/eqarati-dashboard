import { createRoute } from "@tanstack/react-router";
import { AuthRoute } from "../../main";
import { ReciterAudioSegmentationPage } from "../../../../features/quran/pages/reciter-audio-segmentation-page";

export const ReciterAudioSegmentationRoute = createRoute({
    getParentRoute: () => AuthRoute,
    path: "/quran/reciters/reciter-overview/audio-segmentation/$surah/$reciterAudio",
    component: ReciterAudioSegmentationPage,
});

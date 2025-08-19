import ReciterAudio from "../../features/quran/types/reciter-audio";
import quranAudioDB, { AudioPeaks } from "../../services/IndexDB/quran-audios-object-store";



async function getCachedAudio(audioId:string):Promise<AudioPeaks|undefined> {
    try {
        const data = await quranAudioDB.get(audioId);
        console.log("----------------1---------------");
        console.warn(data);
        if (!data) {
            throw new Error("no stored Data was found with the following key " + audioId)
        }
        return data
    } catch (err) {
        const error = err as Error;
        console.error(error.message)
        return undefined
    }
}

async function insertCachedAudio (audioDetails : ReciterAudio , peaks:(number[] | Float32Array<ArrayBufferLike>)[]):Promise<AudioPeaks|undefined>{

    try {
          const insertData = await quranAudioDB.insert({
            audioId: audioDetails.id.toString(),
            reciterId: audioDetails.reciter.toString(),
            surahId: audioDetails.surah.toString(),
            peaks: peaks
          });
          console.log("----------------insert cache audio---------------");
          console.error(insertData);
          return insertData
    
      } catch (err) {
        console.error("--------------DB ERROR --------------");
        const error = err as Error;
        console.error(error.message)
        throw new Error(error.message)
      }
}


async function deleteCachedAudio(audioId:string):Promise<boolean> {
    try {
     const data = await quranAudioDB.delete(audioId);
     return data
    } catch (err) {
        const error = err as Error;
        console.error(error.message)
        return false
    }
}

export default getCachedAudio
export {insertCachedAudio , deleteCachedAudio}
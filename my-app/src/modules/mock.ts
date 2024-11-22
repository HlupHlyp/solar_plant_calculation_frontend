import { ITunesResult } from "./itunesApi.ts";

export const SONGS_MOCK: ITunesResult = {
    resultCount: 3,
    results: [
        {
            wrapperType: "track",
            artistName: "Pink Floyd",
            collectionCensoredName: "The Wall",
            trackViewUrl: "",
            artworkUrl100: "",
            collectionId: 0,
        },
        {
            wrapperType: "track",
            artistName: "Queen",
            collectionCensoredName: "A Night At The Opera",
            trackViewUrl: "",
            artworkUrl100: "",
            collectionId: 1,
        },
        {
            wrapperType: "track",
            artistName: "AC/DC",
            collectionCensoredName: "Made in Heaven",
            trackViewUrl: "",
            artworkUrl100: "",
            collectionId: 2,
        },
    ],
};

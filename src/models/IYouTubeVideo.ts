export interface IYouTubeVideo {
  video: {
    channelId: string;
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    thumbnails: [{ height: number; url: string; width: number }];
    title: string;
    videoId: string;
    viewCountText: string;
  };
}

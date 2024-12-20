import React, { useState } from 'react';
import { Layout } from '../components/ui/Layout';
import { BackButton } from '../components/ui/BackButton';
import { VideoCard } from '../components/video/VideoCard';
import { VideoPlayer } from '../components/video/VideoPlayer';
import { VocabularyList } from '../components/video/VocabularyList';
import { videoLessons, VideoLesson } from '../data/videos';

export default function VideoLessons() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
  const [watchedVideos, setWatchedVideos] = useState<Set<string>>(new Set());

  const handleVideoSelect = (video: VideoLesson) => {
    setSelectedVideo(video);
    setWatchedVideos(prev => new Set([...prev, video.id]));
  };

  return (
    <Layout>
      <div className="bg-[#FF4B4B] text-white">
        <div className="px-4 py-3 flex items-center">
          <BackButton className="text-white" />
          <h1 className="text-xl font-semibold flex-1 text-center">
            {selectedVideo ? selectedVideo.title : "Video Lessons"}
          </h1>
        </div>
      </div>
      
      <div className="p-4">
        {!selectedVideo ? (
          <div className="space-y-4">
            {videoLessons.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => handleVideoSelect(video)}
                isWatched={watchedVideos.has(video.id)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <VideoPlayer videoId={selectedVideo.vimeoId} />
            <VocabularyList vocabulary={selectedVideo.vocabulary} />
          </div>
        )}
      </div>
    </Layout>
  );
}
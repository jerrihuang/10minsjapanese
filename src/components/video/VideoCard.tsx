import React from 'react';
import { VideoLesson } from '../../data/videos';

interface VideoCardProps {
  video: VideoLesson;
  onClick: () => void;
  isWatched?: boolean;
}

export function VideoCard({ video, onClick, isWatched }: VideoCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-left"
    >
      <div className="flex items-start gap-4">
        <div className="w-32 h-24 bg-gray-100 rounded-lg relative flex-shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-200" />
          <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-1 rounded">
            {video.duration}
          </span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{video.title}</h3>
            {isWatched && (
              <span className="text-green-500 text-sm">✓ Watched</span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">{video.description}</p>
          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
            {video.level}
          </span>
        </div>
      </div>
    </button>
  );
}
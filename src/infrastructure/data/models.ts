import type { CategoryTypes } from './enums';

export type ChannelDTO = {
  id: string;
  name: string;
  category: CategoryTypes[] | 'all';
  address: string;
  latitude: number;
  longitude: number;
  followers: number;
};

export type CommentItemModel = {
  id: string;
  text: string;
  commenter: ChannelDTO;
};

export type VideoDTO = {
  id: string;
  title: string;
  description: string;
  category: CategoryTypes[];
  videoUrl: string;
  thumbnailUrl: string;
  uploader: ChannelDTO;
  createdAt: Date;
  likes: number;
  isNew: boolean;
  isPopular: boolean;
};

export type CommentDTO = {
  id: string;
  videoId: string;
  content: string;
  uploader: ChannelDTO;
};

export type QnADTO = {
  id: string;
  channelId: string;
  content: string;
  uploader: ChannelDTO;
  replies: QnADTO[];
};

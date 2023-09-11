export type VideoListProps = {
  children: JSX.Element | JSX.Element[];
};

export type VideoCardProps = {
  videoId: string;
  imageUrl: string;
  title: string;
  category: string;
  uploaderName: string;
  uploadedAt: Date;
};

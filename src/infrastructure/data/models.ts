export type ProfileModel = {
  id: string;
  name: string;
  profileUrl: string;
};

export type VideoItemModel = {
  id: string;
  title: string;
  uploaderName: string;
  videoUrl: string;
  thumbnailPath: string;
  profile: ProfileModel;
  createdAt: Date;
};

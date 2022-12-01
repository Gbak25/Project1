export type ProfileModel = {
  id: string;
  name: string;
  profileUrl: string;
};

export type CommentItemModel = {
  id: string;
  text: string;
  profile: ProfileModel;
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

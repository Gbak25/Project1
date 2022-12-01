export type HospitalModel = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export type ProfileModel = {
  id: string;
  name: string;
  categories: string[];
  profileUrl: string;
  followers: number;
  hospital: HospitalModel;
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

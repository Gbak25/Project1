import type { CommentItemModel, VideoItemModel } from './models';

export const commentData: CommentItemModel[] = [
  {
    id: '1',
    text: 'comment message',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
  },
  {
    id: '2',
    text: 'comment message',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
  },
  {
    id: '3',
    text: 'comment message',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
  },
];

export const allData: VideoItemModel[] = [
  {
    id: '1',
    title: '1',
    uploaderName: '1',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/Rectangle 35.png',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: true,
    isPopular: false,
  },
  {
    id: '2',
    title: '2',
    uploaderName: '2',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/Rectangle 36.png',
    profile: {
      id: '1',
      name: '1',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: true,
    isPopular: false,
  },
  {
    id: '3',
    title: '3',
    uploaderName: '3',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/Rectangle 37.png',
    profile: {
      id: '1',
      name: '1',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: true,
    isPopular: false,
  },
  {
    id: '4',
    title: '4',
    uploaderName: '4',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/R1.png',
    profile: {
      id: '1',
      name: '1',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: false,
    isPopular: true,
  },
  {
    id: '5',
    title: '5',
    uploaderName: '5',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/R2.png',
    profile: {
      id: '1',
      name: '1',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: false,
    isPopular: true,
  },
  {
    id: '6',
    title: '6',
    uploaderName: '6',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailPath: '/R3.png',
    profile: {
      id: '1',
      name: '1',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      followers: 132,
      hospital: {
        id: '1',
        name: 'Hospital Name',
        latitude: 35.1566928,
        longitude: 129.0593822,
      },
    },
    createdAt: new Date(),
    isNew: false,
    isPopular: true,
  },
];

export const mostViewdData: VideoItemModel[] = allData.filter(
  (d) => d.isPopular,
);

export const newData: VideoItemModel[] = allData.filter((d) => d.isNew);

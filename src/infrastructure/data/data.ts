import { CategoryTypes } from './enums';
import type { CommentItemModel, VideoItemModel } from './models';

export const commentData: CommentItemModel[] = [
  {
    id: '1',
    text: 'Excellent video about precise surgery',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu9NRZvG03vMkEw4BHKd6AxHxrdYSpg6Pf7RCUUCoA=s88-c-k-c0x00ffffff-no-rj',
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
    text: 'Are there any other ways of proceeding the same surgery while using a easier equipment?',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        '//yt3.ggpht.com/LU7LcBMHFTm_5g65_DF2bvwUbw0CZa0ao9MwbGY18kfJX2c5SS-9Qb-OnwPzJvxIDGvuyRqE0U0=s176-c-k-c0x00ffffff-no-rj-mo',
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
    text: 'Will you update other videos related to this video?',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['내과', '외과', '이비인후과'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu8e_XVsbapf0_XLOX-fqDmehVgAx8NM5MVpBVK6=s88-c-k-c0x00ffffff-no-rj',
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
    title: 'Craniectomy surgical procedure - 3D animation',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'Amerra Medical',
    videoUrl: 'https://www.youtube.com/watch?v=1RkseDeYS9g',
    thumbnailPath:
      'https://i.ytimg.com/vi/1RkseDeYS9g/hq2.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIE4oSzAP&rs=AOn4CLABQw5piDhv-ce7RF_AzaO3ycbClg',
    profile: {
      id: '1',
      name: 'Dr.Alonso',
      categories: ['Craniectomy'],
      profileUrl:
        'https://yt3.ggpht.com/qUgE1IESjSWougEfX6QjWG2Jj0rrBKcwlXdIf-oDJXA9JC-RvDNxvIkhceiy8XWlLscnAWD-ILo=s88-c-k-c0x00ffffff-no-rj',
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
    title: 'Rhinoplasty (Nose Job) Video Animation - Guncel Ozturk, MD',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'Güncel Öztürk',
    videoUrl: 'https://www.youtube.com/watch?v=dyNpojnbNT4',
    thumbnailPath:
      'https://i.ytimg.com/vi/dyNpojnbNT4/hq2.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF8oWDAP&rs=AOn4CLDbiV3gFI2rx1NsKJuj_YhSMcy7aA',
    profile: {
      id: '2',
      name: 'Güncel Öztürk ',
      categories: ['Cosmetic Suregery'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-O1jPYyIb0tiD-1aM798GFSz9vIXiO2RupE5Xb9A=s48-c-k-c0x00ffffff-no-rj',
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
    title: 'Leg Amputation Surgery 3D animation',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'Legal Graphicworks, LGW Mediaworks',
    videoUrl: 'https://www.youtube.com/watch?v=qJ2LVSCGhbU&t=11s',
    thumbnailPath:
      'https://i.ytimg.com/vi/qJ2LVSCGhbU/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCK5khFobMhjPE04Y4uDzxdiDkjKw',
    profile: {
      id: '3',
      name: 'Legal Graphicworks, LGW Mediaworks',
      categories: ['Orthopaedic'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu9NNOBW69Sa57sbend8H6stCnj-rKrvwH3u8hZ_kw=s48-c-k-c0x00ffffff-no-rj',
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
    title: 'Cameron Underwood Face Transplant Surgical Animation 2018',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'NYU Langone Health',
    videoUrl: 'https://www.youtube.com/watch?v=cKnw7HWzbGU',
    thumbnailPath:
      'https://i.ytimg.com/vi/cKnw7HWzbGU/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApdLHPAsysqvQO9uY4HXOWscSfxQ',
    profile: {
      id: '4',
      name: 'NYU Langone Health',
      categories: ['Cosmetic Surgery'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu8TQ5w4YWzDOXNc0tqwlxZDUCg6AspHnTIs9pwdiA=s48-c-k-c0x00ffffff-no-rj',
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
    title: 'Joe DiMeo Face and Double Hand Transplant Surgical Animation 2021',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'NYU Langone Healt',
    videoUrl: 'youtube.com/watch?v=NV7p4Mdh7xk',
    thumbnailPath:
      'https://i.ytimg.com/vi/NV7p4Mdh7xk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUBoVIQUVdQ-UHyobSeltoDWXR-',
    profile: {
      id: '5',
      name: 'NYU Langone Health',
      categories: ['Transplant Surgeon'],
      profileUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu8TQ5w4YWzDOXNc0tqwlxZDUCg6AspHnTIs9pwdiA=s48-c-k-c0x00ffffff-no-rj',
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
    title: 'Angioplasty Procedure Animation Video.',
    category: CategoryTypes.Anesthesiology,
    uploaderName: 'Fortis Healthcare    ',
    videoUrl: 'https://www.youtube.com/watch?v=e13TGGccvT4',
    thumbnailPath:
      'https://i.ytimg.com/vi/e13TGGccvT4/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGGyK3qLL6RYI3wEhF0CXf8KRbVw',
    profile: {
      id: '6',
      name: 'Fortis Healthcare',
      categories: ['Angioplasty'],
      profileUrl:
        'https://yt3.ggpht.com/ygSEmmBLpJ7QW6xKazLryc3aYrkIGxCwc-odyCVCZK68LajXJkAvTGKEMz6zCzUUXuoxCA7TmA=s48-c-k-c0x00ffffff-no-rj',
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

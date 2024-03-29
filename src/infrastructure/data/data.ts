import { CategoryTypes } from './enums';
import type { ChannelDTO, CommentDTO, QnADTO, VideoDTO } from './models';

export const channelData: ChannelDTO[] = [
  {
    id: '1',
    name: '청맥병원',
    category: [
      CategoryTypes.VascularSurgery,
      CategoryTypes.Radiology,
      CategoryTypes.Anesthesiology,
    ],
    address: '부산광역시 부산진구 중앙대로 716-1',
    latitude: 35.1566928,
    longitude: 129.0593822,
    followers: 1232,
  },
  {
    id: '2',
    name: '세브란스병원',
    category: 'all',
    address: '서울특별시 서대문구 신촌동 연세로 50-1',
    latitude: 37.5623371,
    longitude: 126.9408692,
    followers: 132,
  },
  {
    id: '3',
    name: '중앙대병원',
    category: 'all',
    address: '서울특별시 동작구 흑석로 102',
    latitude: 37.5066909,
    longitude: 126.9607295,
    followers: 32,
  },
  {
    id: '4',
    name: '더 맑은 내과',
    category: [CategoryTypes.InternalMedicine],
    address: '서울특별시 마포구 신촌로 162',
    latitude: 37.5562797,
    longitude: 126.9437026,
    followers: 72,
  },
  {
    id: '5',
    name: '성모병원',
    category: 'all',
    address: '서울특별시 서초구 반포대로 222',
    latitude: 37.5016116,
    longitude: 127.0047678,
    followers: 42,
  },
  {
    id: '6',
    name: '부산대병원',
    category: 'all',
    address: '부산광역시 서구 구덕로 179',
    latitude: 35.1004806,
    longitude: 129.0190543,
    followers: 662,
  },
  {
    id: '7',
    name: '서울대병원',
    category: 'all',
    address: '서울특별시 종로구 대학로 101',
    latitude: 37.5795427,
    longitude: 126.9990602,
    followers: 232,
  },
  {
    id: '8',
    name: '부민병원',
    category: 'all',
    address: '서울특별시 강서구 공항대로 389',
    latitude: 37.556895,
    longitude: 126.850927,
    followers: 112,
  },
  {
    id: '9',
    name: '홍익병원',
    category: 'all',
    address: '서울특별시 강서구 공항대로 389',
    latitude: 37.5284349,
    longitude: 126.8636189,
    followers: 156,
  },
  {
    id: '10',
    name: '고려대병원',
    category: 'all',
    address: '서울특별시 성북구 고려대로 73',
    latitude: 37.5870416,
    longitude: 127.0265402,
    followers: 455,
  },
];

export const videoData: VideoDTO[] = [
  {
    id: '1',
    title:
      '[A/S, 1편] 하지정맥류 재발해도 걱정마세요~ 관리해드립니다! 더 이상 속지 마세요!',
    description: '하지정맥류 수술 이후, 혹시나 질환이 재발했을시 대처하는 방법',
    category: [CategoryTypes.VascularSurgery],
    videoUrl: 'https://www.youtube.com/watch?v=_l5F_hiqHas',
    thumbnailUrl: 'http://i3.ytimg.com/vi/_l5F_hiqHas/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '1')!,
    createdAt: new Date(),
    likes: 11,
    isNew: true,
    isPopular: true,
  },
  {
    id: '2',
    title:
      '[A/S, 2편] 하지정맥류 수술 전, 꼭! 반드시! 알고 있어야 하는 필수 정보 공개',
    description: '하지정맥류 수술 이후, 혹시나 질환이 재발했을시 대처하는 방법',
    category: [CategoryTypes.VascularSurgery],
    videoUrl: 'https://www.youtube.com/watch?v=u7tMcf25_KY&t=1s',
    thumbnailUrl: 'http://i3.ytimg.com/vi/u7tMcf25_KY/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '1')!,
    createdAt: new Date(),
    likes: 12,
    isNew: true,
    isPopular: true,
  },
  {
    id: '3',
    title: '압박스타킹 완.전.히 다릅니다!! 고르는 법부터 착용 방법, 시간까지!',
    description:
      '일반 스타킹과 압박 스타킹이 어떡해 하지정맥류에 지장이 있는지에 관한 영상',
    category: [CategoryTypes.VascularSurgery],
    videoUrl: 'https://www.youtube.com/watch?v=XugBkFkUoYc',
    thumbnailUrl: 'http://i3.ytimg.com/vi/XugBkFkUoYc/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '1')!,
    createdAt: new Date(),
    likes: 14,
    isNew: true,
    isPopular: true,
  },
  {
    id: '4',
    title: '[홍익병원] 심부전-정영욱 심혈관센터장',
    description:
      '실제로 자주 일어날수있는 심혈질환에 대해서 자주 물어보는 질문과 대답을 담은 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=t8BMXvMB-wg&t=3s',
    thumbnailUrl: 'http://i3.ytimg.com/vi/t8BMXvMB-wg/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '9')!,
    createdAt: new Date(),
    likes: 31,
    isNew: true,
    isPopular: false,
  },
  {
    id: '5',
    title: '홍익병원 심장·뇌혈관센터(뇌혈관센터)',
    description: '뇌와 관련된 혈관 질환들은 다루는 영상',
    category: [CategoryTypes.Orthopedics, CategoryTypes.VascularSurgery],
    videoUrl: 'https://www.youtube.com/watch?v=aHFLogDQ0uA',
    thumbnailUrl: 'http://i3.ytimg.com/vi/aHFLogDQ0uA/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '9')!,
    createdAt: new Date(),
    likes: 51,
    isNew: false,
    isPopular: true,
  },
  {
    id: '6',
    title: '홍익병원 정형외과',
    description:
      '홍익병원 내에있는 다양한 전문분야중 환자들이 자주 찾는 정형외과에 대해서 소개하는 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=ZCgdL2zjOmw',
    thumbnailUrl: 'http://i3.ytimg.com/vi/ZCgdL2zjOmw/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '9')!,
    createdAt: new Date(),
    likes: 8,
    isNew: false,
    isPopular: true,
  },
  {
    id: '7',
    title: '[명의 의학백과📖] 편두통이란?',
    description: '일상속에 우리와 함께하는 편두통에 관해 설명하는 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=mi7-JlDFvM0',
    thumbnailUrl: 'http://i3.ytimg.com/vi/mi7-JlDFvM0/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '10')!,
    createdAt: new Date(),
    likes: 21,
    isNew: false,
    isPopular: true,
  },
  {
    id: '8',
    title: '[명의 의학백과📖] 대상포진이란?',
    description:
      '피부에 유발되는 작지만 고통스러운 대상포진이 미치는 영향과 생기는 원인에 관한 내용',
    category: [CategoryTypes.Dermatology],
    videoUrl: 'https://www.youtube.com/watch?v=oq71010xImk',
    thumbnailUrl: 'http://i3.ytimg.com/vi/oq71010xImk/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '10')!,
    createdAt: new Date(),
    likes: 17,
    isNew: false,
    isPopular: true,
  },
  {
    id: '9',
    title: '[명의 의학백과📖] 탈모란?',
    description:
      '대한민국 20%의 인구가 고통받는 탈모와 치료법 그리고 그와 관련된 의학자료를 소개하는 영상',
    category: [CategoryTypes.Dermatology],
    videoUrl: 'https://www.youtube.com/watch?v=IxqQNJrTQY0',
    thumbnailUrl: 'http://i3.ytimg.com/vi/IxqQNJrTQY0/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '10')!,
    createdAt: new Date(),
    likes: 37,
    isNew: false,
    isPopular: true,
  },
  {
    id: '10',
    title:
      '요로결석(신장결석) 피하고 싶으면 이건 꼭 지키세요! | 서울대병원 조성용 교수',
    description:
      '남자들이 가장 치료받을때 고통받는다는 요로결석. 예방과 방지하는 방법을다룬 영상',
    category: [CategoryTypes.Urology],
    videoUrl: 'https://www.youtube.com/watch?v=1M1jaaUjkKk',
    thumbnailUrl: 'http://i3.ytimg.com/vi/1M1jaaUjkKk/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '7')!,
    createdAt: new Date(),
    likes: 4,
    isNew: false,
    isPopular: false,
  },
  {
    id: '11',
    title: '파킨슨병 진행인지 모르는 초기 증상들 | 서울대병원 김한준 교수',
    description:
      '나이가 들면 들수록 흔해지는 파킨슨병. 일명 비전문용어인 ‘치매’로도 알려진 파킨슨병을 초기 진단할수 있는 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=I3zKWaVpF4Y',
    thumbnailUrl: 'http://i3.ytimg.com/vi/I3zKWaVpF4Y/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '7')!,
    createdAt: new Date(),
    likes: 22,
    isNew: false,
    isPopular: false,
  },
  {
    id: '12',
    title:
      '간경변과 간암을 동시에 치료하는 가장 좋은 방법 | 서울대병원 최영록 교수',
    description:
      '사망율 70%, 1위를 가진 간암. 높은 치사율을 가진 간암을 효과적으로 치료하며 그와 관련된 간경변을 다루는 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=Frrwu-i0zTM',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Frrwu-i0zTM/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '7')!,
    createdAt: new Date(),
    likes: 55,
    isNew: false,
    isPopular: false,
  },
  {
    id: '13',
    title: '고혈압, 반드시 약물 치료가 필요한가요?',
    description:
      '나이가 들수록 우리의 목숨을 앗아가는 지병 고혈압. 고혈압의 우려와 그에대한 치료방안을 설명하는 영상',
    category: [CategoryTypes.Orthopedics],
    videoUrl: 'https://www.youtube.com/watch?v=C9lnlMjYdeE',
    thumbnailUrl: 'http://i3.ytimg.com/vi/C9lnlMjYdeE/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '6')!,
    createdAt: new Date(),
    likes: 21,
    isNew: false,
    isPopular: false,
  },
  {
    id: '14',
    title: '당신의 콩팥 건강은 안녕하십니까? [1탄_신장이 망가지는 이유]',
    description:
      '콩팥 건강에 대하여 다루는 영상. 신장의 부작용의 관한 내용도 함께 설명하는 영상',
    category: [CategoryTypes.InternalMedicine],
    videoUrl: 'https://www.youtube.com/watch?v=Xkg34dHLP2Q',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Xkg34dHLP2Q/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '4')!,
    createdAt: new Date(),
    likes: 31,
    isNew: false,
    isPopular: false,
  },
  {
    id: '15',
    title: '칼륨 수치 낮추는 방법, 정리해 드립니다',
    description:
      '신장이 쇠약해지면 칼륨수치가 낮아지기 마련이다. 이에 관하여 칼륨수치를 낮추고 신장도 건강하게 만들수 있게해주는 영상',
    category: [CategoryTypes.InternalMedicine],
    videoUrl: 'https://www.youtube.com/watch?v=-KB-c08P9k0',
    thumbnailUrl: 'http://i3.ytimg.com/vi/-KB-c08P9k0/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '4')!,
    createdAt: new Date(),
    likes: 121,
    isNew: false,
    isPopular: false,
  },
  {
    id: '16',
    title: '소변에서 거품이? 단백뇨에 대한 궁금증 다 풀어드립니다!',
    description:
      '우리가 흔하게 생각하고 관찰하지 않고 넘어가는 우리의 소변. 소변에서도 우리가 가지고 있는 질병들을 알아낼수 있다는 영상',
    category: [CategoryTypes.InternalMedicine],
    videoUrl: 'https://www.youtube.com/watch?v=F-MyBsW6UTI',
    thumbnailUrl: 'http://i3.ytimg.com/vi/F-MyBsW6UTI/hqdefault.jpg',
    uploader: channelData.find((c) => c.id === '4')!,
    createdAt: new Date(),
    likes: 11,
    isNew: false,
    isPopular: false,
  },
];

export const commentData: CommentDTO[] = [
  {
    id: '1',
    videoId: '1',
    content: 'Awesome video!',
    uploader: channelData.find((c) => c.id === '4')!,
  },
];

export const qnaData: QnADTO[] = [
  {
    id: '1',
    channelId: '1',
    content: 'How handle this?',
    uploader: channelData.find((c) => c.id === '5')!,
    replies: [
      {
        id: '2',
        channelId: '1',
        content: 'Just do it!',
        uploader: channelData.find((c) => c.id === '1')!,
        replies: [],
      },
    ],
  },
  {
    id: '3',
    channelId: '1',
    content: 'How are you?',
    uploader: channelData.find((c) => c.id === '4')!,
    replies: [],
  },
];

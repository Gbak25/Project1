import { VideoDetail } from '@presentation/features/videoDetail';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const VideoDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <VideoDetail videoId={id as string} />;
};

export default VideoDetailPage;

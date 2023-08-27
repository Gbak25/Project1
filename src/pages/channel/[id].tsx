import { ChannelDetail } from '@presentation/features/channelDetail';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const ChannelDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ChannelDetail channelId={id as string} />;
};

export default ChannelDetailPage;

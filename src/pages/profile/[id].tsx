import ProfileDetail from '@presentation/features/profileDetail';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProfileDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ProfileDetail profileId={id as string} />;
};

export default ProfileDetailPage;

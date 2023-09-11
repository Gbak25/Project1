import { useGetVideoById } from '@application/hooks/use_get_data';
import { VideoDetailContent } from './content';

type VideoDetailProps = {
  videoId: string;
};

export function VideoDetail(props: VideoDetailProps): JSX.Element {
  const { videoId } = props;
  const { data } = useGetVideoById(videoId);

  if (!data) {
    return <p>No Content</p>;
  }
  return <VideoDetailContent videoId={videoId} data={data} />;
}

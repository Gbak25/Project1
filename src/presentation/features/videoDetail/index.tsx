import { allData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import ReactPlayer from 'react-player';

type VIdeoDetailProps = {
  videoId: string;
};

function VIdeoDetail(props: VIdeoDetailProps): JSX.Element {
  const { videoId } = props;

  const video = useMemo((): VideoItemModel | undefined => {
    return allData.find((d) => d.id === videoId);
  }, [videoId]);

  if (!video) {
    return <p>No video found</p>;
  }
  return (
    <div>
      <ReactPlayer
        url={video.videoUrl}
        controls={false}
        width="100%"
        height={600}
      />
    </div>
  );
}

export default memo(VIdeoDetail, isEqual);

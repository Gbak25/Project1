import { allData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';

type VIdeoDetailProps = {
  videoId: string;
};

function VIdeoDetail(props: VIdeoDetailProps): JSX.Element {
  const { videoId } = props;

  const video = useMemo((): VideoItemModel => {
    return allData.find((d) => d.id === videoId)!;
  }, []);

  return (
    <div>
      <p>{video.videoUrl}</p>
    </div>
  );
}

export default memo(VIdeoDetail, isEqual);

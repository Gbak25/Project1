import { memo } from 'react';
import isEqual from 'react-fast-compare';

type VIdeoDetailProps = {
  videoId: string;
};

function VIdeoDetail(props: VIdeoDetailProps): JSX.Element {
  const { videoId } = props;

  return (
    <div>
      <p>{videoId}</p>
    </div>
  );
}

export default memo(VIdeoDetail, isEqual);

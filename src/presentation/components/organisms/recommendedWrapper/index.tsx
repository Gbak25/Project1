import type { VideoDTO } from '@infrastructure/data/models';
import { RecommendList } from '../recommendList';
import { Wrapper } from './styles';

type RecommendedWrapperProps = {
  recommends: VideoDTO[];
};

export function RecommendedWrapper(
  props: RecommendedWrapperProps,
): JSX.Element {
  const { recommends } = props;

  return (
    <Wrapper>
      <RecommendList>
        {recommends.map((v) => {
          return (
            <RecommendList.Item
              key={v.id}
              videoId={v.id}
              imageUrl={v.thumbnailUrl}
              title={v.title}
              uploaderName={v.uploader.name}
              uploadedAt={v.createdAt}
              // @ts-ignore
              category={v.category[0]}
            />
          );
        })}
      </RecommendList>
    </Wrapper>
  );
}

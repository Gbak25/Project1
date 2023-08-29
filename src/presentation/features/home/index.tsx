import { useGetVideos } from '@application/hooks/use_get_data';
import { VideoList } from '../../components/organisms/videoCardList';

export function Home(): JSX.Element {
  const { dataNew, dataPopular } = useGetVideos();

  return (
    <div>
      <p>Most Viewd</p>
      <VideoList>
        {dataPopular.map((d) => {
          return (
            <VideoList.Item
              key={d.id}
              videoId={d.id}
              category={d.category[0]!.toString()}
              title={d.title}
              imageUrl={d.thumbnailUrl}
              uploadedAt={d.createdAt}
            />
          );
        })}
      </VideoList>

      <p>Most Recently</p>
      <VideoList>
        {dataNew.map((d) => {
          return (
            <VideoList.Item
              key={d.id}
              videoId={d.id}
              category={d.category[0]!.toString()}
              title={d.title}
              imageUrl={d.thumbnailUrl}
              uploadedAt={d.createdAt}
            />
          );
        })}
      </VideoList>
    </div>
  );
}

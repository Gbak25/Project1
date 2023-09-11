import { useGetVideos } from '@application/hooks/use_get_data';
import { searchKeywordAtom } from '@application/recoils/search/atoms';
import { Container } from '@radix-ui/themes';
import { useRecoilValue } from 'recoil';
import { Banner } from '../../components/organisms/banner';
import { Carousel } from '../../components/organisms/carousel';
import { VideoList } from '../../components/organisms/videoCardList';

export function Home(): JSX.Element {
  const searchKeyword = useRecoilValue(searchKeywordAtom);
  const { data, dataNew, dataPopular } = useGetVideos();

  if (searchKeyword) {
    return (
      <Container>
        <h3 className="typo-headline-l">{`Search Result by ${searchKeyword}`}</h3>
        {!data && '검색결과가 없습니다.'}
        <VideoList>
          {data
            .filter(
              (d2) =>
                d2.title.includes(searchKeyword) ||
                // @ts-ignore
                d2.category.includes(searchKeyword),
            )
            .map((d) => {
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
      </Container>
    );
  }
  return (
    <>
      <Carousel />
      <Container px="4">
        <h3 className="typo-headline-l">Most Viewd</h3>
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
        <Banner />
        <h3 className="typo-headline-l">Most Recently</h3>
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
      </Container>
    </>
  );
}

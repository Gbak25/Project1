import {
  useGetChannelById,
  useGetQnAsByChannelId,
  useGetVideosByChannelId,
} from '@application/hooks/use_get_data';
import { Container, Flex, ScrollArea } from '@radix-ui/themes';
import { useMemo } from 'react';
import { useCheckDevice } from '../../../application/hooks/use_check_device';
import { ChannelTabs } from '../../components/organisms/channelDetailTabs';
import { FollowButton } from '../../components/organisms/followButton';
import { QnaWrapper } from '../../components/organisms/qnaWrapper';
import { RecommendedWrapper } from '../../components/organisms/recommendedWrapper';
import { LeftSectionWrapper, RightSectionWrapper } from './styles';

type ChannelDetailProps = {
  channelId: string;
};

// @ts-ignore
// eslint-disable-next-line
const AnyReactComponent = ({
  text,
  // @ts-ignore
  // eslint-disable-next-line
  lat,
  // @ts-ignore
  // eslint-disable-next-line
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}): JSX.Element => <div>{text}</div>;

export function ChannelDetail(props: ChannelDetailProps): JSX.Element {
  const { channelId } = props;
  const { data } = useGetChannelById(channelId);
  const { data: qnas } = useGetQnAsByChannelId(channelId);
  const { data: videos } = useGetVideosByChannelId(channelId);
  const isMobile = useCheckDevice();

  const renderQnaWrapper = useMemo((): JSX.Element => {
    if (!isMobile && data) {
      return (
        <>
          <LeftSectionWrapper>
            <h3 className="typo-title-m">QnA</h3>
            <QnaWrapper qnas={qnas} data={data} />
          </LeftSectionWrapper>
          <RightSectionWrapper>
            <h3 className="typo-title-m">Recommended Videos</h3>
            <RecommendedWrapper recommends={videos} />
          </RightSectionWrapper>
        </>
      );
    }
    return <ChannelTabs qnas={qnas} data={data} recommends={videos} />;
  }, [isMobile, qnas, data, videos]);

  if (!data) {
    return <p>No Content</p>;
  }
  return (
    <Container mt="7" px="4">
      <ScrollArea>
        <Flex wrap="wrap">
          <Flex width="100%" wrap="wrap">
            <LeftSectionWrapper>
              <img
                style={{
                  width: '98%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                alt="hospital_main"
                src="/hospital_main.jpg"
              />
            </LeftSectionWrapper>
            <RightSectionWrapper>
              <p className="typo-title-l mb-16">{data.name}</p>
              <Flex justify="between" gap="4">
                <Flex direction="column" gap="4">
                  <span>Subject </span>
                  <span>Followers </span>
                  <span>Location </span>
                </Flex>
                <Flex direction="column">
                  <span className="typo-title-s">
                    {data.category === 'all' ? 'all' : data.category.join(', ')}
                  </span>
                  <span>{data.followers}</span>
                  <span>{data.address}</span>
                </Flex>
              </Flex>
              <FollowButton channelId={channelId} />
              <a
                href={`http://maps.google.com/maps?q=${data.latitude},${data.longitude}`}
                rel="noreferrer noopener"
                target="_blank">
                <iframe
                  title="maps"
                  width="100%"
                  height="300"
                  style={{ border: 'none' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDSQ6_y1ZEeicLmg_N8thHBy37HeLWvUwg
    &q=Space+Needle,Seattle+WA"
                />
              </a>
            </RightSectionWrapper>
          </Flex>
          <Flex width="100%" gap="5">
            {renderQnaWrapper}
          </Flex>
        </Flex>
      </ScrollArea>
    </Container>
  );
}

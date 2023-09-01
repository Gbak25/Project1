import { useGetChannelById } from '@application/hooks/use_get_data';
import { Flex, ScrollArea } from '@radix-ui/themes';
import { FollowButton } from '../../components/organisms/followButton';
import { LeftSectionWrapper, RightSectionWrapper } from './styles';

type ChannelDetailProps = {
  channelId: string;
};

const AnyReactComponent = ({
  text,
  lat,
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}): JSX.Element => <div>{text}</div>;

export function ChannelDetail(props: ChannelDetailProps): JSX.Element {
  const { channelId } = props;
  const { data } = useGetChannelById(channelId);

  if (!data) {
    return <p>No Content</p>;
  }
  return (
    <ScrollArea>
      <Flex wrap="wrap">
        <Flex width="100%">
          <LeftSectionWrapper>Video Section</LeftSectionWrapper>
          <RightSectionWrapper>
            <p>
              <span>Subject: </span>
              <span>
                {data.category === 'all' ? 'all' : data.category.join(', ')}
              </span>
            </p>
            <p>
              <span>Followers: </span>
              <span>{data.followers}</span>
            </p>
            <p>
              <span>Location: </span>
              <span>{data.address}</span>
            </p>
            <a
              href={`http://maps.google.com/maps?q=${data.latitude},${data.longitude}`}
              rel="noreferrer noopener"
              target="_blank">
              <div
                style={{
                  height: 300,
                  width: '100%',
                  backgroundColor: 'orange',
                  margin: '20px 0',
                }}>
                Go to Maps
              </div>
            </a>
            <FollowButton channelId={channelId} />
          </RightSectionWrapper>
        </Flex>
        <Flex width="100%">
          <LeftSectionWrapper>QnA Section</LeftSectionWrapper>
          <RightSectionWrapper>Recom</RightSectionWrapper>
        </Flex>
      </Flex>
    </ScrollArea>
  );
}

import { useGetChannelById } from '@application/hooks/use_get_data';

type ChannelDetailProps = {
  channelId: string;
};

export function ChannelDetail(props: ChannelDetailProps): JSX.Element {
  const { channelId } = props;
  const { data } = useGetChannelById(channelId);

  if (!data) {
    return <p>No Content</p>;
  }
  return <div>Channel Detail {data.name}</div>;
}

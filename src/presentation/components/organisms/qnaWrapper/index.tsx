import type {
  ChannelDTO,
  QnADTO,
} from '../../../../infrastructure/data/models';
import { CommentList } from '../commentList';
import { QnAInput } from '../qnaInput';

type QnaWrapperProps = {
  qnas: QnADTO[];
  data: ChannelDTO | undefined;
};

export function QnaWrapper(props: QnaWrapperProps): JSX.Element {
  const { qnas, data } = props;

  if (!data) {
    return <p>No Content</p>;
  }
  return (
    <>
      <QnAInput channelId={data.id} />
      <CommentList>
        {qnas.reverse().map((d) => {
          return (
            <CommentList.Item
              key={d.id}
              name={d.uploader.name}
              content={d.content}
              replies={d.replies.map((r) => {
                return {
                  name: r.uploader.name,
                  content: r.content,
                };
              })}
            />
          );
        })}
      </CommentList>
    </>
  );
}

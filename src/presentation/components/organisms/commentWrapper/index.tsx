import type { CommentDTO } from '@infrastructure/data/models';
import { useEffect, useRef } from 'react';
import { CommentInput } from '../commentInput';
import { CommentList } from '../commentList';

type CommentWrapperProps = {
  videoId: string;
  commentData: CommentDTO[];
};

export function CommentWrapper(props: CommentWrapperProps): JSX.Element {
  const { videoId, commentData } = props;
  const commentEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commentData]);

  return (
    <div>
      <CommentInput videoId={videoId} />
      <CommentList>
        {commentData.map((d) => {
          return (
            <CommentList.Item
              key={d.id}
              name={d.uploader.name}
              content={d.content}
              replies={[]}
            />
          );
        })}
      </CommentList>
      <div ref={commentEndRef} />
    </div>
  );
}

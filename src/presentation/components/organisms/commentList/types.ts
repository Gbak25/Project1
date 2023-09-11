export type CommentListProps = {
  children: JSX.Element | JSX.Element[];
};

export type CommentItemProps = {
  name: string;
  content: string;
  replies: {
    name: string;
    content: string;
  }[];
};

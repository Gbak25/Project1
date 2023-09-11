import 'react-tabs/style/react-tabs.css';
import type { CommentDTO, VideoDTO } from '@infrastructure/data/models';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { CommentWrapper } from '../commentWrapper';
import { RecommendedWrapper } from '../recommendedWrapper';

type VideoDetailTabsProps = {
  recommends: VideoDTO[];
  commentData: CommentDTO[];
  videoId: string;
};

export function VideoDetailTabs(props: VideoDetailTabsProps): JSX.Element {
  const { recommends, commentData, videoId } = props;

  return (
    <Tabs>
      <TabList>
        <Tab>Recommend</Tab>
        <Tab>Review</Tab>
      </TabList>
      <TabPanel>
        <RecommendedWrapper recommends={recommends} />
      </TabPanel>
      <TabPanel>
        <CommentWrapper videoId={videoId} commentData={commentData} />
      </TabPanel>
    </Tabs>
  );
}

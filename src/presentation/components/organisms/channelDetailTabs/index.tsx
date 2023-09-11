import 'react-tabs/style/react-tabs.css';
import type { ChannelDTO, QnADTO, VideoDTO } from '@infrastructure/data/models';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { QnaWrapper } from '../qnaWrapper';
import { RecommendedWrapper } from '../recommendedWrapper';

type ChannelTabsProps = {
  qnas: QnADTO[];
  data: ChannelDTO | undefined;
  recommends: VideoDTO[];
};

export function ChannelTabs(props: ChannelTabsProps): JSX.Element {
  const { qnas, data, recommends } = props;

  return (
    <Tabs>
      <TabList>
        <Tab>Recommend</Tab>
        <Tab>Q&A</Tab>
      </TabList>
      <TabPanel>
        <RecommendedWrapper recommends={recommends} />
      </TabPanel>
      <TabPanel>
        <QnaWrapper qnas={qnas} data={data} />
      </TabPanel>
    </Tabs>
  );
}

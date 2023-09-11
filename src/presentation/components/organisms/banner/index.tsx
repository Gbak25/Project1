import 'swiper/css';
import 'swiper/scss/pagination';
import { Flex } from '@radix-ui/themes';
import { BannerWrapper } from './styles';

export function Banner(): JSX.Element {
  return (
    <BannerWrapper>
      <div className="txtBox">
        <Flex direction="column">
          <p className="title">The Age of General Studies:</p>
          <p className="title">How to Have Your Own Perspective.</p>
        </Flex>
        <p className="subTitle">Dental specialist | Mr.Bak</p>
      </div>
      <img src="/banner.png" alt="banner" />
    </BannerWrapper>
  );
}

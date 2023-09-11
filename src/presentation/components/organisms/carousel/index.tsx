import 'swiper/css';
import 'swiper/scss/pagination';
import { Container, Flex } from '@radix-ui/themes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Item } from './styles';

export function Carousel(): JSX.Element {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide style={{ backgroundColor: '#21272A' }}>
        <Container>
          <Item>
            <div className="txtBox">
              <p className="title">healthcare community</p>
              <p className="description">Join us in our medical</p>
              <p className="description">newsletter.</p>
            </div>
            <img className="imgBox " src="/landing.png" alt="landing" />
          </Item>
        </Container>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundColor: '#21272A' }}>
        <Container>
          <Item>
            <Flex direction="column" style={{ color: 'white' }}>
              <p className="title">healthcare community</p>
              <p className="description">Join us in our medical</p>
              <p className="description">newsletter.</p>
            </Flex>
            <img className="imgBox " src="/landing.png" alt="landing" />
          </Item>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
}

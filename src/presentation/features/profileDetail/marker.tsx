import { memo } from 'react';
import isEqual from 'react-fast-compare';

type MarkerProps = {
  lat: number;
  lng: number;
  text: string;
};

function Marker(props: MarkerProps): JSX.Element {
  const { lat, lng, text } = props;

  return <div>{text}</div>;
}

export default memo(Marker, isEqual);

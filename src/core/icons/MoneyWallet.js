import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const SvgMoneyWallet = props => (
  <Svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <Path d="M3.75 23.749A3.754 3.754 0 010 19.999v-10.5a3.728 3.728 0 013.556-3.741L14.073.5a2.235 2.235 0 011.718-.123c.57.19 1.032.591 1.301 1.129l2.139 4.278A3.76 3.76 0 0122.5 9.499v.879a2.26 2.26 0 011.5 2.121v4.5c0 .96-.615 1.808-1.5 2.121v.879a3.754 3.754 0 01-3.75 3.75h-15zm0-16.5a2.252 2.252 0 00-2.25 2.25v10.5a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-.75h-3c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5h3v-.75c0-1.24-1.009-2.25-2.249-2.25H3.75zm14.25 4.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h3.75a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H18zm-.464-6L15.75 2.177a.744.744 0 00-.672-.415.737.737 0 00-.334.08L6.927 5.749h10.609z" />
    <Circle cx={18} cy={14.749} r={1.125} />
  </Svg>
);

export default SvgMoneyWallet;
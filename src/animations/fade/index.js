// @flow

import {
  down,
  downBig,
  up,
  upBig,
  left,
  right,
  leftBig,
  rightBig,
  fadeIn,
} from './styledFade';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

// fade animation components
const fadeObj: Components = {
  FadeIn: HOC('FadeIn', fadeIn),
  FadeInDown: HOC('FadeInDown', down),
  FadeInDownBig: HOC('FadeInDownBig', downBig),
  FadeInUp: HOC('FadeInUp', up),
  FadeInUpBig: HOC('FadeInUpBig', upBig),
  FadeInLeft: HOC('FadeInLeft', left),
  FadeInLeftBig: HOC('FadeInLeftBig', leftBig),
  FadeInRight: HOC('FadeInRight', right),
  FadeInRightBig: HOC('FadeInRightBig', rightBig),
};

export default fadeObj;

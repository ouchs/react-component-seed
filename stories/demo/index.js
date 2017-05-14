import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

import readme from '../../doc/demo.md';
import { Demo } from 'sc';

const options = {
  inline: true
};

storiesOf('Demo', module)
  .addDecorator(withReadme(readme))
  .addWithInfo('Hello World', () => (
    <Demo>Hello World</Demo>
  ), options);

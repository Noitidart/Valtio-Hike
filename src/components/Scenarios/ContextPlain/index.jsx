import React from 'react';

import useRenderCounter from '../hooks/useRenderCounter';

export default function Scenario() {
  return <>{useRenderCounter('Scenario')}</>;
}

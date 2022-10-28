import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

export default function Root({children}) {
  return <BrowserOnly>{() => children}</BrowserOnly>;
}
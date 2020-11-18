import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabsProps, TabProps } from './';

describe('<Tabs />', () => {
    const tabs: TabProps[] = [
      {
        label: 'TAB nr 1',
        content: (
          <div>TAB NR 1</div>
        )
      },
      {
        label: 'TAB nr 2',
        content: (
          <div>TAB NR 2</div>
        )
      },
      {
        label: 'TAB nr 3',
        content: (
          <div>TAB NR 3</div>
        )
      }
    ];
    
    const props: TabsProps = {
      tabs: tabs
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

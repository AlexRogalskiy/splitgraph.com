// @jsx jsx
// @ts-ignore
import { jsx, Box } from 'theme-ui';
import * as React from 'react';
import { useContext } from 'react';

// ILayoutContext,
import { LayoutContext } from '../Layout/TwoColumnLayout';

export interface MenuProps {
  children?: React.ReactNode;
}

export default ({ children }: MenuProps) => {
  const { expanded } = useContext(LayoutContext);

  const containerStyle = {
    '.menu-list': {
      paddingLeft: '1em',
      paddingTop: '1em',
      paddingRight: '1em',
      paddingBottom: '1em',
      listStyleType: 'none',
      marginBottom: [null, null, '1em'],
      display: 'flex',
      flexDirection: [
        expanded ? 'column' : 'row',
        expanded ? 'column' : 'row',
        'column',
      ],
      overflowX: [
        expanded ? 'initial' : 'scroll',
        expanded ? 'initial' : 'scroll',
        'initial',
      ],
      scrollBehavior: [
        expanded ? 'initial' : 'smooth',
        expanded ? 'initial' : 'smooth',
        'initial',
      ],
    },
    '.menu-item': {
      marginLeft: [
        expanded ? 'initial' : '1em',
        expanded ? 'initial' : '1em',
        'initial',
      ],
      backgroundColor: [
        expanded ? 'initial' : 'secondary',
        expanded ? 'initial' : 'secondary',
        'initial',
      ],
      padding: '1em',
      borderRadius: [
        expanded ? 'initial' : '1em',
        expanded ? 'initial' : '1em',
        'initial',
      ],
    },
    '.menu-item-inner-container': {
      marginLeft: [
        expanded ? '1rem' : '1em',
        expanded ? '1rem' : '1em',
        '1rem',
      ],
      marginRight: [
        expanded ? '1rem' : 'initial',
        expanded ? '1rem' : 'initial',
        '1rem',
      ],
    },
    '.menu-item-link': {
      //   Should match the background ("hide" it without bumpy shift)
      borderBottomColor: [
        expanded ? 'heavy' : 'secondary',
        expanded ? 'heavy' : 'secondary',
        'heavy',
      ],
      'border-bottom-style': 'solid',
      borderBottomWidth: '1px',
      ':hover': {
        borderBottomColor: 'light',
      },
    },
    '.menu-item-label': {
      display: ['initial', 'initial', expanded ? 'none' : 'initial'],
    },
  };

  return (
    <Box sx={containerStyle}>
      <ul className="menu-list">{children}</ul>
    </Box>
  );
};

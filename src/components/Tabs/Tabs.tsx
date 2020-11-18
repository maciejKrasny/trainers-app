import React, { ReactElement, useState, useEffect } from 'react';
import { TitleTabsContainer, Tab } from './Tabs.style';
import { TabProps, TabsProps, TabsControlledProps } from './Tabs.types';

const Tabs = (props: TabsControlledProps) => {
    const { selected, onSelect, tabs, customClassName } = props;
    const tabElements = tabs.map((tab: TabProps, key: number) => {
        const color: string | undefined = selected === key ? tab.selectedColor : 'none';
        const hoverColor: string | undefined = tab.selectedColor || '#0072b6';
        return (
            <Tab theme={{ selectedColor: color, hoverColor: hoverColor }}
                 key={key} onClick={() => onSelect(key)}
                 style={tab.labelStyle}
            >
                {tab.label}
            </Tab>
        );
    });

    const tabContent: ReactElement | undefined = props.tabs[selected].content;

    return (
        <>
            <TitleTabsContainer>
                {tabElements}
            </TitleTabsContainer>
            <div className={customClassName || ''}>
                {tabContent}
            </div>
        </>
    );
};

const checkDefaultTabIndex = (defaultTabIndex: number | undefined, tabsRange: number): number => {
    const defaultTab: number = defaultTabIndex || 0;
    return defaultTab >= tabsRange ? 0 : defaultTab;
};

const TabsContainer = (props: TabsProps) => {
    const defaultTabIndex: number = checkDefaultTabIndex(props.defaultTabIndex, props.tabs.length);
    const [ selected, setSelected ] = useState<number>(defaultTabIndex);

    useEffect(() => {
        setSelected(defaultTabIndex);
    }, [ defaultTabIndex ]);
    return (
        <Tabs {...props} selected={selected} onSelect={setSelected}/>
    );
};

export default (props: TabsProps) => {
    if (props.onSelect) {
        return (
            <Tabs {...props} onSelect={props.onSelect} selected={props.selected || 0}/>
        );
    } else {
        return (
            <TabsContainer {...props}/>
        );
    }
};

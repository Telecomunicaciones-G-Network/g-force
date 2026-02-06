import type { TabLine, TabLineContent } from './interfaces';
import type { TabsProps } from '../tabs/tabs.props';

/**
 * @interface TabsLineProps
 *
 * @property {string | number} defaultValue - The default value of the tabs line
 * @property {TabLine[]} tabs - The tabs of the tabs line
 * @property {TabLineContent[]} tabsContent - The tabs content of the tabs line
 */
export interface TabsLineProps extends Pick<TabsProps, 'defaultValue'> {
  tabs?: TabLine[];
  tabsContent?: TabLineContent[];
}

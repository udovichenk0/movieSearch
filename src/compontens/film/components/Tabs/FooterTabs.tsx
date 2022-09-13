import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import style from './tabs.module.scss'
export const FooterTabs = ({tabInfo}: any) => {
	return (
		<Tabs className={style.tab}>
    <TabList className={style.tab__buttons}>
      {tabInfo?.map(({title, condition}: any, id: number) =>  {
      if(!condition) return
      return <React.Fragment key={title}>
      <Tab key={id} className={style.tab__button}>{title}</Tab>
      </React.Fragment>
      })}
    </TabList>

     {tabInfo.map((item: any, id:number) => {
      if(!item.condition) return
      return <TabPanel key={id}>{item.content}</TabPanel>
     })}
  </Tabs>
	)
}
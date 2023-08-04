import React, { useState } from 'react';
import { Tabs } from 'antd';
import Chat from './chat';
import Prompts from './prompts';
import KnowledgeBase from './knowledgeBase';


function Index() {
  
  const { TabPane } = Tabs;
  const [selected, setSelected] = useState<string>('Chat'); // Set a default selected key

  const onChange = (key: string) => {
    setSelected(key);
  }

  return (
    <div>
      <Tabs activeKey={selected} onChange={onChange}>
        <TabPane tab="Xccelerate Chat" key="Chat">
          <Chat />
        </TabPane>
        <TabPane tab="Prompts" key="Prompts">
          <Prompts />
        </TabPane>
        <TabPane tab="Knowledge Base" key="KnowledgeBase">
          <KnowledgeBase />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Index;



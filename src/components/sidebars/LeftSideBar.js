import { List, Panel, PanelGroup } from "rsuite";

export const LeftSidebar = () => {
  return (
    <div className="sideBox">
      <div className="leftSideBox">
        <Panel header="Categories" bordered>
          <List>
            <List.Item>Category 1</List.Item>
            <List.Item>Category 2</List.Item>
            <List.Item>Category 3</List.Item>
          </List>
        </Panel>
      </div>
      <div className="leftSideBox">
        <Panel header="Tags" bordered>
          <List>
            <List.Item>Tag 1</List.Item>
            <List.Item>Tag 2</List.Item>
            <List.Item>Tag 3</List.Item>
          </List>
        </Panel>
      </div>
    </div>
  );
};

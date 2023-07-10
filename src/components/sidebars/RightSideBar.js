import { IconButton, ButtonToolbar, List, Panel } from "rsuite";

import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
import TwitterIcon from "@rsuite/icons/legacy/Twitter";
import LinkedinIcon from "@rsuite/icons/legacy/Linkedin";

export const RightSidebar = () => {
  return (
    <div className="sideBox">
      <div className="rightSideBox">
        <Panel header="Recent Posts" bordered>
          <List>
            <List.Item>Post 1</List.Item>
            <List.Item>Post 2</List.Item>
            <List.Item>Post 3</List.Item>
          </List>
        </Panel>
      </div>
      <div className="rightSideBox">
        <Panel header="Social Media Links" bordered>
          <ButtonToolbar>
            <IconButton
              icon={<FacebookOfficialIcon />}
              color="blue"
              appearance="primary"
              circle
            />
            <IconButton
              icon={<GooglePlusCircleIcon />}
              color="red"
              appearance="primary"
              circle
            />
            <IconButton
              icon={<TwitterIcon />}
              color="cyan"
              appearance="primary"
              circle
            />
            <IconButton
              icon={<LinkedinIcon />}
              color="blue"
              appearance="primary"
              circle
            />
          </ButtonToolbar>
        </Panel>
      </div>
    </div>
  );
};

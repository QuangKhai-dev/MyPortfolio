import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

type Props = {};

const Working = (props: Props) => {
  const arrWorkingAndLearned = [
    {
      value: "a",
      title: "CyberSoft Academy",
    },
    {
      value: "b",
      title: "Freelancer",
    },
  ];
  return (
    <section>
      <div className="container">
        <h2 className="title-section flex items-end text-3xl max-w-max">
          Where I&apos;ve Worked and Learned
        </h2>
        <div>
          <Tabs.Root defaultValue="tab1" orientation="horizontal">
            <Tabs.List aria-label="tabs example">
              <Tabs.Trigger value="tab1">One</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">Tab one content</Tabs.Content>
            <Tabs.Content value="tab2">Tab two content</Tabs.Content>
            <Tabs.Content value="tab3">Tab three content</Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default Working;

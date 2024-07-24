import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="account" className="flex items-baseline ">
            <TabsList className="flex-col flex items-start">
              {arrWorkingAndLearned.map((item, index) => {
                return (
                  <TabsTrigger key={index} value={item.value}>
                    {item.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div>
              <TabsContent value="a">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="b">Change your password here.</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Working;

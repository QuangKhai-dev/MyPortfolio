import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";

const TabBlogContent = () => {
  return (
    <section className="w-6/12">
      <Tabs>
        <TabsList>
          <TabsTrigger value="all">Personalized</TabsTrigger>
          <TabsTrigger value="web">Following</TabsTrigger>
          <TabsTrigger value="mobile">Featured</TabsTrigger>
          <TabsTrigger value="design">Recent</TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
};

export default TabBlogContent;

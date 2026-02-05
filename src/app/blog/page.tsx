import LeftSidebar from "@/widget/left-sidebar/ui";
import RightSidebar from "@/widget/right-sidebar/ui";
import TabBlogContent from "@/widget/tab-blog-content/ui";

const page = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <TabBlogContent />
      <RightSidebar />
    </div>
  );
};

export default page;

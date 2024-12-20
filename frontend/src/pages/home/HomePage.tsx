import { Button } from "@/components/ui/button";
import LeftSection from "./partials/LeftSection";
import RightSection from "./partials/RightSection";
import PopularProjects from "@/components/card/PopularProjectsCard";
import RecentBlogsCard from "@/components/card/RecentBlogsCard";
import RightBlogSidebar from "./sidebar/RightBlogSidebar";
import SidebarTitle from "@/components/ui/title/SidebarTitle";
import { usePostStore } from "@/store/PostStore";
import { useEffect, useState } from "react";
import PaginationItems from "@/components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { Post } from "@/types/types";
import { SkeletonCard } from "@/components/skeleton/Skeleton";

const HomePage = () => {
  const { posts, getPostFilter, getAll, postsAll, loading } = usePostStore();
  const [visibleBlogsCount, setVisibleBlogsCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    getPostFilter(Number(page));
    setCurrentPage(Number(page));
    getAll();
  }, [page]);

  const leftPost = postsAll.find(
    (item: Post) => item.categoryHeader === "blog"
  );

  const rightPosts = postsAll
    ?.filter(
      (post: Post) => post?.categoryHeader === "blog" && post !== leftPost
    )
    .slice(0, 4);

  //projects

  const projects = posts?.posts?.filter(
    (post) => post?.categoryHeader === "project"
  );

  // recent blog
  const allRecentBlogs =
    postsAll?.filter((post: Post) => post?.categoryHeader === "blog") || [];

  const recentBlogs = allRecentBlogs.slice(0, visibleBlogsCount);

  const loadMoreBlogs = () => {
    setVisibleBlogsCount(visibleBlogsCount + allRecentBlogs.length);
  };

  const handlePaginationChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: String(pageNumber) });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold font-body mt-4 border-b border-b-gray-200">
        Latest Blog
      </h1>
      <div className="lg:grid grid-cols-3 gap-6 mt-8 max-w-[1024px] mx-auto ">
        {/* Sol Taraf: Tam Ekran Görsel */}
        {loading ? (
          <SkeletonCard classNameSlider="w-full h-[500px] object-cover" />
        ) : (
          <LeftSection post={leftPost} />
        )}
        {/* Sağ Taraf: Üç Bölümlü Liste */}
        <div className="lg:flex flex-col gap-6 hidden">
          {loading ? (
            <SkeletonCard />
          ) : (
            rightPosts.map((item: any) => (
              <RightSection posts={item} key={item.id} />
            ))
          )}
        </div>
      </div>

      {/* Section Popular Project */}
      <div className="bg-[#1F2024] w-full h-full mt-8 rounded-lg">
        <Button variant={"destructive"}>Popular Projects</Button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {loading
          ? projects?.map(() => (
              <SkeletonCard classNameSlider="w-full h-[400px] object-cover rounded-lg " />
            ))
          : projects?.map((item: any) => (
              <PopularProjects key={item.id} post={item} />
            ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <PaginationItems
          totalItems={posts?.totalPosts}
          itemsPerPage={posts?.resPerPage}
          currentPage={currentPage}
          setCurrentPage={handlePaginationChange}
        />
      </div>

      {/* Section Popular Blogs */}
      <div className="lg:grid grid-cols-3 gap-2">
        <div className="bg-[#1F2024] col-span-2 h-full mt-8 rounded-lg flex items-center justify-between lg:px-4">
          <Button variant={"destructive"}>Recent Blogs</Button>
          <Button size={"sm"} variant={"destructive"} className="lg:py-0 py-4">
            Show More
          </Button>
        </div>
        <div className="lg:flex hidden w-full">
          <SidebarTitle title="Social Plugin" />
        </div>
      </div>

      <div className="lg:grid grid-cols-3 gap-2">
        {/* Left:Blogs List */}
        <div className="col-span-2 mt-12">
          <div className="flex flex-col gap-4">
            {loading
              ? recentBlogs?.map(() => (
                  <SkeletonCard classNameSlider="w-[280px] h-[210px] object-cover rounded-lg " />
                ))
              : recentBlogs.map((item: any) => (
                  <RecentBlogsCard key={item.id} post={item} />
                ))}
          </div>
          {visibleBlogsCount < allRecentBlogs.length && (
            <div className="flex items-center justify-center mt-4">
              <Button
                size={"md"}
                variant={"destructive"}
                onClick={loadMoreBlogs}
              >
                Load More
              </Button>
            </div>
          )}
        </div>

        {/* Right:Sidebar */}
        <div className="mt-12 lg:block hidden">
          <RightBlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

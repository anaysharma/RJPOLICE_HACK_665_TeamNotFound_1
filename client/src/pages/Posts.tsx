import ActivityBar from "../components/ActivityBar";
import PostsFeed from "../components/PostsFeed";
import SideBar from "../components/SIdebar";

export default function Posts(): JSX.Element {
  return (
    <main className="mx-auto flex max-w-7xl gap-4 p-4">
      <ActivityBar />
      <PostsFeed />
      <SideBar />
    </main>
  );
}

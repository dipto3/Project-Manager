import Content from "./Content";
import Header from "./Header";

export default function Dashboard() {
  return (
    <>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <Content />
      </main>
    </>
  );
}

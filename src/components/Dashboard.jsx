import { SearchProvider } from "../context/SearchContext";
import Content from "./Content";
import Header from "./partials/Header";

export default function Dashboard() {
  return (
    <>
      <SearchProvider>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <Content />
        </main>
      </SearchProvider>
    </>
  );
}

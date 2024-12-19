import TopBar from "./partials/TopBar";
import { Search } from "lucide-react";
import { useState } from "react";
import EditProfileInput from "../input/EditInput";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import MenuLinks from "./partials/MenuLinks";
import { searchData, searchMessageData } from "@/validation/SearchSchema";
import BottomHeader from "./partials/BottomHeader";

import UserMenu from "./partials/UserMenu";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const form = useForm<searchData>({
    resolver: zodResolver(searchMessageData),
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });

  const onSubmit = () => {};

  return (
    <div className="border-b border-b-gray-200 w-full">
      <TopBar />
      <div className="flex  items-center justify-between max-w-[1024px] mx-auto ">
        <div>
          <h1 className="uppercase text-2xl font-bold font-heading italic pt-4">
            Software <span className="text-[#E21228]">Developer</span>
          </h1>
          <p className="text-gray-600 italic font-heading">Dream and achieve</p>
        </div>
        {searchOpen ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-1/2 px-4 relative mds:block hidden"
            >
              <EditProfileInput
                control={form.control}
                name="search"
                placeholder="Search"
                type="text"
                className="w-full"
              />
            </form>
          </Form>
        ) : (
          <div className="gap-4  items-center font-semibold mds:flex hidden">
            <MenuLinks />
          </div>
        )}

        <div className="mds:flex hidden">
          <Search
            size={20}
            className="cursor-pointer mt-1"
            onClick={() => setSearchOpen(!searchOpen)}
          />
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
      <div className="mds:block hidden">
        <BottomHeader />
      </div>
    </div>
  );
};

export default Header;

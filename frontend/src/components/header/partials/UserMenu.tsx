import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserStore } from "@/store/AuthStore";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const { user, logout } = useUserStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-[250px]">
          <div className="grid gap-4">
            {user ? (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{user?.name}</h3>
                <p className="text-gray-500">{user?.email}</p>
                {user?.role === "admin" && (
                  <Link to={"/admin/create"}>
                    <Button className="w-full mt-4">Create</Button>
                  </Link>
                )}
                <Button className="w-full mt-4" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link to={"/auth"}>
                  <Button className="w-full mt-4">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserMenu;

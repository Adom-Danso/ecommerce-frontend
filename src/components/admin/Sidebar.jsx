import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function AdminSidebar({ currentUser }) {
  return (
    <Card
      className="fixed top-18 left-0 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/2 rounded-none bg-gray-800"
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          {currentUser.firstName} {currentUser.lastName}
        </Typography>
      </div>
      <List className="text-white">
        <Link to="/admin/dashboard">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/admin/users">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Users
          </ListItem>
        </Link>
        <Link to="/admin/products">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Products
          </ListItem>
        </Link>
        <Link to="/admin/orders">
          <ListItem>
            <ListItemPrefix>
              <ShoppingCartIcon className="h-5 w-5" />
            </ListItemPrefix>
            Orders
          </ListItem>
        </Link>
        <Link to="/admin/inbox">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
          </ListItem>
        </Link>
      </List>
    </Card>

  );
}

import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "company",
    path: "/dashboard/companies",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "client",
    path: "/dashboard/clients",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "project",
    path: "/dashboard/projects",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "policy",
    path: "/dashboard/policies",
    icon: getIcon(fileTextFill),
  },
  {
    title: "user",
    path: "/dashboard/users",
    icon: getIcon(peopleFill),
  },
  {
    title: "profile",
    path: "/dashboard/profile",
    icon: getIcon(peopleFill),
  },
];

export default sidebarConfig;

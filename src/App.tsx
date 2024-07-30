import React from "react";
import { Admin, Resource, ListGuesser, Layout } from "react-admin";
import { dataProvider } from "./dataProvider"; // Your data provider
import EuroIcon from "@mui/icons-material/EuroRounded";

interface BO_Props {
  authProvider: any;
  envVariables: any;
  CustomMenu: React.FC;
}

// eslint-disable-next-line no-unused-vars
const BO_1 = ({ authProvider, envVariables, CustomMenu }: BO_Props) => (
  <Admin
    basename="/bo_1"
    dataProvider={dataProvider}
    loginPage={false}
    layout={(props) => <Layout {...props} menu={CustomMenu} />}
    darkTheme={null}
  >
    <Resource icon={EuroIcon} name="posts" list={ListGuesser} />
    <Resource icon={EuroIcon} name="photos" list={ListGuesser} />
    <Resource icon={EuroIcon} name="todos" list={ListGuesser} />
  </Admin>
);

export default BO_1;

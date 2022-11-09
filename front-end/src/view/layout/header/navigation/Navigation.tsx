import { Layout, Menu } from "antd";
import { DashboardOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { menu_data } from "../../../../data/menu_item";
import { MenuInterface } from "../../../../interface/HeaderInterface";
import { Link } from "react-router-dom";


const Navigation:React.FC = () => {
  return (
    <Menu mode="horizontal">
      {menu_data.map((items: MenuInterface, idx: number) => (
        <Menu.Item key={idx} icon={<DashboardOutlined />}> 
          <Link to={items.route}>
            {items.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navigation;

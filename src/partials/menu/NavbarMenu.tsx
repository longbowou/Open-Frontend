import { KeenIcon } from '@/components';
import {
  Menu,
  TMenuConfig,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';

const NavbarMenu = ({ items }: { items: TMenuConfig }) => {
  const buildMenu = (items: TMenuConfig) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={index}
            className="text-sm border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary"
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: 'bottom-start',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 0] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuLink className="pb-4 px-2 gap-0.5 cursor-pointer">
              <MenuTitle className="text-nowrap font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
              {buildMenuSub(item.children)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem
            key={index}
            className="text-sm border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary"
          >
            <MenuLink path={item.path} className="pb-4 px-2">
              <MenuTitle className="text-nowrap font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-item-show:font-semibold menu-link-hover:text-primary">
                {item.title}
              </MenuTitle>
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  const buildMenuSub = (items: TMenuConfig) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={index}
            className="text-sm"
            toggle="dropdown"
            trigger="hover"
            dropdownProps={{
              placement: 'right-start',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 0] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuLink className="py-1.5 px-2 gap-0.5 cursor-pointer">
              <MenuTitle className="mr-1 font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
              {buildMenuSub(item.children)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem className="text-sm" key={index}>
            <MenuLink
              path={item.path}
              className="py-1.5 px-2 gap-0.5 rounded-lg menu-item-active:bg-secondary-active"
            >
              <MenuTitle className="font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  const buildMenuToggle = () => {
    return (
      <MenuToggle className="justify-end me-[-2px] w-[20px] text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
        <KeenIcon icon="down" className="text-xs [.menu-dropdown_&]:-rotate-90" />
      </MenuToggle>
    );
  };

  return (
    <div className="grid">
      <div className="scrollable-x-auto">
        <Menu highlight={true} className="menu gap-3">
          {buildMenu(items)}
        </Menu>
      </div>
    </div>
  );
};

export { NavbarMenu };

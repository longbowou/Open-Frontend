import {
  KeenIcon,
  MenuArrow,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle
} from '@/components';

const DropdownCrud2 = () => {
  return (
    <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="document" />
          </MenuIcon>
          <MenuTitle>View</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem
        toggle="dropdown"
        trigger="hover"
        dropdownProps={{
          placement: 'right-start',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-15, 0] // [skid, distance]
              }
            }
          ]
        }}
      >
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="notification-status" />
          </MenuIcon>
          <MenuTitle>Export</MenuTitle>
          <MenuArrow>
            <KeenIcon icon="right" className="text-3xs" />
          </MenuArrow>
        </MenuLink>
        <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="sms" />
              </MenuIcon>
              <MenuTitle>Email</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="message-notify" />
              </MenuIcon>
              <MenuTitle>SMS</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="notification-status" />
              </MenuIcon>
              <MenuTitle>Push</MenuTitle>
            </MenuLink>
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="pencil" />
          </MenuIcon>
          <MenuTitle>Edit</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="trash" />
          </MenuIcon>
          <MenuTitle>Delete</MenuTitle>
        </MenuLink>
      </MenuItem>
    </MenuSub>
  );
};

export { DropdownCrud2 };

import {
  KeenIcon,
  MenuArrow,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle
} from '@/components';

const DropdownCrud1 = () => {
  return (
    <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
      <MenuItem path="/account/home/settings-plain">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="add-files" />
          </MenuIcon>
          <MenuTitle>Add</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem path="/account/members/import-members">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="file-down" />
          </MenuIcon>
          <MenuTitle>Import</MenuTitle>
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
            <KeenIcon icon="file-up" />
          </MenuIcon>
          <MenuTitle>Export</MenuTitle>
          <MenuArrow>
            <KeenIcon icon="right" className="text-3xs" />
          </MenuArrow>
        </MenuLink>
        <MenuSub className="menu-default" rootClassName="w-full max-w-[125px]">
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuTitle>PDF</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuTitle>CVS</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuTitle>Excel</MenuTitle>
            </MenuLink>
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem path="/account/security/privacy-settings">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="setting-3" />
          </MenuIcon>
          <MenuTitle>Settings</MenuTitle>
        </MenuLink>
      </MenuItem>
    </MenuSub>
  );
};

export { DropdownCrud1 };

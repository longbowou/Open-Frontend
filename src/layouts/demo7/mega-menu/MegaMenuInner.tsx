import { Fragment, useEffect, useState } from 'react';
import { useResponsive } from '@/hooks';
import { KeenIcon } from '@/components';
import { TMenuConfig, MenuItem, MenuLink, MenuTitle, MenuArrow, Menu } from '@/components/menu';
import {
  MegaMenuSubProfiles,
  MegaMenuSubAccount,
  MegaMenuSubNetwork,
  MegaMenuSubAuth,
  MegaMenuSubHelp
} from '@/partials/menu/mega-menu';
import { MENU_MEGA } from '@/config';

const MegaMenuInner = () => {
  const desktopMode = useResponsive('up', 'lg');
  const build = (items: TMenuConfig) => {
    const homeItem = items[0];

    const linkClass = 'border-b border-b-transparent menu-item-active:border-b-gray-400 menu-item-here:border-b-gray-400';
    const titleClass = 'text-2sm text-gray-800 dark:menu-item-here:text-gray-900 dark:menu-item-active:text-gray-900 menu-item-show:text-gray-900 menu-item-here:text-gray-900 menu-item-active:font-medium menu-item-here:font-medium';

    return (
      <Fragment>
        <MenuItem key="home">
          <MenuLink path={homeItem.path} className={linkClass}>
            <MenuTitle className={titleClass}>Profile</MenuTitle>
          </MenuLink>
        </MenuItem>
      </Fragment>
    );
  };

  const buildArrow = () => {
    return (
      <MenuArrow className="flex lg:hidden text-gray-400">
        <KeenIcon icon="plus" className="text-2xs menu-item-show:hidden" />
        <KeenIcon icon="minus" className="text-2xs hidden menu-item-show:inline-flex" />
      </MenuArrow>
    );
  };

  return (
    <Menu
      multipleExpand={true}
      highlight={true}
      className="flex-col lg:flex-row gap-5 lg:gap-7.5 p-5 lg:p-0"
    >
      {build(MENU_MEGA)}
    </Menu>
  );
};

export { MegaMenuInner };

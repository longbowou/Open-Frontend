import { DefaultTooltip, KeenIcon } from '@/components';
import {
  TMenuConfig,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuArrow,
  MenuIcon,
  MenuBadge,
  MenuSeparator
} from '@/components/menu';
import { useResponsive } from '@/hooks';
import clsx from 'clsx';
import { ReactNode } from 'react';

const MegaMenuSubDropdown = (items: TMenuConfig) => {
  const desktopMode = useResponsive('up', 'lg');

  const buildItems = (items: TMenuConfig): ReactNode => {
    return items.map((item, index) => {
      if (item.separator) {
        return <MenuSeparator key={index} />;
      } else if (item.children) {
        return (
          <MenuItem
            key={index}
            toggle={desktopMode ? 'dropdown' : 'accordion'}
            trigger={desktopMode ? 'hover' : 'click'}
            dropdownProps={{
              placement: 'right-start'
            }}
          >
            <MenuLink className="grow-0">
              {item.icon && (
                <MenuIcon>
                  <KeenIcon icon={item.icon} />
                </MenuIcon>
              )}
              <MenuTitle className={clsx('')}>{item.title}</MenuTitle>
              <MenuArrow>
                <KeenIcon icon="right" className="text-3xs" />
              </MenuArrow>
            </MenuLink>
            <MenuSub className="menu-default lg:w-[220px]">{buildItems(item.children)}</MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem key={index}>
            <MenuLink path={item.path}>
              {item.icon && (
                <MenuIcon>
                  <KeenIcon icon={item.icon} />
                </MenuIcon>
              )}
              <MenuTitle>{item.title}</MenuTitle>

              {item.disabled && (
                <MenuBadge>
                  <span className="badge badge-xs">Soon</span>
                </MenuBadge>
              )}

              {item.badge && (
                <MenuBadge>
                  <span className="badge badge-primary badge-outline badge-xs">{item.badge}</span>
                </MenuBadge>
              )}

              {item.tooltip && (
                <DefaultTooltip title={item.tooltip.title} placement={item.tooltip.placement}>
                  <KeenIcon icon="information-2" className="text-gray-500 text-md" />
                </DefaultTooltip>
              )}
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  return buildItems(items);
};

export { MegaMenuSubDropdown };

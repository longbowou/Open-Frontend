import { KeenIcon } from '@/components';
import { MenuItem, MenuLink, MenuTitle, MenuIcon, MenuBadge, MenuSub } from '@/components/menu';
import { toAbsoluteUrl } from '@/utils';
import clsx from 'clsx';

const DropdownUserLanguages = () => {
  const languages = [
    {
      title: 'English',
      flag: 'united-states.svg',
      active: true
    },
    {
      title: 'Spanish',
      flag: 'spain.svg'
    },
    {
      title: 'German',
      flag: 'germany.svg'
    },
    {
      title: 'Japanese',
      flag: 'japan.svg'
    },
    {
      title: 'French',
      flag: 'france.svg'
    }
  ];

  const buildItems = () => {
    return languages.map((item, index) => (
      <MenuItem key={index} className={clsx(item.active && 'active')}>
        <MenuLink className="h-10">
          <MenuIcon>
            <img
              src={toAbsoluteUrl(`/media/flags/${item.flag}`)}
              className="inline-block size-4 rounded-full"
              alt={item.title}
            />
          </MenuIcon>
          <MenuTitle>{item.title}</MenuTitle>
          {item.active && (
            <MenuBadge>
              <KeenIcon icon="check-circle" style="solid" className="text-success text-base" />
            </MenuBadge>
          )}
        </MenuLink>
      </MenuItem>
    ));
  };

  return (
    <MenuItem
      toggle="dropdown"
      trigger="hover"
      dropdownProps={{
        placement: 'left-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [-10, 0] // [skid, distance]
            }
          }
        ]
      }}
    >
      <MenuLink>
        <MenuIcon>
          <KeenIcon icon="icon" />
        </MenuIcon>
        <MenuTitle>Language</MenuTitle>
        <div className="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
          English
          <img
            src={toAbsoluteUrl('/media/flags/united-states.svg')}
            className="inline-block size-3.5 rounded-full"
            alt=""
          />
        </div>
      </MenuLink>
      <MenuSub className="menu-default light:border-gray-300 w-[170px]">{buildItems()}</MenuSub>
    </MenuItem>
  );
};

export { DropdownUserLanguages };

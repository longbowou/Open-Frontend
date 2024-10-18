import {
  Menu,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';
import { KeenIcon } from '@/components/keenicons';
import { Fragment, useRef, useState } from 'react';
import { ModalShareProfile } from '../modals/share-profile';
import { ModalGiveAward } from '../modals/give-award';
import { ModalReportUser } from '../modals/report-user';

const NavbarDropdown = () => {
  const itemRef = useRef<any>(null);

  const [ShareProfileModalOpen, setShareProfileModalOpen] = useState(false);
  const handleSettingsModalOpen = () => {
    setShareProfileModalOpen(true);
    itemRef.current?.hide();
  };
  const handleShareProfileModalClose = () => {
    setShareProfileModalOpen(false);
  };

  const [giveAwardModalOpen, setGiveAwardModalOpen] = useState(false);
  const handleGiveAwardModalOpen = () => {
    setGiveAwardModalOpen(true);
    itemRef.current?.hide();
  };
  const handleGiveAwardModalClose = () => {
    setGiveAwardModalOpen(false);
  };

  const [reportUserModalOpen, setReportUserModalOpen] = useState(false);
  const handleReportUserModalOpen = () => {
    setReportUserModalOpen(true);
    itemRef.current?.hide();
  };
  const handleReportUserModalClose = () => {
    setReportUserModalOpen(false);
  };

  return (
    <Fragment>
      <Menu className="items-stretch">
        <MenuItem
          ref={itemRef}
          toggle="dropdown"
          trigger="click"
          dropdownProps={{
            placement: 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle className="btn btn-sm btn-icon btn-light">
            <KeenIcon icon="dots-vertical" />
          </MenuToggle>
          <MenuSub className="menu-default" rootClassName="w-full max-w-[220px]">
            <MenuItem onClick={handleSettingsModalOpen}>
              <MenuLabel>
                <MenuIcon>
                  <KeenIcon icon="coffee" />
                </MenuIcon>
                <MenuTitle>Share Profile</MenuTitle>
              </MenuLabel>
            </MenuItem>
            <MenuItem onClick={handleGiveAwardModalOpen}>
              <MenuLabel>
                <MenuIcon>
                  <KeenIcon icon="award" />
                </MenuIcon>
                <MenuTitle>Give Award</MenuTitle>
              </MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuLabel>
                <MenuIcon>
                  <KeenIcon icon="chart-line" />
                </MenuIcon>
                <MenuTitle>Stay Updated</MenuTitle>
                <label className="switch switch-sm">
                  <input type="checkbox" value="1" name="check" />
                </label>
              </MenuLabel>
            </MenuItem>
            <MenuItem onClick={handleReportUserModalOpen}>
              <MenuLabel>
                <MenuIcon>
                  <KeenIcon icon="information-2" />
                </MenuIcon>
                <MenuTitle>Report User</MenuTitle>
              </MenuLabel>
            </MenuItem>
          </MenuSub>
        </MenuItem>
      </Menu>
      <ModalShareProfile open={ShareProfileModalOpen} onClose={handleShareProfileModalClose} />
      <ModalGiveAward open={giveAwardModalOpen} onClose={handleGiveAwardModalClose} />
      <ModalReportUser open={reportUserModalOpen} onClose={handleReportUserModalClose} />
    </Fragment>
  );
};

export { NavbarDropdown };

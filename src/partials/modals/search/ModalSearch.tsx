import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader } from '@/components/modal';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { Tab, TabPanel, Tabs, TabsList } from '@/components/tabs';
import { DropdownCrud2 } from '@/partials/dropdowns/general';
import { useViewport } from '@/hooks';
import {
  ModalSearchDocs,
  ModalSearchMixed,
  ModalSearchSettings,
  ModalSearchIntegrations,
  ModalSearchUsers,
  ModalSearchEmpty,
  ModalSearchNoResults,
  IModalSearchDocsItem,
  IModalSearchUsersItem,
  IModalSearchSettingsItem,
  IModalSearchIntegrationsItem
} from './';
interface ModalSearchProps {
  open: boolean;
  onClose: () => void;
}

const ModalSearch = forwardRef<HTMLDivElement, ModalSearchProps>(({ open, onClose }, ref) => {
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const offset = 300;

  useEffect(() => {
    setScrollableHeight(viewportHeight - offset);
  }, [viewportHeight]);

  const handleSearchInput = () => {
    // handle search input
  };

  const mixedSettingsItems: IModalSearchSettingsItem[] = [
    { icon: 'badge', info: 'Public Profile' },
    { icon: 'setting-2', info: 'My Account' },
    { icon: 'message-programming', info: 'Devs Forum' }
  ];

  const mixedUsersItems: IModalSearchUsersItem[] = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      label: 'In Office',
      color: 'badge-success'
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      label: 'On Leave',
      color: 'badge-danger'
    }
  ];

  const mixedIntegrationsItems: IModalSearchIntegrationsItem[] = [
    {
      logo: 'jira.svg',
      name: 'Jira',
      description: 'Project management',
      team: [
        { filename: '300-4.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-2.png', variant: 'size-6' },
        { fallback: '+3', variant: 'text-success-inverse size-6 ring-success-light bg-success' }
      ]
    },
    {
      logo: 'inferno.svg',
      name: 'Inferno',
      description: 'Real-time photo sharing app',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-12.png', variant: 'size-6' },
        { filename: '300-9.png', variant: 'size-6' }
      ]
    }
  ];

  const docsItems: IModalSearchDocsItem[] = [
    {
      image: 'pdf.svg',
      desc: 'Project-pitch.pdf',
      date: '4.7 MB 26 Sep 2024 3:20 PM'
    },
    {
      image: 'doc.svg',
      desc: 'Report-v1.docx',
      date: '2.3 MB 1 Oct 2024 12:00 PM'
    },
    {
      image: 'javascript.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM'
    },
    {
      image: 'ai.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM'
    },
    {
      image: 'php.svg',
      desc: 'appController.js',
      date: '0.1 MB 21 Nov 2024 3:20 PM'
    }
  ];

  const settingsItems = [
    {
      title: 'Shortcuts',
      children: [
        { icon: 'home-2', info: 'Go to Dashboard' },
        { icon: 'badge', info: 'Public Profile' },
        { icon: 'profile-circle', info: 'My Profile' },
        { icon: 'setting-2', info: 'My Account' },
        { icon: 'message-programming', info: 'Devs Forum' }
      ]
    },
    {
      title: 'Actions',
      children: [
        { icon: 'user', info: 'Create User' },
        { icon: 'user-edit', info: 'Create Team' },
        { icon: 'subtitle', info: 'Change Plan' },
        { icon: 'setting', info: 'Setup Branding' }
      ]
    }
  ];

  const integrationsItems = [
    {
      logo: 'jira.svg',
      name: 'Jira',
      description: 'Project management',
      team: [
        { filename: '300-4.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-2.png', variant: 'size-6' },
        { fallback: '+3', variant: 'text-success-inverse size-6 ring-success-light bg-success' }
      ]
    },
    {
      logo: 'inferno.svg',
      name: 'Inferno',
      description: 'Real-time photo sharing app',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-12.png', variant: 'size-6' },
        { filename: '300-9.png', variant: 'size-6' }
      ]
    },
    {
      logo: 'evernote.svg',
      name: 'Evernote',
      description: 'Notes management app',
      team: [
        { filename: '300-6.png', variant: 'size-6' },
        { filename: '300-3.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-8.png', variant: 'size-6' }
      ]
    },
    {
      logo: 'gitlab.svg',
      name: 'Gitlab',
      description: 'Version control and CI/CD platform',
      team: [
        { filename: '300-18.png', variant: 'size-6' },
        { filename: '300-17.png', variant: 'size-6' }
      ]
    },
    {
      logo: 'google-webdev.svg',
      name: 'Google Webdev',
      description: 'Building web experiences',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-20.png', variant: 'size-6' },
        { filename: '300-21.png', variant: 'size-6' }
      ]
    }
  ];

  const usersItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      label: 'In Office',
      color: 'badge-success'
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      label: 'On Leave',
      color: 'badge-danger'
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
      label: 'Remote',
      color: 'badge-primary'
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      email: 'leslie.alexander@gmail.com',
      label: 'In Office',
      color: 'badge-success'
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
      label: 'Remote',
      color: 'badge-primary'
    }
  ];

  return (
    <Modal open={open} onClose={onClose} ref={ref}>
      <ModalContent className="max-w-[600px] top-[15%]">
        <ModalHeader className="py-4 px-5">
          <KeenIcon icon="magnifier" className="text-gray-700 text-xl" />
          <input
            type="text"
            name="query"
            value=""
            className="input px-0 border-none bg-transparent shadow-none ml-2.5"
            onChange={handleSearchInput}
            placeholder="Tap to start search"
          />
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="cross" />
          </button>
        </ModalHeader>
        <ModalBody className="p-0 pb-5">
          <Tabs defaultValue={1} className="">
            <TabsList className="justify-between px-5 mb-2.5">
              <div className="flex items-center gap-5">
                <Tab value={1}>Mixed</Tab>
                <Tab value={2}>Settings</Tab>
                <Tab value={3}>Integrations</Tab>
                <Tab value={4}>Users</Tab>
                <Tab value={5}>Docs</Tab>
                <Tab value={6}>Empty</Tab>
                <Tab value={7}>No Results</Tab>
              </div>
              <Menu className="items-stretch">
                <MenuItem
                  toggle="dropdown"
                  trigger="click"
                  dropdownProps={{
                    placement: 'bottom-end',
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
                  <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
                    <KeenIcon icon="setting-2" />
                  </MenuToggle>
                  {DropdownCrud2()}
                </MenuItem>
              </Menu>
            </TabsList>
            <div className="scrollable-y-auto" style={{ maxHeight: `${scrollableHeight}px` }}>
              <TabPanel value={1}>
                <ModalSearchMixed
                  settings={mixedSettingsItems}
                  integrations={mixedIntegrationsItems}
                  users={mixedUsersItems}
                />
              </TabPanel>
              <TabPanel value={2}>
                <ModalSearchSettings items={settingsItems} />
              </TabPanel>
              <TabPanel value={3}>
                <ModalSearchIntegrations items={integrationsItems} />
              </TabPanel>
              <TabPanel value={4}>
                <ModalSearchUsers items={usersItems} />
              </TabPanel>
              <TabPanel value={5}>
                <ModalSearchDocs items={docsItems} />
              </TabPanel>
              <TabPanel value={6}>
                <ModalSearchEmpty />
              </TabPanel>
              <TabPanel value={7}>
                <ModalSearchNoResults />
              </TabPanel>
            </div>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export { ModalSearch };

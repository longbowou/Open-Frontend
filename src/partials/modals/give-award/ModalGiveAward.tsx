import React, { forwardRef } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal';
import { KeenIcon } from '@/components';
import {
  ModalShareProfileViaLink,
  ModalShareProfileViaEmail,
  ModalShareProfileUsers,
  ModalShareProfileSettings
} from '@/partials/modals/share-profile';

interface ModalGiveAwardProps {
  open: boolean;
  onClose: () => void;
}

const ModalGiveAward = ({ open, onClose }: ModalGiveAwardProps) => {
  const scrollableHeight = 300;

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent className="max-w-[600px] top-[15%]">
        <ModalHeader className="py-4 px-5">
          <ModalTitle>Give Award</ModalTitle>

          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="black-left" />
          </button>
        </ModalHeader>
        <ModalBody className="grid gap-5 px-0 py-5">
          <ModalShareProfileViaLink />
          <div className="border-b border-b-gray-200"></div>

          <ModalShareProfileViaEmail />
          <div className="border-b border-b-gray-200"></div>

          <div className="scrollable-y-auto" style={{ maxHeight: `${scrollableHeight}px` }}>
            <ModalShareProfileUsers />
          </div>

          <div className="border-b border-b-gray-200"></div>
          <ModalShareProfileSettings />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ModalGiveAward };

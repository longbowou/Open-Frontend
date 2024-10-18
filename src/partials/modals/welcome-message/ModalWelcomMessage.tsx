import { Modal, ModalContent, ModalBody, ModalHeader } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/utils';

interface IModalWelcomMessageProps {
  open: boolean;
  onClose: () => void;
}

const ModalWelcomMessage = ({ open, onClose }: IModalWelcomMessageProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent className="modal-center w-full max-w-[500px] max-h-[95%] scrollable-y-auto">
        <ModalHeader className="justify-end border-0 pt-5">
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="cross" />
          </button>
        </ModalHeader>
        <ModalBody className="flex flex-col items-center pt-0 pb-10">
          <div className="mb-10">
            <img
              src={toAbsoluteUrl('/media/illustrations/21.svg')}
              className="dark:hidden max-h-[140px]"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/21-dark.svg')}
              className="light:hidden max-h-[140px]"
            />
          </div>

          <h3 className="text-lg font-medium text-gray-900 text-center mb-3">
            Welcome to Metronic
          </h3>

          <div className="text-2sm text-center text-gray-700 mb-7">
            We're thrilled to have you on board and excited for <br />
            the journey ahead together.
          </div>

          <div className="flex justify-center mb-2">
            <Link to="/" className="btn btn-primary flex justify-center">
              Show me around
            </Link>
          </div>

          <Link to="/" className="text-2sm font-medium text-gray-700 hover:text-primary py-3">
            Skip the tour
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ModalWelcomMessage };

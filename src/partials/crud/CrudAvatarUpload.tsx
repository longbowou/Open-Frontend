import { toAbsoluteUrl } from '@/utils/Assets';
import { IImageInputFile, ImageInput } from '@/components/image-input';
import React, { FC, useState } from 'react';
import { KeenIcon } from '@/components';

interface CrudAvatarUploadProps {
  inputProps?: React.HTMLProps<HTMLInputElement>;
  size?: string;
}

const CrudAvatarUpload: FC<CrudAvatarUploadProps> = ({ inputProps, size }) => {
  const [avatar, setAvatar] = useState<IImageInputFile[]>([
    { dataURL: toAbsoluteUrl(`/media/avatars/empty.jpg`) }
  ]);

  return (
    <ImageInput
      inputProps={inputProps}
      value={avatar}
      onChange={(selectedAvatar) => setAvatar(selectedAvatar)}
    >
      {({ onImageUpload }) => (
        <div className={`image-input ${size ?? 'size-24'}`} onClick={onImageUpload}>
          <div
            className="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300"
          >
            {avatar.length > 0 && <img src={avatar[0].dataURL} alt="avatar" />}

            <div className="flex  items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">
              <KeenIcon icon="eye" className='text-white' />
            </div>
          </div>
        </div>
      )}
    </ImageInput>
  );
};

export { CrudAvatarUpload };

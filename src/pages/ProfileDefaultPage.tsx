import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets.ts';
import { Container } from '@/components/container';

import { UserProfileHero } from '@/partials/heros';

import { ProfileDefaultContent } from '@/pages';
import { useAuthContext } from '@/auth';

const ProfileDefaultPage = () => {
  const { currentUser } = useAuthContext();

  const image = (
    <img
      src={currentUser?.imageUrl ?? toAbsoluteUrl('/media/avatars/empty.jpg')}
      className="rounded-full border-3 border-success h-[150px] w-[150px] object-cover"
    />
  );

  return (
    <Fragment>
      <UserProfileHero
        name={currentUser?.name}
        image={image}
        info={[
          { email: currentUser?.email, icon: 'sms' },
          { label: currentUser?.address, icon: 'geolocation' }
        ]}
      />

      <Container>
        <div className="border-t border-gray-200 dark:border-coal-100"></div>

        <ProfileDefaultContent />
      </Container>
    </Fragment>
  );
};

export { ProfileDefaultPage };

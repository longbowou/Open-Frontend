import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets.ts';
import { Container } from '@/components/container';

import { UserProfileHero } from '@/partials/heros';

import { ProfileDefaultContent } from '@/pages';

const ProfileDefaultPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-success max-h-[150px] max-w-full"
    />
  );

  return (
    <Fragment>
      <UserProfileHero
        name="Jenny Klabber"
        image={image}
        info={[
          { email: 'jenny@kteam.com', icon: 'sms' },
          { label: 'SF, Bay Area', icon: 'geolocation' },
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

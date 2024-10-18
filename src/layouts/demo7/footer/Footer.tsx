import { Container } from '@/components/container';
import { generalSettings } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-5">
          <div className="flex gap-2 font-normal text-2sm">
            <span className="text-gray-500">2024 &copy;</span>
            <a
              href={generalSettings.openLink}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >Open
            </a>
          </div>
          <nav className="flex gap-2 font-normal text-2sm text-gray-600">
            <a href={generalSettings.gitHubLink} target="_blank" className="hover:text-primary">
              GitHub
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };

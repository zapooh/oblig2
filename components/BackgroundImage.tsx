import Image from 'next/image';

const BackgroundImage = () => (
  <Image
    src="/cherry-blossom-bg.webp"
    alt="Cherry Blossom Background"
    layout="fill"
    objectFit="cover"
    quality={100}
    onError={(e) => {
      console.error("Error loading image:", e);
    }}
  />
);

export default BackgroundImage;

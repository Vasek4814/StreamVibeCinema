import styles from "@/components/uiKit/CardFilmSection/CardFilmSection.module.css";
import { CardFilmHeder } from "@/components/uiKit/CardFilmSection/CardFilmHeader/CardFilmHeder.tsx";
import { CardFilms } from "@/components/uiKit/CardFilmSection/CardFilms/CardFilms.tsx";
import { IMAGES } from "@/assets/images/images.ts";

type CardImages = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};
export type CardProps = {
  id?: number;
  title: string;
  images: CardImages;
};

export const CardFilmSection = () => {
  const categories = [
    {
      id: 1,
      title: "Action",
      images: {
        img1: IMAGES.action1,
        img2: IMAGES.action2,
        img3: IMAGES.action3,
        img4: IMAGES.action4,
      },
    },
    {
      id: 2,
      title: "Adventure",
      images: {
        img1: IMAGES.adv1,
        img2: IMAGES.adv2,
        img3: IMAGES.adv3,
        img4: IMAGES.adv4,
      },
    },
    {
      id: 3,
      title: "Comedy",
      images: {
        img1: IMAGES.com1,
        img2: IMAGES.com2,
        img3: IMAGES.com3,
        img4: IMAGES.com4,
      },
    },
    {
      id: 4,
      title: "Drama",
      images: {
        img1: IMAGES.dra1,
        img2: IMAGES.dra2,
        img3: IMAGES.dra3,
        img4: IMAGES.dra4,
      },
    },
    {
      id: 5,
      title: "Horror",
      images: {
        img1: IMAGES.hor1,
        img2: IMAGES.hor2,
        img3: IMAGES.hor3,
        img4: IMAGES.hor4,
      },
    },
  ];
  return (
    <div className={styles.cardfilm}>
      <CardFilmHeder />
      <div className={styles.categories}>
        {categories.map((cat) => (
          <CardFilms key={cat.id} title={cat.title} images={cat.images} />
        ))}
      </div>
    </div>
  );
};

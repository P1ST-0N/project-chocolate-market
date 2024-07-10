import benefits from 'modules/benefit/helpers/benefits';
import { Container } from 'shared/components';
import style from './Benefits.module.scss';
import { icons as sprite } from 'shared/icons';
import { imagesDesktop2x } from 'shared/images';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import { useMedia } from 'hooks/index';

const Benefits = () => {
  const { isTablet, isDesktop } = useMedia();

  return (
    <SectionMain className={style.benefitsSection}>
      <h2 className={style.visuallyHidden}>Benefits</h2>
      <div className={style.benefitsThumb}>
        {isTablet && isDesktop && (
          <img
            className={style.benefitsImgUp}
            src={imagesDesktop2x.lineUp2x}
            alt="line"
          />
        )}
      </div>
    </SectionMain>
  );
};

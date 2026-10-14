import styles from './mainPage.module.scss'
import ModalWindow from '../modalWindow/modalWindow'
import Header from '../header/header'

function MainPage() {
  // const modal = document.;
  return (
    <div className={styles.container}> 
      <div className={styles.container__upperPart}>
        <div className={styles.container__title}>
          <div className={styles.container__titleJob}>Frontend</div>  
          <div className={styles.container__titleMe}>DEVELOPER.</div> 
        </div>
        <img className={styles.container__imageTop} src="./luffy.jpg" alt="Profile Image" />
      </div>
      

      <div className={styles.container__lowerPart}>
        <div className={styles.container__description}>Привет! Я Голубев Артём, начинающий frontend разработчик, кооторый очень хочет развиваться и работать в этой сфере. 
        Это мой Сайт визитка, в нём указана вся необходимая информация, чтобы ознакомиться с моими навыками и опытом работы.</div>
        <img className={styles.container__imageBottom} src="./samuraiChamplu.gif" alt="Вайбовая картинка" />
      </div>


      <section className={styles.experience}>
        <div className={styles.experience__title}>Опыт работы</div>
        <div className={styles.experience__content}>
          <div className= {styles.experience__content_item}>
            <div className={styles.experience__content_item_about}>
              <div className={styles.experience__content_item_company}>Компания: VK(март — июнь 2026)</div>
              <div className={styles.experience__content_item_title}>Frontend Developer</div>
              <div className={styles.experience__content_item_description}>
                Платформа для игры в настольные игры по сети <a href="http://tumladen.online/">tumladen.online</a> 
              </div>
              <div className={styles.experience__content_item_technologies}>
                <div className={styles.experience__content_item_technologies_title}>Технологии:</div>
                <div className={styles.experience__content_item_technologies_list}>
                  <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Vite</li>
                    <li>WebSocket</li>
                    <li>Scss</li>
                  </ul>
                </div>
              </div>
              <a href="">Подробнее</a>
            </div>

            <div className={styles.experience__content_item_image}>
              <img src="./vk.png" alt="Компания VK" />
            </div>
            
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        {/* Проекты */}
      </section>

      <section className={styles.skills}>
        {/* Навыки */}
      </section>

      <section className={styles.contacts}>
        {/* Контакты */}
      </section>

    </div>  
  )
}

export default MainPage;
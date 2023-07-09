import style from "./amazone.module.css";
const Amazone = () => {
  return (
    <div>
      <section id={style.nav}>
        <article>
          <div className={style.menu}>
            <div className={style.first}>prime video</div>
            <div className={style.second}>
              <ol>
                <li>Home</li>
                <li>Storage</li>
                <li>Categories</li>
              </ol>
            </div>
            <div className={style.third}>
              <ol>
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                <li>Subscribe now</li>
                <li>EN</li>
                <li><i class="fa-solid fa-user"></i></li>
              </ol>
            </div>
          </div>
        </article>
      </section>
      <section className={style.img}>

      </section>
    </div>
  );
};
export default Amazone;

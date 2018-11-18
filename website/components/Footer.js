import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="g-bottom">
        <div className="g-bottom-i">
          <div className="footer-style">
            <div className="footer-style__flex">
              <div className="footer-style__part footer-style__part_1">
                <ul className="footer-style__list">
                  <li className="footer-style__item">
                    <a
                      href="https://blog.onliner.by/about"
                      className="footer-style__link footer-style__link_primary"
                    >
                      О компании
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://b2breg.onliner.by/advertising"
                      className="footer-style__link footer-style__link_additional"
                    >
                      Реклама
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://b2b.onliner.by/reg"
                      className="footer-style__link footer-style__link_additional"
                    >
                      Размещение в каталоге
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://blog.onliner.by/vacancy"
                      className="footer-style__link footer-style__link_primary"
                    >
                      Вакансии
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://blog.onliner.by/manifest"
                      className="footer-style__link footer-style__link_primary"
                    >
                      Манифест
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://blog.onliner.by/siterules"
                      className="footer-style__link footer-style__link_primary"
                    >
                      Правила
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://blog.onliner.by/publiccontract"
                      className="footer-style__link footer-style__link_primary"
                    >
                      Публичный договор
                    </a>
                  </li>
                  <li className="footer-style__item">
                    <a
                      href="https://support.onliner.by/"
                      className="footer-style__link footer-style__link_primary"
                    >
                      Поддержка пользователей
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-style__part footer-style__part_2">
                <div className="footer-style__social">
                  <a
                    href="https://vk.com/onliner"
                    rel="noopener"
                    target="_blank"
                    className="footer-style__social-button footer-style__social-button_vk"
                  />
                  <a
                    href="https://facebook.com/onlinerby"
                    rel="noopener"
                    target="_blank"
                    className="footer-style__social-button footer-style__social-button_fb"
                  />
                  <a
                    href="https://twitter.com/OnlinerBY"
                    rel="noopener"
                    target="_blank"
                    className="footer-style__social-button footer-style__social-button_tw"
                  />
                  <a
                    href="https://youtube.com/onlinerby"
                    rel="noopener"
                    target="_blank"
                    className="footer-style__social-button footer-style__social-button_yt"
                  />
                </div>
                <div className="footer-style__copy">© 2001—2018 Onliner.by</div>
              </div>
            </div>
          </div>
        </div>
        {}
      </footer>
    );
  }
}

export default Footer;

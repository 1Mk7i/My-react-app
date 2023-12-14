import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> bfe1f53840a9465bb1c607312de356b46e0b3127
// Імпорт стилів
import './App.css';
import './styles/Header.css';
import './styles/Navigation.css';
import './styles/Kit.css';
import './styles/Mediacode.css';
import './styles/Scroll.css';
import './styles/Priloz.css';
import './styles/Info.css';
import './styles/Footer.css';
// Імпорт картинок
import Logo from './assets/images/xlogo2.png';
import Topfon from './assets/images/top-fon.jpg';
import Topfon1 from './assets/images/top-fon/top-fon-scaled-1-600x350.jpg';
import Topfon2 from './assets/images/top-fon/top-fon-scaled-1-800x467.jpg';
import Topfon3 from './assets/images/top-fon/top-fon-scaled-1-1024x598.jpg';
import Topfon4 from './assets/images/top-fon/top-fon-scaled-1-768x448.jpg';
import Topfon5 from './assets/images/top-fon/top-fon-scaled-1-1536x896.jpg';
import Topfon6 from './assets/images/top-fon/top-fon-scaled-1-2048x1195.jpg';
import Advan1 from './assets/images/advan1.png';
import Advan2 from './assets/images/advan2.png';
import Advan3 from './assets/images/advan3.png';
import Advan4 from './assets/images/xadvan4.png';
import Phone from './assets/images/xphone-1.png';
import Dbutton1 from './assets/images/xdownload-button1.png';
import Dbutton2 from './assets/images/xdownload-button2.png';
import Scaled3 from './assets/images/x3-scaled.jpg';
import Scaled4 from './assets/images/x4-scaled.webp';
import Scaled5 from './assets/images/x5-scaled.jpg';
import Scaled6 from './assets/images/x6-scaled.webp';
import Scaled0 from './assets/images/x0-scaled.jpg';
import Scaled7 from './assets/images/x7-scaled.jpg';
import Scaled8 from './assets/images/x8-scaled.webp';
import Scaled9 from './assets/images/x9-scaled.webp';
import Scaled22 from './assets/images/x22-scaled.jpg';
import Scaled11 from './assets/images/x11-scaled.jpg';
import Scaled45 from './assets/images/xDSC_8545-300x300.jpg.pagespeed.ic.wH_ysqbB1Y.webp';
import Scaled54 from './assets/images/xDSC_8554-300x300.jpg.pagespeed.ic.cDBXrhtcaP.webp';
import Scaled70 from './assets/images/xDSC_8570-300x300.jpg.pagespeed.ic.qTtINimhdU.webp';
import Arrow2 from './assets/images/xarrow-down2.png';




function App() {
  return (
    <div>
      <div className="main-block">
        <div className="image-pattern">
          <div className="widget-wrapper photo-banner">
          <img
            src={Topfon}
            srcSet={`${Topfon1} 320w, ${Topfon2} 640w, ${Topfon3} 960w, ${Topfon4} 1280w, ${Topfon5} 1920w, ${Topfon6} 2560w`}
            sizes="(max-width: 2560px) 100vw, 2560px"
            width="2560"
            height="1494"
            alt=""
            style={{maxWidth: "100%", height: "auto"}}
            className="image wp-image-146374 attachment-full size-full"
          />

          </div>
        </div>

        <div className="pattern" />

        <div className="slide-block" style={{padding: 0, height: '100vh', overflow: 'hidden'}}>
          
            <div class="about-outer">
                <div class="about-wrapper">
                    <div class="about-form">
                        <div class="title">
                            <div class="widget-wrapper">
                              <p>
                                <a href="/" class="logo-wrapper">
                                    <noscript>
                                        <img style={{height: "152px", width: "183px"}} class=" lazyloaded" alt="" src={Logo}/>
                                    </noscript>
                                        <img style={{height: "152px", width: "183px"}} class="lazyload"  alt="" src={Logo}/>
                                    <noscript>
                                        <img src={Logo} style={{height:"152px", width:"183px"}}/>
                                    </noscript>
                                </a>
                              </p>
                            </div>
                                    <div class="widget_text widget-wrapper">
                                      <div class="textwidget custom-html-widget"> <span> Найсмачніші суші <br />у твоєму місті <br /> <span><br /><p> обирайте страви, які вам подобаються <br /> про все інше ми подбаємо</p> </span> </span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> <a href="#sushimenu" class="scroll-down nav-link"></a>

          </div>

        <div className="info">

          <div class="info-block service-block" id="sushimenu">
              <div class="info-block-wrapper">
                  <div class="widget-wrapper"><h2>ПРОПОНУЄМО ТІЛЬКИ НАЙКРАЩЕ</h2></div>
                  <div class="widget-wrapper"><ul>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled22}/><noscript>
                          <img src={Scaled22}/></noscript> <i><span> Обирай </span></i> 
                      </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled4}/><noscript>
                          <img src={Scaled4}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled5}/><noscript>
                          <img src={Scaled5}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled0}/><noscript>
                          <img src={Scaled0}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled6}/><noscript>
                          <img src={Scaled6}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled9}/><noscript>
                          <img src={Scaled9}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled8}/><noscript>
                          <img src={Scaled8}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled11}/><noscript>
                          <img src={Scaled11}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled3}/><noscript>
                          <img src={Scaled3}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled7}/><noscript>
                          <img src={Scaled7}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled45}/><noscript>
                          <img src={Scaled45}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled70}/><noscript>
                          <img src={Scaled70}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                      <li> <a class="morph-btn hover-image-effect" href="#modal-1">
                          <img class=" lazyloaded" src={Scaled54}/><noscript>
                          <img src={Scaled54}/></noscript> <i><span> Обирай </span></i> </a>
                      </li>
                  </ul>
                  </div>
              </div>
          </div>
          <div class="info-block advans-block" id="advans">
              <div class="info-block-wrapper" style={{paddingBottom: "60px"}}>
                  <div class="widget-wrapper"><div class="textwidget"><h2>Як зробити замовлення?</h2></div>
                  </div>
                  <div class="widget_text widget-wrapper">
                  <div class="textwidget custom-html-widget"><ul>
                  <li>
                      <img class=" lazyloaded" src={Advan1}/><noscript>
                      <img src={Advan1}/></noscript>
                      <div class="title">Обираєте апетитні суші <br/>на сайті</div>
                  </li>
                      <li> <img class=" lazyloaded" src={Advan2}/><noscript>
                          <img src={Advan2}/></noscript><div class="title">Оформлюєте замовлення через кошик</div>
                      </li>
                      <li> <img class=" lazyloaded" src={Advan3}/><noscript>
                          <img src={Advan3}/></noscript>
                          <div class="title">Обов'язково передзвонить наш менеджер</div>
                      </li>
                      <li style={{marginRight: "0"}}>
                          <img class=" lazyloaded" src={Advan4}/><noscript>
                          <img src={Advan4}/></noscript>
                          <div class="title">Очікуєте доставку та смакуєте</div>
                      </li>
                  </ul>
                  </div>
                  </div>
              </div>
          </div>
          <div class="info-block about-block priloz-block">
              <div class="info-block-wrapper">
                  <div class="block block1">
                      <div class="widget-wrapper">
                          <img style={{maxWidth: "100%", height: "auto" }} alt="" class="image wp-image-146375  attachment-full size-full lazyloaded" src={Phone}/><noscript>
                          <img src={Phone} class="image wp-image-146375  attachment-full size-full" alt="" style={{maxWidth: "100%", height: "auto"}}/></noscript>
                      </div>
                  </div>
                  <div class="block block2">
                      <div class="widget_text widget-wrapper">
                          <div class="textwidget custom-html-widget"><h2 style={{color: "#656565"}}> Завантажуйте <br/>мобільний додаток</h2>
                              <ul>
                                  <li> 
                              <a href="#" target="_blank" rel="noopener">
                              <img class=" lazyloaded" src={Dbutton1}/><noscript>
                              <img src={Dbutton1}/></noscript> 
                          </a>
                          </li>
                          <li> <a href="#" target="_blank" rel="noopener">
                              <img class=" lazyloaded" src={Dbutton2}/><noscript>
                              <img src={Dbutton2}/></noscript> 
                          </a>
                          </li>
                      </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="info-block about-block ask-block before-angle" style={{position: "relative", zIndex: "77"}}>
              <div class="info-block-wrapper">
                  <div class="widget_text widget-wrapper">
                      <div class="textwidget custom-html-widget"><h1 style={{color: "#656565"}}> OSAMA SUSHI</h1>
                          <p style={{textAlign: "center"}}> Хто ми? І яка наша мета? Osama sushi - це не посто ще одна доставка суші в твоєму місті! Це доставка їжі, яка була створена, щоб стати кращою в своєму роді! І у нас це, безперечно, вдалося. Суші - це наша пристрасть і кожного дня ми даруємо цю пристрасть для вас. Ми готуємо, творимо, креативимо, розвиваємося, експерементуємо, щоб надати вам кращу якість, бо саме це наша мета. Принести в доставку такі ж високі стандарти, як і в дорогих ресторанах - основний принцип роботи «OSAMA». Тому, ми з усією серйозністю підходимо до Ваших замовлень. Адже те, що ми готуємо - це не просто їжа. Це частина найцікавіших культур світу. Ми готуємо страви за автентичними рецептами, щоб Ви могли насолоджуватися ними в повній мірі. Ми розробили свої авторські попозиції, які захоплюють смаком і які неможиво спробувати в жодному іншому місці.</p>
                      </div>
                  </div>
                  <div class="widget_text widget-wrapper">
                      <div class="textwidget custom-html-widget"><h2> Обирайте Ваше місто і <br/>замовляйте страви</h2>
                      </div>
                  </div>
                  <img class="arrow-down lazyloaded" src={Arrow2}/><noscript>
                  <img src={Arrow2} class="arrow-down"/></noscript>
              </div>
          </div>
          <div class="angle"></div>
          <div class="info-block contacts-block footer">
              <div class="info-block-wrapper">
                  <div class="column column1">
                      <div class="widget-wrapper">
                          <div class="textwidget"><ul>
                              <li><strong>Б</strong></li>
                              <li><a href="#">Бердичів</a></li>
                              <li><a href="#">Біла Церква</a></li>
                              <li><a href="#">Білгород-Дністровський</a></li>
                              <li><a href="#">Бориспіль</a></li>
                              <li><a href="#">Боярка</a></li>
                              <li><a href="#">Бровари</a></li>
                              <li><a href="#">Буча</a></li>
                              <li><strong>В</strong></li>
                              <li><a href="#">Вараш</a></li>
                              <li><a href="#">Васильків</a></li>
                              <li><a href="#">Вишгород</a></li>
                              <li><a href="#">Вишневе-Крюківщина</a></li>
                              <li><a href="#">Вінниця</a></li>
                              <li><a href="#">Володимир-Волинський</a></li>
                              <li><strong>Г</strong></li>
                              <li><a href="#">Горішні Плавні</a></li>
                              <li><strong>Д</strong></li>
                              <li><a href="#">Дніпро</a></li>
                              <li><a href="#">Дрогобич</a></li>
                              <li><a href="#">Дубно</a></li>
                              <li><strong>Ж</strong></li>
                              <li><a href="#">Житомир</a></li>
                              <li><a href="#">Жовті Води</a></li>
                          </ul>
                          </div>
                      </div>
                  </div>
                  <div class="column column2">
                      <div class="widget-wrapper">
                          <div class="textwidget"><ul>
                              <li><strong>З</strong></li>
                              <li><a href="#">Запоріжжя</a></li>
                              <li><strong>І</strong></li>
                              <li><a href="#">Івано-Франківськ</a></li>
                              <li><a href="#">Ізмаїл</a></li>
                              <li><a href="#">Ірпінь</a></li>
                              <li><strong>К</strong></li>
                              <li><a href="#">Калуш</a></li>
                              <li><a href="#">Кам’янець-Подільський</a></li>
                              <li><a href="#">Камянське</a></li>
                              <li><a href="#">Київ</a></li>
                              <li><a href="#">Ковель</a></li>
                              <li><a href="#">Коломия</a></li>
                              <li><a href="#">Конотоп</a></li>
                              <li><a href="#">Коростень</a></li>
                              <li><a href="#">Кременчук</a></li>
                              <li><a href="#">Кривий Ріг</a></li>
                              <li><a href="#">Кропивницький</a></li>
                              <li><strong>Л</strong></li>
                              <li><a href="#">Лозова</a></li>
                              <li><a href="#">Лубни</a></li>
                              <li><a href="#">Луцьк</a></li>
                              <li><a href="#">Львів</a></li>
                              <li><strong>М</strong></li>
                              <li><a href="#">Марганець</a></li>
                              <li><a href="#">Мелітополь</a></li>
                              <li><a href="#">Миколаїв</a></li>
                              <li><a href="#">Миргород</a></li>
                              <li><a href="#">Могилів-Подільський</a></li>
                              <li><a href="#">Мукачево</a></li>
                          </ul>
                          </div>
                      </div>
                  </div>
                  <div class="column column3">
                      <div class="widget-wrapper">
                          <div class="textwidget"><ul>
                              <li><strong>Н</strong></li>
                              <li><a href="#">Нетішин</a></li>
                              <li><a href="#">Ніжин</a></li>
                              <li><a href="#">Новий Розділ</a></li>
                              <li><a href="#">Нововолинськ</a></li>
                              <li><a href="#">Новоград-Волинський</a></li>
                              <li><a href="#">Новомосковськ</a></li>
                              <li><a href="#">Новояворівськ</a></li>
                              <li><strong>О</strong></li>
                              <li><a href="#">Обухів</a></li>
                              <li><a href="#">Одеса</a></li>
                              <li><a href="#">Олександрія</a></li>
                              <li><strong>П</strong></li>
                              <li><a href="#">Павлоград</a></li>
                              <li><a href="#">Первомайськ</a></li>
                              <li><a href="#">Подільськ</a></li>
                              <li><a href="#">Покров</a></li>
                              <li><a href="#">Полтава</a></li>
                              <li><a href="#">Прилуки</a></li>
                              <li><strong>Р</strong></li>
                              <li><a href="#">Рівне</a></li>
                              <li><a href="#">Ромни</a></li>
                              <li><strong>С</strong></li>
                              <li><a href="#">Самбір</a></li>
                              <li><a href="#">Сарни</a></li>
                              <li><a href="#">Світловодськ</a></li>
                              <li><a href="#">Славута</a></li>
                              <li><a href="#">Сміла</a></li>
                              <li><a href="#">Стрий</a></li>
                              <li><a href="#">Суми</a></li>
                          </ul>
                          </div>
                      </div>
                  </div>
                  <div class="column column4">
                      <div class="widget-wrapper">
                          <div class="textwidget"><ul>
                              <li><strong>Т</strong></li>
                              <li><a href="#">Тернопіль</a></li>
                              <li><a href="#">Трускавець</a></li>
                              <li><strong>У</strong></li>
                              <li><a href="#">Ужгород</a></li>
                              <li><a href="#">Умань</a></li>
                              <li><strong>Ф</strong></li>
                              <li><a href="#">Фастів</a></li>
                              <li><strong>Х</strong></li>
                              <li><a href="#">Хмельницький</a></li>
                              <li><strong>Ч</strong></li>
                              <li><a href="#">Черкаси</a></li>
                              <li><a href="#">Червоноград</a></li>
                              <li><a href="#">Чернівці</a></li>
                              <li><a href="#">Чернігів</a></li>
                              <li><a href="#">Чорноморськ</a></li>
                              <li><a href="#">Чортків</a></li>
                              <li><strong>Ш</strong></li>
                              <li><a href="#">Шепетівка</a></li>
                              <li><a href="#">Шостка</a></li>
                              <li><strong>Ю</strong></li>
                              <li><a href="#">Южноукраїнськ</a></li>
                          </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="footer-last">
                  <div class="footer-last-in">
                      <div class="footer-last-wrapper">
                          <div class="widget-wrapper">
                              <div class="textwidget">
      <p>© 2020-2022 Osama Sushi. Всі права захищено</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>

        </div>

      </div>
    </div>
  );
}

export default App;
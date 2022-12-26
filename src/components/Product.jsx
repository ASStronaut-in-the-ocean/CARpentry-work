
import React from 'react';



function Product() {

  return (
      <div>
        <header className="header-section">
		<div className="header-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 text-center text-lg-left">

						<a href="./index.html" className="site-logo">
							<img src="img/icons/logo.png" alt=""/>
						</a>
					</div>
					<div className="col-xl-6 col-lg-5">
						<form className="header-search-form">
							<input type="text" placeholder="Search on True Craft ...."/>
							<button><i className="flaticon-search"></i></button>
						</form>
					</div>
					<div className="col-xl-4 col-lg-5">
						<div className="user-panel">
							<div className="up-item">
								<i className="flaticon-profile"></i>
								<a href="#">Войти</a> или <a href="#">Зарегестрироваться</a>
							</div>
							<div className="up-item">
								<div className="shopping-card">
									<img src="img/tool-box.png" />
									<span>0</span>
								</div>
								<a href="#">Корзина</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<nav className="main-navbar">
			<div className="container">

				<ul className="main-menu">
					<li><a href="#">Главная</a></li>
					<li><a href="#">Страницы</a>
						<ul className="sub-menu">
							<li><a href="./product.html">Товары</a></li>
							<li><a href="./cart.html">Корзина</a></li>
						</ul>
					</li>
					{/* <li><a href="#">Blog</a></li> */}
				</ul>
			</div>
		</nav>
	</header>

	<div className="page-top-info">
		<div className="container">
			<h4>Category PAge</h4>
			<div className="site-pagination">
				<a href="">Главная</a> /
				<a href="">Магазин</a>
			</div>
		</div>
	</div>

	<section className="product-section">
		<div className="container">
			<div className="back-link">
				<a href="./category.html"> &lt;&lt; Назад к категориям</a>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<div className="product-pic-zoom">
						<img className="product-big-img" src="img\product\drill.png" alt=""/>
					</div>
					<div className="product-thumbs" tabIndex="1" >
						<div className="product-thumbs-track">
							<div className="pt active" data-imgbigurl="img/single-product/1.jpg"><img src="img\product\drill.png" alt=""/></div>
							<div className="pt" data-imgbigurl="img/single-product/2.jpg"><img src="img\product\drill1.png" alt=""/></div>
							<div className="pt" data-imgbigurl="img/single-product/3.jpg"><img src="img/single-product/thumb-3.jpg" alt=""/></div>
							<div className="pt" data-imgbigurl="img/single-product/4.jpg"><img src="img/single-product/thumb-4.jpg" alt=""/></div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 product-details">
					<h2 className="p-title">Дрель</h2>
					<h3 className="p-price">1045 руб.</h3>
					<h4 className="p-stock">Доступно: <span>В Наличии</span></h4>
					<div className="p-rating">
						<i className="fa fa-star-o"></i>
						<i className="fa fa-star-o"></i>
						<i className="fa fa-star-o"></i>
						<i className="fa fa-star-o"></i>
						<i className="fa fa-star-o fa-fade"></i>
					</div>
					<div className="p-review">
						<a href="">3 отзыва</a>|<a href="">Добавьте свой отзыв</a>
					</div>
					<div className="quantity">
						<p>Quantity</p>
                        <div className="pro-qty"><input type="text"/></div>
                    </div>
					<a href="#" className="site-btn">КУПИ!</a>
					<div id="accordion" className="accordion-area">
						<div className="panel">
							<div className="panel-header" id="headingOne">
								<button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
							</div>
							<div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
									<p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
									<p>Mixed fibres</p>
									<p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="panel-header" id="headingTwo">
								<button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">care details </button>
							</div>
							<div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								<div className="panel-body">
									<img src="./img/cards.png" alt=""/>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="panel-header" id="headingThree">
								<button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">shipping & Returns</button>
							</div>
							<div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div className="panel-body">
									<h4>7 Days Returns</h4>
									<p>Cash on Delivery Available<br/>Home Delivery <span>3 - 4 days</span></p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="social-sharing">
						<a href=""><i className="fa fa-google-plus"></i></a>
						<a href=""><i className="fa fa-pinterest"></i></a>
						<a href=""><i className="fa fa-facebook"></i></a>
						<a href=""><i className="fa fa-twitter"></i></a>
						<a href=""><i className="fa fa-youtube"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="related-product-section">
		<div className="container">
			<div className="product-slider owl-carousel">
				<div className="product-item">
					<div className="pi-pic">
						<img src="./img/product/1.jpg" alt=""/>
						<div className="pi-links">
							<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ДОБАВИТЬ В КОРЗИНУ</span></a>
							<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
						</div>
					</div>
					<div className="pi-text">
						<h6>$35,00</h6>
						<p>Flamboyant Pink Top </p>
					</div>
				</div>
				<div className="product-item">
					<div className="pi-pic">
						<div className="tag-new">New</div>
						<img src="./img/product/2.jpg" alt=""/>
						<div className="pi-links">
							<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ДОБАВИТЬ В КОРЗИНУ</span></a>
							<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
						</div>
					</div>
					<div className="pi-text">
						<h6>$35,00</h6>
						<p>Black and White Stripes Dress</p>
					</div>
				</div>
				<div className="product-item">
					<div className="pi-pic">
						<img src="./img/product/3.jpg" alt=""/>
						<div className="pi-links">
							<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
							<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
						</div>
					</div>
					<div className="pi-text">
						<h6>$35,00</h6>
						<p>Flamboyant Pink Top </p>
					</div>
				</div>
				<div className="product-item">
						<div className="pi-pic">
							<img src="./img/product/4.jpg" alt=""/>
							<div className="pi-links">
								<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
							</div>
						</div>
						<div className="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
				<div className="product-item">
					<div className="pi-pic">
						<img src="./img/product/6.jpg" alt=""/>
						<div className="pi-links">
							<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
							<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
						</div>
					</div>
					<div className="pi-text">
						<h6>$35,00</h6>
						<p>Flamboyant Pink Top </p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="footer-section">
		<div className="container">
			<div className="row row-footer">
				<div className="col-lg-3 col-sm-6">
					<div className="footer-widget about-widget">
						<h2>About</h2>
						<p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
						<img src="img/cards.png" alt=""/>
					</div>
				</div>
				
				<div className="col-lg-3 col-sm-6">
					<div className="footer-widget contact-widget">
						<h2>Questions</h2>
						<div className="con-info">
							<span>C.</span>
							<p>Your Company Ltd </p>
						</div>
						<div className="con-info">
							<span>B.</span>
							<p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
						</div>
						<div className="con-info">
							<span>T.</span>
							<p>+53 345 7953 32453</p>
						</div>
						<div className="con-info">
							<span>E.</span>
							<p>office@youremail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="social-links-warp">
			<div className="container">
				<div className="social-links">
					<a href="" className="instagram"><i className="fa fa-instagram"></i><span>instagram</span></a>
					<a href="" className="google-plus"><i className="fa fa-google-plus"></i><span>g+plus</span></a>
					<a href="" className="pinterest"><i className="fa fa-pinterest"></i><span>pinterest</span></a>
					<a href="" className="facebook"><i className="fa fa-facebook"></i><span>facebook</span></a>
					<a href="" className="twitter"><i className="fa fa-twitter"></i><span>twitter</span></a>
					<a href="" className="youtube"><i className="fa fa-youtube"></i><span>youtube</span></a>
					<a href="" className="tumblr"><i className="fa fa-tumblr-square"></i><span>tumblr</span></a>
				</div>

<p className="text-white text-center mt-5">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>

			</div>
		</div>
	</section>
      </div>
  );
  }

export default Product;

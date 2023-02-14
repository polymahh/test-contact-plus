/* Resets
--------------------------------------------------------------------------------*/
ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, body, html, p, blockquote,
fieldset, input {
  margin: 0;
  padding: 0;
}

a img {
  border: 0;
}
a {
  text-decoration: none;
}

/* Fonts
--------------------------------------------------------------------------------*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&display=swap');

/* Icons */

@font-face {
  font-family: 'icons';
  src:url(images/icons.eot?-h6wei0);
  src:url(images/icons.eot?#iefix-h6wei0) format('embedded-opentype'),
    url(images/icons.woff?-h6wei0) format('woff'),
    url(images/icons.ttf?-h6wei0) format('truetype'),
    url(images/icons.svg?-h6wei0#icons) format('svg');
  font-weight: normal;
  font-style: normal;
}

/* General Styling and Structure
--------------------------------------------------------------------------------*/

html {
  height: 100%;
}

body {
  width: 100%;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  color: #717174;
  background-color:#F5F5F7;
  line-height: 2em;
  -webkit-transition: padding 0.3s ease-in-out;
  -moz-transition: padding 0.3s ease-in-out;
  -o-transition: padding 0.3s ease-in-out;
  transition: padding 0.3s ease-in-out;
}

body.has-header {
  padding-top: 7.5em !important;
  padding-top: 4.25em !important;
}

body.minimal-header {
  padding-top: 4.25em !important;
}

.content-wrap {
  padding-bottom: 8em;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  line-height: 1;
  font-size: 2.2em;
  margin-bottom: .75em;
  /*margin-top:100px;*/
  color: #00847A;
}

.container h2 {
  color: #00847A;
}

div.paragraph,
p {
  line-height: 2em;
  margin-bottom: 2em;
  max-width:900px;
  margin:auto;
}

a {
  color: @linkColor;
  

}

.paragraph a:hover {
  color: @linkColor;
  text-decoration: underline;
}

.content-wrap blockquote,
.footer-wrap blockquote {
  font-size: 1.75em;
  color: #cccccc;
  line-height: 1.3em;
  border-left: none;
  padding-left: 0;
  font-style: normal;
  text-transform: uppercase;
  margin: 1.25em 0;
}

.content-wrap div.paragraph ul,
.footer-wrap div.paragraph ul {
  padding-left: 2em !important;
}

.content-wrap div.paragraph li,
.footer-wrap div.paragraph li {
  padding-left: 0 !important;
  margin: 0 !important;
}

.container {
  width: 100%;
  overflow: hidden;
  margin: auto;
  padding: 2em;
  z-index: 1;
  box-sizing: border-box;
}

#header, .content-wrap {
  overflow: hidden;
}

.wsite-section-wrap{
	border-radius: 15px;
    overflow: hidden;
    max-width: 1300px;
    margin: auto;
	margin-bottom:24px;
	padding:0px;
}

.content-wrap.container{
margin-top:0px !important;

}


}
.container{
padding:0px;
}

.wsite-multicol-tr{
display:flex;
align-items:center;
}
/*
.wsite-multicol-col{
align-self:stretch;

}


.colored-box-content{
height:100%;
}
.colored-box-content>div{
display:flex;
flex-direction:column;
justify-content:space-between;
}
*/

.scroll-div{/*scroll is a page type*/
	padding:40px;
}

/* Header scroll pagetype
--------------------------------------------------------------------------------*/

​.anchor h2 {
    margin: 0 auto 0.2em;
    text-align:center;
    line-height:1;
}
.anchor-link { 
    margin:-90px 0 0;
    padding: 90px 0 0;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #000;
    font-size:2em;
}
.anchor-link:hover {
    color:#000;
}
/* Header
--------------------------------------------------------------------------------*/

#header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background: @main;
  -webkit-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

body.wsite-native-mobile-editor,
body.wsite-checkout-page {
  padding: 0 !important;
}

body.wsite-native-mobile-editor #header,
body.wsite-checkout-page #header {
  position: relative;
}

#header.minimal {
  background: @main;
}

#header.minimal .wsite-logo a,
#header.minimal .wsite-menu-default li a {
  color: @navColor;
}

#header.minimal #active a,
#header.minimal .wsite-menu-default li:hover a {
  color: @accent;
}

.header-wrap {
  display: table;
  width: 100%;
  height: 100%;
  height: 46px;
  -webkit-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

#header.minimal .header-wrap {
  height: 46px;
  background-color:@main;
}

.wsite-logo a,
.wsite-logo a:hover {
  -webkit-transition: color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  font-size: 1.5em;
  font-weight: bold;
  color: @accent;
  background: inherit;
}

.logo {
  display: table-cell;
  vertical-align: middle;
  padding-left: 50px;
  height: 100%;
}

.logo img {
  -webkit-transition: max-height 0.3s ease-in-out;
  -moz-transition: max-height 0.3s ease-in-out;
  -o-transition: max-height 0.3s ease-in-out;
  transition: max-height 0.3s ease-in-out;
}

.wsite-logo table {
  height: auto !important;
  width: 100%;
}

#header.minimal .logo img {
  max-height: 46px !important;
}

#mobile-input, #nav-trigger {
  display: none;
}

#navmobile {
  display: none;
}

.menu {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  padding-right: 50px;
  height: 100%;
}

.menu li {
  list-style: none;
}

.wsite-menu-default {
  float: right;
}

.wsite-menu-default li {
  display: inline-block;
  padding: 0 15px;
  -webkit-transition: color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
}

.wsite-menu-default a, .menu a {
  font-size: 14px;
  font-weight: bold;
  color: @navColor;
}

.wsite-menu-default li:hover a, .menu li:hover a {
  color: @accent;
}

.wsite-menu-default a:hover {
  background: inherit;
}

#active a {
  color: @accent;
}

#wsite-menus .wsite-menu li a {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  background: @navHover;
  color: @navColor;
  border: none;
}

#wsite-menus .wsite-menu li:hover a,
#wsite-menus .wsite-menu li li a {
  background: @main;
}

#wsite-menus .wsite-menu li li:hover a {
  background: @thirdMenuHoverBg;
  color: @accent;
}

#wsite-menus .wsite-menu-arrow {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}

/* form newsletter
--------------------------------------------------------------------------------*/
form{
display:flex;
align-items: end;
justify-content: center;
gap: 24px;
flex-wrap:wrap;

.wsite-form-label{
display:none;
}
.formlist{
min-height:50px;
}
.form-radio-container{
display:none;
}

.wsite-form-input-container input{
border-radius: 8px;
border-color: #DDDDDD;

}

.wsite-form-field div.wsite-form-input-container .wsite-form-input{
width:400px !important;
height:44px;
}

.wsite-button{
padding: 4px 55px !important;
}

}
/* acordion
--------------------------------------------------------------------------------*/
.accordion__item{
opacity:1;
margin-bottom: 20px !important;
border-radius: 8px;
overflow: hidden;
.accordion__title{
	span{
	opacity:1 !important;
	text-transform: none  !important;
	}
}

}

/* social media icons
--------------------------------------------------------------------------------*/
.icon-slack{
min-width:19px;
min-height:19px;
background-image: url('slack-icon.png');
background-repeat: no-repeat;
background-position: center;
background-size: contain;
}
.icon-linkedin{
min-width:19px;
min-height:19px;
background-image: url('linkedin-icon.png');
background-repeat: no-repeat;
background-position: center;
background-size: contain;
}


/* Footer
--------------------------------------------------------------------------------*/

.footer-wrap {
  font-size: 16px;
  font-weight:400;
  color: #6F6F72;
}

.footer-wrap a {
color: #6F6F72;
}

.footer-wrap a:hover {
color: #6F6F72;
background:none;
}

.wsite-footer {
  padding-top: 2.25em;
  padding-bottom: 2.25em;
}

.footer-wrap h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.25em;
  font-style: normal;
  line-height: 2.5em;
}

.footer-wrap hr.styled-hr {
  opacity: .15;
  box-shadow: none;
}

.footer-wrap .container {
  overflow: visible;
}

.footer-wrap{
.wsite-multicol-tr{
display:flex;
align-items:start;
}

}

/* Banner
--------------------------------------------------------------------------------*/

.wsite-header-section {
  height: 525px;
  background-size: cover;
}

.banner-wrap {
  width: 100%;
  margin: 0 auto;
  background: @main;
  color: @headerScroll;
  text-align: center;
  box-sizing: border-box;
}

.banner {
  display: table;
  width: 100%;
  max-width: 1100px;
  margin: auto;
}

.banner-inner {
  display: table-cell;
  margin: auto;
  vertical-align: middle;
  padding: 4em 2em;
}

.banner h2 {
  margin-bottom: .5em;
  font-size: 5em;
  text-transform: capitalize;
}

.banner .paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  margin: 1em auto;
}

.banner h2 span > font {
  display: block;
}

/* No Banner
--------------------------------------------------------------------------------*/

.no-banner .content-wrap {
  margin-top: 4.5em;
}

.no-banner #header {
  border-top: 5px solid @main;
  border-bottom: none;
}

/* Splash Page
--------------------------------------------------------------------------------*/


body.splash-page {
  height: 100%;
  width: 100%;
}

.splash-page .wsite-background,
.wsite-background {
  background-color: @main !important;
  background-size: cover;
}

.splash-page .wsite-background {
  background-attachment: fixed;
  height: 100%;
  width: 100%;
    display: table;
}

.splash-page #header {
  border-bottom: none;
}
.splash-page #header.minimal {
  background: @main;
}

.splash-wrap {
  display: table;
  height: 100%;
  width: 100%;
  background: transparent;
}

.splash-page .content-wrap {
  display: table-cell;
  vertical-align: middle;
  color: @headerScroll;
  margin-top: 4.5em;
}

.splash-page .content-wrap h2 {
  font-size: 6.25em;
  color: @headerScroll;
}

.splash-page div.paragraph {
  font-size: 1.5em;
  text-transform: uppercase;
}

.splash-page hr.styled-hr {
  background-color: @splash;
  box-shadow: none;
}

.splash-page .wsite-search-element-input {
  background: lighten(@main, 10%);
}

.splash-page .wsite-social a {
  color: @splash;
}

/* Buttons
--------------------------------------------------------------------------------*/

.wsite-button {
  padding: 4px 25px !important;
  border-radius:8px;
  


}

.wsite-button,
.wsite-editor .wsite-button {
  
  background-image: none !important;
  background: #4f94e5 !important;
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

.wsite-button .wsite-button-inner,
.wsite-button:hover .wsite-button-inner {
  font-family: 'Inter', sans-serif;
  padding: 0 !important;
  background: #3074DB !important;
  background-color: transparent !important;
  color: #fff ;
  font-weight: bold;
  
}



.wsite-button {
  height: auto !important;
  line-height: 1 !important;
}

.wsite-button:hover {
  background: #3074DB !important;
}

.landing-page.wsite-theme-light .banner .wsite-button-highlight,
.landing-page.wsite-theme-light .banner .wsite-button-highlight:hover,
.splash-page .wsite-button-highlight,
.splash-page .wsite-button-highlight:hover {
  border: 3px solid @accent !important;
}

.wsite-button-highlight,
.wsite-theme-light .wsite-button-highlight:hover {
  background: #3074DB !important;
  color: @accent  !important;

}

.wsite-button-highlight,
.wsite-editor .wsite-button-highlight {
  background: #4f94e5 !important;
  border-radius:8px;
}

.wsite-button-large {
  padding: 10px 20px !important;
  font-size: 1.25em !important;
}

.wsite-button-small {
  font-size: .95em !important;
  
}

.wsite-button-normal>.wsite-button-inner{
color:@main !important;
}


/* Inputs
--------------------------------------------------------------------------------*/

.wsite-form-field {
  margin: 15px 0 !important;
}

.form-radio-container {
  margin: 10px 0 !important;
}

.wsite-form-label {
  font-size: 1.25em;
}

.wsite-form-input,
.wsite-input,
.wsite-form-field select {
  font-size: 1.15em;
  color: #666666;
  font-family: 'Inter', sans-serif;
  line-height: 2;
  height: 50px;
  padding: 5px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 0;
  margin-top: 5px;
}

.wsite-form-input:focus,
.wsite-input:focus,
.form-select:focus {
  border: 2px solid @main;
}

.wsite-search-element-input {
  border: 2px solid @main;
  border-radius: 30px;
  padding-left: 15px;
  height: 59px;
  color: #999999
}

.wsite-phone-field .wsite-form-phone-separator {
  line-height: 56px;
}

::-webkit-input-placeholder {
   color: @searchColor;
}

:-moz-placeholder { /* Firefox 18- */
   color: @searchColor;
}

::-moz-placeholder {  /* Firefox 19+ */
   color: @searchColor;
}

:-ms-input-placeholder {
   color: @searchColor;
}

.wsite-search-element-submit,
.wsite-search-element-submit:hover {
  background: url(images/$Color_icons.png)  -651px -27px;
  height: 27px;
  width: 27px;
  top: 0;
  margin-top: 21px;
  right: 20px;
}

.splash-page .wsite-search-element-submit,
.wsite-search-element-submit:hover {
  background: url(images/$Color_icons.png) -651px -27px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: .01px;
  padding-left: 4px;
  height: 49px;
  background: url(images/$Color_arrow.png) no-repeat 97% 21px !important;
}

select::-ms-expand {
  display: none;
}

#wsite-com-checkout-payment-info select {
  background: none !important;
}

.wsite-form-field input[type='checkbox'],
.wsite-form-field input[type='radio'],
.wsite-com-product-option-groups input[type='checkbox'],
.wsite-com-product-option-groups input[type='radio'] {
  display: none;
}

.wsite-form-field input[type='checkbox'] + label:before,
.wsite-form-field input[type='radio'] + label:before,
.wsite-com-product-option-groups input[type='radio'] + span:before,
.wsite-com-product-option-groups input[type='checkbox'] + span:before {
  content: '';
  display: inline-block;
  height: 22px;
  width: 22px;
  margin-right: 8px;
  padding: 1px;
  vertical-align: -8px;
}

.splash-page .wsite-form-field input[type='checkbox'] + label:before,
.splash-page .wsite-form-field input[type='radio'] + label:before,
.splash-page .wsite-com-product-option-label input[type='checkbox'] + span:before,
.splash-page .wsite-com-product-option-label input[type='radio'] + span:before {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: 1px solid #fff;
}

.splash-page .wsite-form-field input[type='checkbox']:checked + label:before,
.splash-page .wsite-form-field input[type='checkbox']:not(:checked) + label:before {
  height: 18px;
  width: 17px;
}

.wsite-form-field input[type='checkbox'] + label:before,
.wsite-com-product-option-groups input[type='checkbox'] + span:before {
  background: url(images/$Color_icons.png) -696px -31px;
}

.wsite-form-field input[type='checkbox']:checked + label:before,
.wsite-com-product-option-groups input[type='checkbox']:checked + span:before {
  background: url(images/$Color_icons.png) -725px -31px;
}

.wsite-form-field input[type='radio'] + label:before,
.wsite-com-product-option-groups input[type='radio'] + span:before {
  background: url(images/$Color_icons.png) -695px -57px;
}

.wsite-form-field input[type='radio']:checked + label:before,
.wsite-com-product-option-groups input[type='radio']:checked + span:before {
  background: url(images/$Color_icons.png) -724px -57px;
}

/* Store/ Product
--------------------------------------------------------------------------------*/

/* Storefront tooltip fix */
#icontent .container {
  overflow: visible;
}

#wsite-com-product-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
}

#wsite-com-product-price-area .wsite-com-product-price-container {
  font-size: 1.5em;
  color: #999999;
}

#wsite-com-product-price-area.wsite-com-product-show-price-on-sale #wsite-com-product-price {
  display: none;
}

#wsite-com-product-price-area #wsite-com-product-price-sale {
  color: #ffffff;
  background: #333333;
}

#wsite-com-product-price-sale:before {
  content: 'SALE';
  padding-left: 10px;
}

#wsite-com-product-price-area {
  border: none;
  margin: 0;
}

#wsite-com-product-add-to-cart {
  background: #ffffff  !important;
  color: @accent !important;
}

#wsite-com-product-add-to-cart {
  border: 2px solid @accent !important;
}

#wsite-com-product-add-to-cart:hover {
  background: @accent !important;
  color: #ffffff !important;
}

.wsite-com-product-option-dropdown select {
  border: none;
  border-radius: 0;
  border-bottom: 2px solid @accent;
  font-size: 1.15em;
  font-weight: 900;
  color: @accent;
  cursor: pointer;
}

.wsite-com-product-option-color .wsite-com-product-option-color-container {
  box-shadow: none;
}

.wsite-com-product-option-color .wsite-com-product-option-color-swatch {
  height: 36px;
  width: 36px;
  border-radius: 0;
  border: 1px solid #e5e5e5;
  box-shadow: none;
}

.wsite-com-product-option-color .wsite-selected {
  background: url(images/$Color_icons.png) -646px -64px;
}

#wsite-com-product-quantity-input {
  background-image: none;
  border: none;
  border-bottom: 2px solid @accent;
  font-size: 1.15em;
  font-weight: 900;
  color: @accent;
  border-radius: 0;
}

#wsite-com-product-images-strip .wsite-com-product-images-secondary-outer {
  box-shadow: none;
}

#wsite-com-product-options {
  border-top: none;
}

.wsite-com-product-option, #wsite-com-product-inventory {
  padding: 15px 0;
}

.wsite-com-product-label {
  margin-bottom: 15px;
}

.wsite-com-continue-shopping .caret {
  vertical-align: middle;
}
/* this is added to change pricing section*/
.product-grid__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
    border-radius: 20px;
    background-color: #fff;

}
.product-grid__images {
    width: 40%;
}

/* Social Links
--------------------------------------------------------------------------------*/

.wsite-social {
  white-space: normal;
}

.wsite-social-item {
  display: inline-block;
  font-size: 2em;
  margin: 0 6px 10px;
}

/* Blog
--------------------------------------------------------------------------------*/

h2.blog-title a,
h2.blog-title a:hover {
  font-size: 1.85em;
  color: @titleFont;
  background: inherit;
}

.blog-post .blog-separator {
  border: none;
  height: 9px;
}

.blog-post > div, .blog-post .blog-header {
  padding-left: 160px !important;
  box-sizing: border-box;
}

#blog-post-title-overlay {
  left: 155px;
}

.blog-post:before {
  content: '';
  border-left: 1px solid #e2e2e2;
  position: absolute;
  top: 0;
  left: 140px;
  height: 100%;
}

.blog-post .blog-date {
  font-size: 18px;
  color: @linkColor;
  position: absolute;
  top: 24px;
  left: 0px;
  width: 110px;
  text-align: right;
}

.blog-header .blog-date span,
.blog-header .blog-comments a {
  margin: 0 !important;
  padding: 0 !important;
  float: right !important;
}

.blog-post .blog-comments {
  font-size: 18px;
  position: absolute;
  top: 60px;
  left: 0px;
  width: 110px;
  text-align: right;
}

.blog-comments-bottom {
  display: none;
}

.blog-content {
  width: 100%;
}

.blog-post-separator {
  height: 40px;
}

.blog-sidebar {
  display: none;
}

#commentArea {
  margin-left: 145px;
}

.blogCommentSubreplyWrapper iframe {
  height: 520px;
}



/* Tablet media queries
--------------------------------------------------------------------------------*/

@media (max-width: 1024px) {

  body {
    font-size: 15px;
  }

  body.has-header {
    padding-top: 120px !important;
  }

  #header .header-wrap {
    height: 120px;
  }

  #header.minimal .header-wrap {
    height: 80px;
  }

  body.minimal-header {
    padding-top: 80px !important;
  }

  .logo {
    display: table-row;
    padding-left: 0;
    text-align: center;
    height: auto;
  }

  .logo img {
    margin: 0 !important;
  }

  .wsite-logo {
    display: table-cell;
    vertical-align: middle;
  }

  .menu {
    display: table-row;
    padding-right: 0;
    text-align: center;
    height: auto;
  }

  .wsite-menu-default {
    float: none;
    margin: auto;
    display: table-cell;
    vertical-align: middle;
  }

  .landing-page .banner {
    height: 28em;
  }

  .banner h2,
  .splash-page .content-wrap h2{
    font-size: 10vmin !important;
  }
  
  /*h2{
  margin-top:60px;
  }*/

  .banner .paragraph {
    font-size: 1em !important;
  }

  .wsite-footer {
    padding-top: 3em;
    padding-bottom: 1.5em;
  }

  #commentArea {
    margin-left: 0 !important;
  }

  body {
    padding: 0 !important;
  }

  h2.blog-title a, h2.blog-title a:hover {
    font-size: 1em !important;
  }
  .blog-post .blog-date, .blog-post .blog-comments {
    font-size: 18px;
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    text-align: right;
  }
  .blog-post:before {
    display: none;
  }
  .blog-post {
    margin-right: 0;
  }
  .blog-post > div, .blog-post .blog-header {
    padding-left: 0em !important;
  }
}



/* Mobile media queries
--------------------------------------------------------------------------------*/

@media (max-width: 767px) {
  #header {
    height: auto;
  }

  body {
    font-size: 14px;
  }

  body.has-header {
    padding-top: 60px !important;
  }

  .container {
    padding: 1.25em;
  }

  .banner-inner {
    padding: 4em 1.25em;
  }

  #header.minimal {
    height: auto;
  }

  body:not(.minimal-header) #header {
    border-radius: 1px;
    -webkit-box-shadow: 0px 2px 3px -1px rgba(30, 30, 30, .1);
    -moz-box-shadow:    0px 2px 3px -1px rgba(30, 30, 30, .1);
    box-shadow:         0px 2px 3px -1px rgba(30, 30, 30, .1);
  }

  body.minimal-header {
    padding-top: 0 !important;
  }
  /*added --------*/
  .scroll-div{
	padding:0px;
	}
  .wsite-section-wrap{
  border-radius:0px;
  margin-bottom:0px
  }
  .accordion__title{
	span{
	font-size:14px;
	}
	}
	.footer-wrap{
	.wsite-multicol-tr{
	display:table-row;
	}

	}
	
	.paragraph{
		text-align:left !important;
	}
  
  /*added --------*/
  h2 font{
  font-size:2rem;
  }
  
  h2{
    margin-top:15px;

	}
	
	.wsite-multicol-tr{
display:table-row;
}

  
  .footer-wrap h2 font{
  font-size:1rem;
  }
  
  .paragraph font {
    font-size:1.2rem;
  }

  .logo {
    display: table;
    width: 100%;
    height: 60px;
    padding: 0 1.25em;
    text-align: center;
    line-height: 1;
    box-sizing: border-box;
  }

  .logo > span {
    display: table-cell !important;
    vertical-align: middle;
    padding: 0 54px 0 20px;
  }

 .wsite-logo {
   display: block;
 }

  .logo img {
    max-height: 50px !important;
  }

  #nav {
    display: none;
  }

  #navmobile {
    display: block;
  }

  .wsite-logo table {
    height: 60px !important;
  }

  .menu {
    display: block;
    padding-right: 0px;
    text-align: center;
  }

  .wsite-menu-default {
    float: none;
    display: block;
  }

  .menu .wsite-menu-default li {
    display: block;
  }

  .menu .wsite-menu-default li a {
    display: block;
    position: relative;
  }

  #header .header-wrap, #header.minimal .header-wrap {
    height: 60px;
  }

  #header.minimal .wsite-logo a,
  #header.minimal .menu li a {
    color: @navColor;
  }

  #header.minimal #active a,
  #header.minimal .wsite-menu-default li:hover a {
    color: @accent;
  }

  #nav-trigger {
    display: table-cell;
    vertical-align: middle;
    width: 24px;
    z-index: 11;
  }

  #nav-trigger:before, #nav-trigger:after {
    content: "";
  }

  #nav-trigger span,
  #nav-trigger:before,
  #nav-trigger:after {
    display: block;
    width: 100%;
    height: 4px;
    background: @accent;
  }

  #nav-trigger span{
    margin: 3px 0;
  }

  #header.minimal #nav-trigger span,
  #header.minimal #nav-trigger:before,
  #header.minimal #nav-trigger:after {
    background: @headerScroll;
  }

  .splash-page #nav-trigger span,
  .splash-page #nav-trigger:before,
  .splash-page #nav-trigger:after {
    background:  @splash !important;
  }

  #navmobile {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -moz-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -o-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -ms-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  #navmobile > div, #navmobile > ul {
    padding: 0 0 1em;
  }

  .wsite-mobile-menu {
    -webkit-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -moz-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -o-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -ms-transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
        transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  .wsite-menu-mobile-arrow:before {
    display: inline-block;
    content: '\203A';
    vertical-align: bottom;
    font-weight: bold;
    margin-left: 5px;
  }

  .wsite-menu-back-item .wsite-menu-mobile-arrow:before {
    content: '\2039' !important;
    margin-right: 5px;
    margin-left: 0;
  }

  .wsite-menu-back-item a {
    font-weight: bold !important;
    color: #333 !important;
  }

  .wsite-menu-arrow {
    display: none;
  }

  #nav:before {
    display: block;
    content: '';
    height: 1em;
  }

  body.menu-open #navmobile {
    max-height: 960px;
  }

  .wsite-menu-wrap {
    left: 0 !important;
  }
  .wsite-multicol-col {
    max-width: 100% !important;
    display: block;
    width: auto !important;
    margin: 0 auto 1em !important;
  }

  .wsite-section {
    height: auto !important;
  }

  #wsite-search-header h2 {
    float: none;
    font-weight: bold;
  }
  #wsite-search-form-container {
    float: none;
    margin-top: 10px;
    width: 100%;
  }

  .wsite-product-list {
    display: none !important;
  }

  #wsite-mini-cart {
    position: fixed !important;
    left: 0 !important;
    bottom: 0 !important;
    top: auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    border-radius: 0 !important;
    border-right: none !important;
    border-left: none !important;
  }

  #wsite-mini-cart:before,
  #wsite-mini-cart:after {
    display: none;
  }

  #wsite-com-store .wsite-com-category-subcategory-group .wsite-com-column, #wsite-com-store .wsite-com-category-product-featured-group .wsite-com-column,  #wsite-com-store .wsite-com-category-product-group .wsite-com-column {
    width: 50% !important;
  }

  #wsite-com-product-images {
    width: 100% !important;
  }

  #wsite-com-product-images, #wsite-com-product-images .wsite-com-column {
    float: none !important;
  }

  #wsite-com-product-info {
    margin-left: 0 !important;
    margin-top: 25px;
  }

  #wsite-com-checkout-list .wsite-remove-button, #wsite-com-checkout-summary-list .wsite-remove-button {
    display: block;
    margin: 5px auto 0;
    left: auto;
    top: auto;
  }

  .wsite-com-continue-shopping .caret, #wsite-com-checkout-list, #wsite-com-checkout-summary-list {
    line-height: 2em;
  }

  #wsite-com-checkout-list .wsite-form-input, #wsite-com-checkout-summary-list .wsite-form-input {
    width: 25px;
    height: 25px;
  }


  #wsite-com-checkout-list .wsite-coupon-input, #wsite-com-checkout-summary-list .wsite-coupon-input {
    width: 100px;
  }

  #wsite-com-checkout-list .wsite-com-checkout-item-image, #wsite-com-checkout-summary-list .wsite-com-checkout-item-image {
    width: 50px !important;
    height: 50px !important;
  }

  .wsite-com-continue-shopping .caret, #wsite-com-checkout-list, #wsite-com-checkout-summary-list {
    font-size: .65em !important;
    vertical-align: middle;
  }

  #wsite-mini-cart .wsite-subtotal-wrapper, .wsite-product-list .wsite-product-description, .wsite-name-header, .wsite-product-price {
    font-size: 1em !important;
    line-height: 1.2 !important;
  }

  .wsite-com-category-subcategory-name, .wsite-com-category-subcategory-name-text {
    padding: .25em !important;
    font-size: 1em !important;
  }

  .imageGallery > div {
    width: 50% !important;
  }

  /* Checkout Page
  ---------------------------------------*/

  .wsite-com-checkout-payment-column,
  .wsite-com-checkout-summary-column {
    display: block !important;
    width: auto !important;
    max-width: 100% !important;
    margin: 0 auto 1em !important;
  }

  #wsite-com-checkout-cart-footer {
    text-align: center;
  }

  .wsite-com-continue-shopping {
    display: block;
    margin: 0 auto 5px;
  }

  #wsite-com-checkout-cart-footer form {
    float: none !important;
  }
  #wsite-com-checkout-payment-order {
    margin-left: 0;
  }
}

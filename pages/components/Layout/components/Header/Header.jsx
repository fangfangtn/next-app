import Link from 'next/link'
import React from 'react'
import PageTitle from '../../../PageTitle'

export default function Header() {

  return (
    <header className="site-header header-style-1 mobile-sider-drawer-menu">
  <div className="top-bar bg-gray">
    <div className="container">
      <div className="row">
        <div className="mt-topbar-left">
          <ul className="list-unstyled e-p-bx pull-right">
            <li>
              <i className="fa fa-bookmark" />
              Chương trình Chuyển đổi số quốc gia
            </li>
            <li>
              <i className="fa fa-phone" />
              (024) 3782 1766
            </li>
            <li>
              <i className="fa fa-envelope" />
              ubqg.cds@mic.gov.vn
            </li>
          </ul>
        </div>
        <div className="mt-topbar-right">
          {/* Thêm lá cờ việt nam */}
          <div className="appint-btn">
            <a href="contact-1.html" className="site-button">
              Đăng nhập
            </a>
            <img src="images/icon/vn.png" alt="" />
            <img src="images/icon/us.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sticky-header main-bar-wraper">
    <div className="main-bar bg-white">
      <div className="container">
        <div className="logo-header">
          <div className="logo-header-inner logo-header-one">
            <a href="index.html">
              <img
                src="/images/custom-background/logo-dark.jpg"
                alt=""
                style={{ width: "120%" }}
              />
            </a>
          </div>
        </div>
        {/* NAV Toggle Button */}
        <button
          id="mobile-side-drawer"
          data-target=".header-nav"
          data-toggle="collapse"
          type="button"
          className="navbar-toggler collapsed"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar icon-bar-first" />
          <span className="icon-bar icon-bar-two" />
          <span className="icon-bar icon-bar-three" />
        </button>
        {/* ETRA Nav */}
        <div className="extra-nav">
          <div className="extra-cell">
            <a href="#search">
              <i className="fa fa-search" />
            </a>
          </div>
          <div className="extra-cell">
            <a href="#" className="contact-slide-show">
              <i className="fa fa-angle-left arrow-animation" />
            </a>
          </div>
        </div>
        {/* ETRA Nav */}
        {/* Contact Nav */}
        <div
          className="contact-slide-hide "
          style={{
            backgroundImage:
              "url(https://theme7x.com/shapen/images/background/bg-5.png)"
          }}
        >
          <div className="contact-nav">
            <a href="javascript:void(0)" className="contact_close">
              ×
            </a>
            <div className="contact-nav-form p-a30">
              <div className="contact-info   m-b30">
                <div className="mt-icon-box-wraper center p-b30">
                  <div className="icon-xs m-b20 scale-in-center">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="icon-content">
                    <h5 className="m-t0 font-weight-500">Phone number</h5>
                    <p>(075) 123-7654</p>
                  </div>
                </div>
                <div className="mt-icon-box-wraper center p-b30">
                  <div className="icon-xs m-b20 scale-in-center">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="icon-content">
                    <h5 className="m-t0 font-weight-500">Email address</h5>
                    <p>7xthemehelp@gmail.com</p>
                  </div>
                </div>
                <div className="mt-icon-box-wraper center p-b30">
                  <div className="icon-xs m-b20 scale-in-center">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="icon-content">
                    <h5 className="m-t0 font-weight-500">Address info</h5>
                    <p>201 Liverpool Street, Suite 721, London</p>
                  </div>
                </div>
              </div>
              <div className="full-social-bg">
                <ul>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tumblr">
                      <i className="fa fa-tumblr" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="youtube">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-weight-600">© 2022 7xtheme</h4>
              </div>
            </div>
          </div>
        </div>
        {/* SITE Search */}
        <div id="search">
          <span className="close" />
          <form
            role="search"
            id="searchform"
            action="/search"
            method="get"
            className="radius-xl"
          >
            <div className="input-group">
              <input
                defaultValue=""
                name="q"
                type="search"
                placeholder="Type to search"
              />
              <span className="input-group-btn">
                <button type="button" className="search-btn">
                  <i className="fa fa-search arrow-animation" />
                </button>
              </span>
            </div>
          </form>
        </div>
        {/* MAIN Vav */}
        <div className="header-nav navbar-collapse collapse">
          <ul className=" nav navbar-nav">
            <li>
              <Link href="/trangchu">Trang chủ</Link>
            </li>
            <li>
              <Link href="/vanban">Văn bản</Link>
            </li>
            <li>
              <Link href="/trithuc">Tri thức</Link>
            </li>
            <li>
              <Link href="/solieu">Số liệu</Link>
            </li>
            <li>
              <Link href="/hoidap">Hỏi đáp</Link>
            </li>
            <li>
              <Link href="/hienke">Hiến kế</Link>
            </li>
            <li>
              <Link href="/thongbao">Thông báo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

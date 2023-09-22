import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { FormattedMessage } from "react-intl";

export default function Header() {
  const router = useRouter();
  const { locale } = useRouter();
  return (
    <header className="site-header header-style-1 mobile-sider-drawer-menu">
      <div className="top-bar bg-gray">
        <div className="container">
          <div className="row">
            <div className="mt-topbar-left">
              <ul className="list-unstyled e-p-bx pull-right">
                <li>
                  <i className="fa fa-bookmark" />
                  <FormattedMessage
                    id="name"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
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
                <FormattedMessage
                    id="login"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
                </a>
                {locale !== "en" ? (
                  <Link
                    href={"/en"}
                    locale="en"
                  >
                    <img src="images/icon/us.png" alt="" />
                  </Link>
                ) : (
                  <Link
                    href={"/"}
                    locale="vi"
                  >
                    <img src="images/icon/vn.png" alt="" />
                  </Link>
                )}
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
                <li className={router.pathname === '/trangchu' ? 'active' : ''}>
                  <Link href="/trangchu">
                  <FormattedMessage
                      id="homepage"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/vanban' ? 'active' : ''}>
                  <Link href="/vanban">
                  <FormattedMessage
                      id="text"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/trithuc' ? 'active' : ''}>
                  <Link href="/trithuc">
                  <FormattedMessage
                      id="knowledge"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/solieu' ? 'active' : ''}>
                  <Link href="/solieu">
                  <FormattedMessage
                      id="data"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/hoidap' ? 'active' : ''}>
                  <Link href="/hoidap">
                  <FormattedMessage
                      id="aks"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/hienke' ? 'active' : ''}>
                  <Link href="/hienke">
                  <FormattedMessage
                      id="constitution"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
                <li className={router.pathname === '/thongbao' ? 'active' : ''}>
                  <Link href="/thongbao">
                    <FormattedMessage
                      id="notification"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

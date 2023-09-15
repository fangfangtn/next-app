import React from 'react'
import PageContent from '../PageContent/PageContent'

export default function Footer() {
  return (
    <>
    <PageContent/>
    <footer className="site-footer footer-large  footer-dark	footer-wide">
  <div className="container">
    <div
      className="p-a30 call-to-action-wrap bg-no-repeat bg-center site-bg-primary"
      style={{
        backgroundImage:
          "url(https://theme7x.com/shapen/images/background/bg-site.png)"
      }}
    >
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <div className="call-to-action-left text-black">
            <h4 className="text-uppercase m-b10 m-t0">
              CỔNG THÔNG TIN ĐIỆN TỬ CHUYỂN ĐỔI SỐ QUỐC GIA
            </h4>
            <span>
              Cung cấp các thông tin chính thống về chương trình Chuyển đổi số
              quốc gia
            </span>
          </div>
        </div>
        <div className="col-lg-4  col-md-6">
          <div className="call-to-action-right">
            <div className="widget_newsletter">
              <div className="newsletter-bx">
                <form role="search" method="post">
                  <div className="input-group">
                    <input
                      name="news-letter"
                      className="form-control"
                      placeholder="Nhập email"
                      type="text"
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="site-button">
                        <i className="fa fa-paper-plane-o" />
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FOOTER BLOCKES START */}
  <div className="footer-top overlay-wraper">
    <div className="overlay-main" />
    <div className="container">
      <div className="row">
        {/* ABOUT COMPANY */}
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="widget widget_about">
            {/*<h4 class="widget-title">About Company</h4>*/}
            <div className="logo-footer clearfix p-b15">
              <a href="index.html">
                <img src="images/custom-background/logo-light.png" alt="" />
              </a>
            </div>
            <p className="max-w400">
              Cổng thông tin Chuyển đổi số quốc gia cung cấp các thông tin chính
              thống về chương trình Chuyển đổi số quốc gia.
            </p>
            <ul className="social-icons  mt-social-links">
              <li>
                <a href="https://www.google.com" className="fa fa-google" />
              </li>
              <li>
                <a href="https://rss.com" className="fa fa-rss" />
              </li>
              <li>
                <a href="https://www.facebook.com" className="fa fa-facebook" />
              </li>
              <li>
                <a href="https://twitter.com" className="fa fa-twitter" />
              </li>
              <li>
                <a href="https://in.linkedin.com" className="fa fa-linkedin" />
              </li>
            </ul>
          </div>
        </div>
        {/* RESENT POST */}
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="widget widget_address_outer">
            <h4 className="widget-title">Liên hệ</h4>
            <ul className="widget_address">
              <li>
                Địa chỉ: Tòa nhà VNTA, 68 Dương Đình Nghệ, Cầu Giấy, Hà Nội
              </li>
              <li>Số điện thoại: 024 3782 1766</li>
              <li>Email: ubqg.cds@mic.gov.vn</li>
            </ul>
          </div>
        </div>
        {/* USEFUL LINKS */}
        <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
          <div className="widget widget_services inline-links">
            <h4 className="widget-title">Tìm kiếm</h4>
            <ul>
              <li>
                <a href="about-1.html">Giới thiệu</a>
              </li>
              <li>
                <a href="project-grid.html">Hỗ trợ</a>
              </li>
              <li>
                <a href="blog-grid.html">Hoạt động</a>
              </li>
              <li>
                <a href="contact-1.html">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FOOTER COPYRIGHT */}
  <div className="footer-bottom overlay-wraper">
    <div className="overlay-main" />
    <div className="container">
      <div className="row">
        <div className="mt-footer-bot-center">
          <span className="copyrights-text">© 2023 Chuyển đổi số quốc gia</span>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

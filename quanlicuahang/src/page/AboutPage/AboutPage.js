import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./AboutPage.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegUser,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="nav-add">
        <div className="nav">
          <Navigation />
        </div>
        <div className="about-inf">
          <div>
            <section className="about-title-infor ">
              <h1>Our service</h1>
              <p>
                Cùng với sự phát triển của xã hội và thị trường công nghệ,
                ManagerPage đã và đang không ngừng nỗ lực trở thành đối tác uy
                tín với các nhà sản xuất Kỹ thuật số hàng đầu thế giới, đồng
                thời là điểm đến tin cậy của khách hàng.
              </p>
            </section>
            <section className="about-feature ">
              <div className="about-feature-title">
                <h1>Core Values</h1>
              </div>
              <div className="feature-item">
                <div className="feature-img">
                  {/* <img src="./css/images/feature-1.png" alt /> */}
                  <h1>Chất lương</h1>
                  <p>
                    Đi đầu trong việc xây dựng uy tín, trách nhiệm đảm bảo chất
                    lượng sản phẩm, mang đến cho khách hàng sự an tâm tuyệt đối
                    khi mua sản phẩm công nghệ
                  </p>
                </div>
                <div className="feature-img">
                  {/* <img src="./css/images/feature-2.png" alt /> */}
                  <h1>Lòng tin</h1>
                  <p>
                    Chữ “TÍN” là điều chúng tôi chú trọng trong các hoạt động
                    nhằm phát triển thương hiệu, là điểm tựa niềm tin của khách
                    hàng, là đối tác tin cậy của các hãng công nghệ
                  </p>
                </div>
                <div className="feature-img">
                  {/* <img src="./css/images/feature-3.png" alt /> */}
                  <h1>Thân thiện</h1>
                  <p>
                    Hình ảnh thân thiện với khách hàng, tích cực trong các hoạt
                    động cộng đồng là mục tiêu lâu dài của chúng tôi
                  </p>
                </div>
                <div className="feature-img">
                  {/* <img src="./css/images/feature-4.png" alt /> */}
                  <h1>Chăm sóc</h1>
                  <p>
                    Cùng với mục tiêu phục vụ khách hàng là trên hết,từng bước
                    nâng cao chất lượng dịch vụ, đào tạo cán bộ, nhân viên nhiệt
                    tình, trung thực, chân thành để làm hài lòng mọi khách hàng
                    đến với FRT.
                  </p>
                </div>
              </div>
            </section>
            <section className="about-produce ">
              <div className="about-produce-title">
                <h1>Produce By</h1>
              </div>
              <div className="about-produce-container">
                <div className="about-produce-img">
                  <div className="about-avatar">
                    <FaRegUser />
                  </div>

                  <div className="about-produce-link">
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaInstagram />
                    <FaTelegram />
                  </div>
                </div>
                <div className="about-produce-inf">
                  <h2>Ngô Trung Hiếu</h2>
                  <span>04/12/2002</span>
                  <span>Sinh viên Đại học Điện Lực</span>
                  <p>
                    I am an undergraduate student of the department of
                    Electrical and Electronics Engineering,enthusiastic towards
                    coding and mathematics. Technology has an extensive range in
                    our society, and I am actively looking and exploring things
                    to find new developments and to explore new interests.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

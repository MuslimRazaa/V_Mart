import React from "react";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import headerlogo from "../assets/images/headerlogo.png";
import Footer from "../Components/Footer/Footer";
import arrowul from "../assets/images/arrowul.png";

function PrivacyPolicy() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <section className="policiessection">
          <span className="buyleftspan">
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            <img src={buyrightspan} />
          </span>
          <div className="container-1640 pt-3">
            <div className="refundcontent border-top">
              <div className="imgrefund">
                <img src={headerlogo} />
              </div>
              <h1 class="carttitle">Privacy Policy</h1>

              <p className="paratitle bold" style={{ marginBottom: "20px" }}>
                1. Privacy Act
              </p>
              <p className="paratitle">
                This Privacy Policy is intended to provide a general overview of
                our policies in respect of the collection, handling and
                management of your personal information. Your personal
                information is any information or opinion about you that can
                identify you.
                <br />
                <br />
                Other policies may override this Privacy Policy in certain
                circumstances. For example, when we collect personal information
                from you, we may advise a specific purpose for collecting that
                personal information, in which case we will handle your personal
                information in accordance with that stated purpose.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "20px" }}>
                2. Online Privacy
              </p>
              <p className="paratitle">
                This part of our Privacy Policy sets out the manner in which we
                handle your personal information in respect of online services
                provided to you by Tobacco Vapes Mart providing such links we do
                napprove the other services.
                <br />
                This Privacy statement applies only in respect of our online
                services.. “Online services” includes any services provided by
                us via the Internet (including email and web pages).
              </p>

              <p className="paratitle bold" style={{ marginBottom: "30px" }}>
                <img src={arrowul} /> 2.1 Automatic Server Logs
              </p>

              <p className="paratitle">
                Our web site server automatically collects various items of
                information when you use our web site. For example, we may
                collect information about your computer’s operating system,
                Internet Protocol (IP) address, access times, browser type and
                language, and the web site that referred you to us. We also
                collect information about your usage and activity on our web
                site.
                <br />
                <br />
                When you visit our web site it may store “cookies” on your
                computer. The purpose of “cookies” is to avoid the need for you
                to re-enter certain information when you next visit our web
                site. The settings in your Internet browser software can be
                adjusted to prevent cookies being stored on your computer, if
                required. However, some of the features of our web site may then
                be lost.
                <br />
                <br />
                Although, in some circumstances, it may be possible to identify
                you from the information we collect, and only use this
                information for statistical analysis, system administration, and
                similar related purposes.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "30px" }}>
                <img src={arrowul} />
                2.2 Email and Message Forms
              </p>

              <p className="paratitle">
                We may collect personal information from you (such as your name,
                address, telephone number and email address, and any other
                personal information you volunteer) if you send us an email or
                if you submit information to us using a message form, brochure
                request form or feedback form. We will use this personal
                information to contact you to respond to your message, to send
                you information that you request, and for other related purposes
                we consider are within your reasonable expectations. We will not
                use or disclose any such information for any other purpose
                without your consent, except where required by law.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "30px" }}>
                <img src={arrowul} />
                2.3 Storage and Transmission of Personal Information Online
              </p>

              <p className="paratitle">
                If you provide any personal information to us via our online
                services (including email) or if we provide such information to
                you by such means, the privacy, security and integrity of this
                information cannot be guaranteed during its transmission unless
                we have indicated beforehand that a particular transaction or
                transmission of information will be protected (for example, by
                encryption).
              </p>

              <p className="paratitle">
                If we receive your personal information, we will take reasonable
                steps to store it such that unauthorised access, modification,
                disclosure, misuse and loss are prevented.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "30px" }}>
                <img src={arrowul} />
                2.4 Other Online Services
              </p>

              <p className="paratitle">
                If any of our online services (including any email messages we
                send to you) contain links to other online services that are not
                maintained by us (other services), or if other services link to
                our online services, we are not responsible for the privacy
                practices of the organisations that operate those other
                services, and by providing such links we do not endorse or
                approve the other services. This Privacy Policy applies only in
                respect of our online services.
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default PrivacyPolicy;

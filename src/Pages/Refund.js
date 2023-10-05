import React from "react";
import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import headerlogo from "../assets/images/headerlogo.png";
import Footer from "../Components/Footer/Footer";

function Refund() {
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
                {" "}
                <img src={headerlogo} />
              </div>
              <h1 class="carttitle">Refund Policy</h1>
              <p className="paratitle">
                We will happily assist customers who wish to return or exchange
                goods purchased from Tobacco Vapes Mart. Our returns policy is
                in addition to your rights under the Australian Consumer Law.
                <br />
                <br />
                Our products come with guarantees that cannot be excluded under
                the Australian Consumer Law. Customers are entitled to a
                replacement or refund for a major failure and compensation for
                any other reasonably foreseeable loss or damage. You are also
                entitled to have the goods repaired or replaced if the goods
                fail to be of acceptable quality and failure does not amount to
                a major failure.
                <br />
                <br />
                We recommend you retain your receipt for proof of purchase, as
                Tobacco Vapes Mart will require proof that you purchased the
                product from us. If you do not have a receipt, we may be able to
                advise you whether a refund, exchange, repair or replacement is
                available through other means, however this may require us
                recording your proof of identification when processing your
                return. <br />
                <br />
              </p>

              <h3 className="paratitle bold mt-5 mb-4 text-white">
                When your product is faulty
                <br />
                <br />
              </h3>

              <p className="paratitle">
                We will accept returns and provide you with an exchange or
                refund if the product you purchased:
                <br />
                <br />
                Manufacturing fault, was defective or damaged on delivery to
                you; <br /> Not fit for the purpose stated in any advertising or
                packaging statement; or
                <br /> does not match the online image, description or
                measurements displayed on our website.
                <br /> To qualify for a faulty product return you must:
                <br />
                <br />
                if goods are damaged or defective upon delivery:
                <br /> provide us with photographic evidence of the damage
                before you return the goods to us; <br />
                not attempt to repair or modify the goods (either yourself or
                through a third party);
                <br /> comply with all of our return shipping instructions;
                <br /> provide us with proof of purchase, such as your tax
                invoice or receipt; and
                <br /> return the product within 14 days. We reserve the right
                to ask you to demonstrate that you did not cause or create the
                fault in the product, and we may do this before providing you
                with directions how to return the product. We may also elect to
                return the product to the manufacturer’s repair agent to
                determine the nature of the problem prior to providing a refund
                or exchange. If we find at any time that the product does not
                have a problem, we may require you to pay our reasonable costs
                of returning the product.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Refund;

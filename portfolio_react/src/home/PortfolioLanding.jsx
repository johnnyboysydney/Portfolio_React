import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";

const PortfolioLanding = () => {
    let title = 'About Me'
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    const PostList = BlogContent.slice();
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area */}
            <div>
                <div>
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div>
                            <div>
                            <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Jone Doe <br/>
                                            <TextLoop>
                                                <span> JS Developer.</span>
                                                <span> UI/UX Designer.</span>
                                                <span> Content Writter.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in USA.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            
            {/* End About Area */}

            {/* Start Service Area  */}

            {/* End Service Area  */} 

            {/* Start Portfolio Area */}

            {/* End Portfolio Area */}

            {/* Start Blog Area */}

            {/* End Blog Area */}

            {/* Start COntact Area */}
            
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default PortfolioLanding;
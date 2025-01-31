import React, { useEffect, useRef, useState } from "react";
import "./Research.css";
import { Link } from "react-router-dom";

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [contents, setcontents] = useState(false);
  const [proj, setproj] = useState(false);
  const [application, setappication] = useState(false);
  const areas = [
    {
      areaname: "Artificial Intelligence",
      desc: "In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. In this way, a chatbot that is fed examples of text can learn to generate lifelike exchanges with people, or an image recognition tool can learn to identify and describe objects in images by reviewing millions of examples. New, rapidly improving generative AI techniques can create realistic text, images, music and other media.",
      content: [
        {
          imglink: "https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg",
          name: "Dr.Dilip Singh Sisodia",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/d3V4q9MF/Mr-Pradeep-Singh.jpg",
          name: "Dr.Pradeep Singh",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/fRC7b9KT/jitendra.jpg",
          name: "Dr.Jitendra Kumar Rout",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/tgVgc0YQ/sonal-yadav.png",
          name: "Dr.Sonal Yadav",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/KvWXK18F/ravi.jpg",
          name: "Mr.Ravi Kumar",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/1X4CPK6F/visahal.jpg",
          name: "Mr.Vishal Sathawane",
          proflink: "",
        },
      ],
    },
    {
      areaname: "Data Minig | Text Mining",
      desc: "Data mining is a powerful technique used in college research to extract valuable insights and patterns from large and complex datasets. It involves the process of discovering meaningful information, trends, and relationships within the data, often with the aid of specialized software tools. In the context of college research, data mining can be applied to various fields, including social sciences, business, healthcare, and more. Researchers can use data mining to analyze large amounts of data collected from surveys, experiments, observations, or existing databases to uncover hidden patterns and gain a deeper understanding of the subject under investigation.",
      content: [
        {
          imglink: "https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg",
          name: "Dr.Dilip Singh Sisodia",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg",
          name: "Dr. Aakanksha Sharaff",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg",
          name: "Dr.Naresh Kumar Nagwani",
          proflink: "",
        },
      ],
    },
    {
      areaname: "Software Engineering",
      desc: "Software engineering is a discipline that focuses on the systematic development, maintenance, and management of software systems. It encompasses a set of principles, methods, tools, and practices that help in building high-quality software that meets user requirements while considering constraints such as time, budget, and resources. In the context of college research, software engineering plays a crucial role in studying and improving the software development process, exploring new methodologies, and addressing various challenges in software design, development, and maintenance. Researchers in this field aim to advance the understanding and practice of software engineering through empirical studies, experiments, and the development of new techniques and tools.",
      content: [
        {
          imglink: "https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg",
          name: "Dr. Aakanksha Sharaff",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg",
          name: "Dr.Naresh Kumar Nagwani",
          proflink: "",
        },
        {
          imglink: "https://i.postimg.cc/CK1TTJm5/Mr-Pradeep-Singh.jpg",
          name: "Dr.Pradeep Singh",
          proflink: "",
        },
      ],
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: "url(https://i.postimg.cc/7Z4dMDxk/20191210-225056.jpg)",
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}
            >
              <div className="green-line-text">Research</div>
            </div>
          </div>
        </div>
        <div className="main-box" ref={sectionRef}>
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Research Areas</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Research-Areas">
                    <p>Research Areas</p>
                  </Link>
                </li>

                <li>
                  {" "}
                  <div className="side-border-left" />
                  <Link to="/Publications">
                    <p>Publications</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            // className={` areasa ${
            //   isVisible ? "animate__animated animate__slideInLeft" : ""
            // }`}
            className="areasa"
          >
            <h3 className="hea">Research Areas</h3>
            {areas.map(({ areaname, desc, content }) => (
              <div className="Aiml">
                <div className="areahead">
                  <p>{areaname}</p>
                </div>
                <div className="areacon">
                  <p>{desc}</p>
                </div>
                <div className="prof">
                  {content.map(({ imglink, name, proflink }) => (
                    <div className="contentarea">
                      <img src={imglink} height="72" width="50"></img>
                      <div className="profname">
                        <a href={proflink}>{name}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

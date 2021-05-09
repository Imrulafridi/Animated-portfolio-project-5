import useWebAnimations, { fadeInRight , flip} from "@wellyshen/use-web-animations";
import React,{useEffect} from "react";
import styled from "styled-components";
import Image from "../images/about.svg";

const AboutPage = styled.div`
  margin: 40px auto;
  padding: 0 15px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  h1, p {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    margin: 0;
    padding: 0 5px;
    div img {
      width: 350px;
      height: 200px;
    }
  }
`;

const About = () => {
  const image = useWebAnimations({ ...fadeInRight })
  
  useEffect(() => {
    const imge = image.ref.current;
    imge.addEventListener("click", () => {
      image.animate({...flip})
    })
  });

  return (
    <AboutPage>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        recusandae mollitia iste? Natus odio, corporis impedit ab, obcaecati
        omnis cupiditate minima repudiandae laboriosam mollitia eos asperiores a
        veritatis laudantium hic animi quis vitae nam beatae nostrum vel
        adipisci! Fugiat quam hic vel quod molestiae dolorem! Laborum facere
        nisi eos excepturi.
      </p>
      <div>
        <img src={Image} alt="" ref={ image.ref}/>
      </div>
    </AboutPage>
  );
};

export default About;

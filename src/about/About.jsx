import React, { Component } from 'react';
import styled from 'react-emotion';

import { SectionBase } from '../common-styles';
import SectionTitle from '../SectionTitle';
import AboutSlide from './AboutSlide';

import Map from './map.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};

  padding-top: 200px;
  padding-bottom: 200px;

  @media screen and (min-width: 1260px) {
  }
`;

const BodyContainer = styled('div')`
  position: relative;
  width: 100%;
  /* max-width: 800px; */
  /* margin: 0 auto; */
`;

const MapImg = styled('img')`
  object-fit: contain;
  width: 100%;
`;

const ArrowButton = styled('div')`
  z-index: 1;
  border-radius: 50%;
  background-color: #c4c4c4;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  cursor: pointer;
  transition: 0.3s ease;

  :hover {
    background-color: #ea7e69;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 0;
  transform: translate(-50%, -50%);
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
  transform: translate(50%, -50%);
`;

const SlideContainer = styled('div')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
`;

class About extends Component {
  state = {
    slideIdx: 0
  };

  render() {
    const { id, sectionColor } = this.props;
    const slideElems = slides.map((slide, i) => {
      return (
        <AboutSlide
          key={i}
          img={slide.img}
          text={slide.text}
          idx={i}
          currIdx={this.state.slideIdx}
        />
      );
    });

    console.log(slideElems);

    return (
      <Container id={id}>
        <SectionTitle sectionColor={sectionColor}>About</SectionTitle>
        <BodyContainer>
          <MapImg src={Map} />
          <LeftArrowButton />
          <RightArrowButton />
          <SlideContainer>{slideElems}</SlideContainer>
        </BodyContainer>
      </Container>
    );
  }
}

export default About;

const slides = [
  {
    img: 'https://avatars2.githubusercontent.com/u/8008350?s=460&v=4',
    text: 'The god'
  },
  {
    img:
      'http://cdn.akc.org/content/article-body-image/shiba_inu_cute_puppies.jpg',
    text: 'Suh cyute'
  },
  {
    img:
      'https://animemotivation.com/wp-content/uploads/2018/02/cute-anime-girl.jpg.webp',
    text: 'For Daniel'
  }
];

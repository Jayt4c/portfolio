import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import GlobalStyles from '../../styles/globals';

const Hero = (props) => (
  <>
  <Section row nopadding>
  <span class="bottom-left-dot"></span>
    <span class="bottom-right-dot"></span>
    <span class="top-right-dot"></span>
    <span class="top-left-dot"></span>
    <span class="buttom-line"></span>
    <span class="right-line"></span>
    <span class="top-line"></span>
    <span class="left-line"></span>  
    <LeftSection>    
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        You like what you see? what are you waiting for?
      </SectionText>
      <Button onClick={props.handleClick}>Hire Me</Button>
    </LeftSection>
  </Section> 
</>

);

export default Hero;
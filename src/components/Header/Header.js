import { white } from 'color-name';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
    <Link href="/">
      <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <DiCssdeck size="3rem" /> 
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="https://jwebdev.vercel.app">
        <NavLink>Blog</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>        
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>        
  </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/Jayt4c">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/ige-oluwajuwon-181684a6">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://twitter.com/jayt4c">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

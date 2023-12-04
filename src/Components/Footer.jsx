import React from 'react'
import { FooterStyle } from '../Styles/FooterStyled';
import { BottomStyles } from '../Styles/ButtomStyles';

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <BottomStyles>
      <FooterStyle>
        <article>
          <h1>Why Choose Delicacy Hub?</h1>
          <p>
            At Delicacy Hub, we believe in the transformative power of food.
            It's not just sustenance; it's a cultural experience, a journey of
            flavors that brings people together. Our mission is to empower you
            to create memorable moments in the kitchen, turning every meal into
            a celebration.
          </p>
        </article>
        <article>
          <h1>Get in Touch:</h1>
          <p>
            Have questions, suggestions, or just want to say hello? We'd love to
            hear from you! Reach out to our support team at
            <a href="mailto:benedictnnaoma0@gmail.com">Support</a>, and let's
            make your culinary journey extraordinary together.
          </p>
        </article>
        <p>&copy; {currentYear} Delicacy Hub. All Rights Reserved.</p>
      </FooterStyle>
    </BottomStyles>
  );
}

export default Footer

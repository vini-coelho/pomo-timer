import styled from 'styled-components';

interface ButtonProps {
  visible?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  padding: 20px 0;
`;

export const Title = styled.span`
  font-size: 3.6rem;
  color: var(--white);
`;

export const ButtonArea = styled.div`
  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  outline: none;

  display: ${p => (p.visible ? 'block' : 'none')};

  transition: opacity 300ms;

  background: none;
  font-size: 3.6rem;
  color: var(--white);

  margin: 0 10px;

  cursor: pointer;

  &:hover {
    opacity: 50%;
  }

  &:active {
    opacity: 30%;
  }
`;

interface SelectButtonProps {
  active?: boolean;
}

export const SelectButton = styled.button<SelectButtonProps>`
  outline: none;
  background: rgba(255, 255, 255, ${p => (p.active ? 0.8 : 0.5)});
  height: 4rem;
  width: 14rem;
  border-radius: 0.4rem;
  margin: 0 5px;

  color: var(--primary);
  font-size: 1.4rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  cursor: pointer;
  transition: background 200ms ease-in-out;
`;

export const Footer = styled.footer`
  /* padding: 0 20px; */
  display: flex;
  align-items: center;
  /* position: absolute; */
  /* bottom: 0; */
  /* left: 0; */
  a {
    font-family: 'Montserrat';
    font-size: 1.2rem;
    color: var(--white);
    text-decoration: none;
    margin-left: 10px;
  }

  svg {
    fill: var(--white);
    height: 20px;
    width: 20px;
  }
`;

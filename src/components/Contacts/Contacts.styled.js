import styled from '@emotion/styled';

export const ContactList = styled.ul`
  max-height: 152px;
  overflow: auto;
  padding: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  
  p {
    height: 38px;
  }
`;

export const ContactsCaption = styled.p`
  margin: 14px 0px;
  font-weight: 500;
`;

export const FilterCaption = styled.p`
  margin-bottom: 10px;
  font-size: 26px;
`;

export const DeleteButton = styled.button`
  padding: 2px;
  margin-left: auto;
  margin-right: 16px;
  width: 70px;
  font-size: 20px;
  border-color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 100ms linear;
  :hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

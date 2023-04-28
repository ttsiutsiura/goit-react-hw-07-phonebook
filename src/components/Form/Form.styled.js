import styled from '@emotion/styled';
import PhoneInput from 'react-phone-number-input';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 6px;
  margin-bottom: 16px;
  font-size: 18px;
  border-radius: 6px;
  outline: none;
  width: 300px;
`;

export const Button = styled.button`
  padding: 4px;
  max-width: 180px;
  font-size: 24px;
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

export const PhoneInputEnhanced = styled(PhoneInput)`
  display: flex;
  align-items: center;

  .PhoneInputInput {
    padding: 6px;
    flex: none;
    font-size: 18px;
    border-radius: 6px;
    outline: none;
    width: 300px;
  }

  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 5px solid black;
    opacity: 0;
    cursor: pointer;
    appearance: none;
  }
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Warning = styled.div`
  font-size: 18px;
  color: red;
  margin-left: 12px;
`;

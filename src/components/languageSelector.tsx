import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormGroup, Input } from 'reactstrap';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState('');

  const onChangeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
  }, [selectedOption]);

  return (
    <Form className="m-2">
      <FormGroup>
        <Input
          className="form-select"
          id="exampleSelect"
          name="select"
          type="select"
          value={selectedOption}
          onChange={(e) => onChangeSelection(e)}
        >
          <option>English</option>
          <option>Deutsch</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

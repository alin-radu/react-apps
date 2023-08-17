import { InputBasic } from '../InputBasic/InputBasic';
import { SelectBasic } from '../SelectBasic/SelectBasic';
import { DatePickerBasic } from '../DatePickerBasic/DatePickerBasic';

export const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <InputBasic {...rest} />;
    case 'select':
      return <SelectBasic {...rest} />;
    case 'date':
      return <DatePickerBasic {...rest} />;
    default:
      return null;
  }
};

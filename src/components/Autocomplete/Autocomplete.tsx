import {
  Autocomplete as AutocompleteMui,
  AutocompleteProps as MuiAutocompleteProps,
  TextField,
} from "@mui/material";

export interface AutocompleteProps<T>
  extends MuiAutocompleteProps<T, false, false, false> {
  label: string;
}

const Autocomplete = <T,>({
  label,
  renderInput,
  ...rest
}: AutocompleteProps<T>) => (
  <AutocompleteMui
    renderInput={
      renderInput || ((params) => <TextField {...params} label={label} />)
    }
    {...rest}
  />
);

export default Autocomplete;

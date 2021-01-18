import classes from './Input.module.css';

const input = (props) => {
  let inputEl = null;

  let inputClasses = [classes.InputEl];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case ('input'):
      inputEl = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('textarea'):
      inputEl = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('select'):
      inputEl = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed} >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputEl = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
  }


  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      { inputEl}
      { validationError}
    </div>
  );
}

export default input;
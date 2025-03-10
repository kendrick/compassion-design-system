export default {
  title: 'Components/Forms/Select',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'error', 'success'],
    },
    hint: { control: 'text' },
  },
  decorators: [(Story) => `<div style="width: 360px;">${Story()}</div>`],
};

const Select = ({
  label = 'Label Text',
  size = 'medium',
  state = 'default',
  hint = '',
  icon = '',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';

  return `
    <div class="form-field-row">
        <label class="form-label ${disabled}" for="test-field">
          ${label}
        </label>
        <div class="form-field ${state} ${size}">
          <select id="test-field" class="form-input" ${disabled}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
          ${icon.length ? `<span class="form-icon">${icon}</span>` : ''}
          <span class="form-icon select-icon"><i class="ph-caret-down"></i></span>
        </div>
        ${hint.length ? `<span class="form-hint ${state}">${hint}</span>` : ''}
    </div>
`;
};

const FORM_ICON = {
  success: `<i class="ph-check ph-lg"></i>`,
  error: `<i class="ph-x ph-lg"></i>`,
};

export const Default = Select.bind({});
Default.args = {
  label: 'Label Text',
  state: 'default',
};

export const Disabled = Select.bind({});
Disabled.args = {
  label: 'Label Text',
  state: 'disabled',
};

export const Error = Select.bind({});
Error.args = {
  label: 'Label Text',
  state: 'error',
  hint: 'Hint Text',
  icon: FORM_ICON.error,
};

export const Success = Select.bind({});
Success.args = {
  label: 'Label Text',
  state: 'success',
  icon: FORM_ICON.success,
};

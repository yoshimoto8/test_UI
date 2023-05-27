import { useForm } from 'react-hook-form'
import { Radio, RadioGroup } from '../../components/radio'

type FieldValues = {
  name: 'text1' | 'text2'
};

export const DynamicFields = () => {
  const { register, watch, handleSubmit } = useForm<FieldValues>()
  const radioGroup = [{ label: 'text1', value: 'text1' }, { label: 'text2', value: 'text2' }]
  const watchedName = watch('name')

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup>
        {radioGroup.map((item, index) => {
          return (
            <Radio key={index} {...register('name')} ariaChecked={false} tabIndex={0} value={item.value}>
              {item.label}
            </Radio>
          )
        })}
      </RadioGroup>

      {watchedName === 'text1' && <div>A</div>}
      {watchedName === 'text2' && <div>B</div>}

      <input type="submit" />
    </form>
  )
}

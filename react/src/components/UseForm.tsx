import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

export default function UseForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    mode: 'onChange',
  });
  const onSubmit = async (data: Record<string, any>) => {
    console.log(data);
  };

  const onInValid = (data: Record<string, any>) => {
    console.log(data);
  };

  return (
    <>
      Submit
      <form onSubmit={handleSubmit(onSubmit, onInValid)}>
        <Controller
          name="FirstSelect"
          control={control}
          render={({ field }) => (
            <Select
              onChange={field.onChange}
              options={[
                { value: '1', label: '11' },
                { value: '2', label: '22' },
                { value: '3', label: '33' },
              ]}
            />
          )}
        />
        <select name="SecondSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          {...register('FirstName', {
            required: 'Please enter your first name.',
            pattern: {
              value: /^[a-zA-Z]*$/,
              message: '비밀번호는 영어만 가능합니다.',
            },
          })}
        />
        {errors?.FirstName?.message && (
          <span>{errors?.FirstName?.message}</span>
        )}
        <input {...register('SecondName', {})} />
        <input {...register('ThirdName', {})} />
        <input {...register('FourthName', {})} />
        <input type="submit" />
      </form>
    </>
  );
}

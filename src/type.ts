import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { formState: { errors } } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error
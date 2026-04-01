import { FormLayout } from '../components/templates/FormLayout';
import { StepFour } from '../components/organisms/StepFour';
import { StepOne } from '../components/organisms/StepOne';
import { StepThree } from '../components/organisms/StepThree';
import { StepTwo } from '../components/organisms/StepTwo';
import { useFormStore } from '../store/useFormStore';

export const App = () => {
  const { step, data, setField, next, prev, reset } = useFormStore();

  const isNameValid = data.fullName.trim().length > 1;
  const isEmailValid = /.+@.+\..+/.test(data.email);
  const isCityValid = data.city.length > 0;

  const canContinue =
    (step === 1 && isNameValid) ||
    (step === 2 && isEmailValid) ||
    (step === 3 && isCityValid) ||
    step === 4;

  const handleNext = () => {
    if (canContinue) {
      next();
    }
  };

  return (
    <FormLayout
      step={step}
      onBack={prev}
      onNext={handleNext}
      showBack={step > 1}
      nextLabel={step === 4 ? 'Finish' : 'Next'}
    >
      {step === 1 && (
        <StepOne
          fullName={data.fullName}
          onChange={(value) => setField('fullName', value)}
        />
      )}

      {step === 2 && (
        <StepTwo
          fullName={data.fullName}
          email={data.email}
          onChange={(value) => setField('email', value)}
        />
      )}

      {step === 3 && (
        <StepThree
          fullName={data.fullName}
          city={data.city}
          onPickCity={(city) => setField('city', city)}
        />
      )}

      {step === 4 && (
        <StepFour
          data={data}
          onDone={() => {
            reset();
          }}
        />
      )}
    </FormLayout>
  );
};

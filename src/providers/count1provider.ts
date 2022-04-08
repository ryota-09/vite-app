import { reactive, toRefs, type InjectionKey } from "vue";

type Count1StateType = {
  count1: number;
  isEven: boolean;
};
export const count1Provider = () => {
  const count1State = reactive<Count1StateType>({
    count1: 0,
    isEven: true,
  });

  const increment = () => {
    count1State.count1++;
    count1State.isEven = !count1State.isEven;
  };

  const decrement = () => {
    count1State.count1--;
    count1State.isEven = !count1State.isEven;
  };

  return { ...toRefs(count1State), increment, decrement };
};

type Count1providerType = ReturnType< typeof count1Provider >;
export const count1providerKey: InjectionKey<Count1StateType> = Symbol("count1Provider");

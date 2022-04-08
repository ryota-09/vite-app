import { reactive, toRefs, type InjectionKey } from "vue";

type Count1StateType = {
  count1: number;
  isEven: boolean;
};
export const useCount1Store = () => {
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

type Count1StoreType = ReturnType< typeof useCount1Store >;
export const count1StoreKey: InjectionKey<Count1StoreType> = Symbol("useCount1Store");

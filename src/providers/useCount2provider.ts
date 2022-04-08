import { reactive, toRefs, type InjectionKey } from "vue";

type Count2StateType = {
  count2: number;
};
export const useCount2Store = () => {
  const count2State = reactive<Count2StateType>({
    count2: 1,
  });

  const double = () => {
    count2State.count2 = count2State.count2 * 2;
  };

  const half = () => {
    count2State.count2 = count2State.count2 / 2;
  };

  return { ...toRefs(count2State), double, half };
};

type Count2StoreType = ReturnType<typeof useCount2Store>;
export const count2StoreKey: InjectionKey<Count2StoreType> =
  Symbol("count2Store");

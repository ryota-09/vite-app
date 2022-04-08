import { reactive, toRefs, type InjectionKey } from "vue";

type Count2StateType = {
  count2: number;
};
export const count2Store = () => {
  const count1State = reactive<Count2StateType>({
    count2: 0,
  });

  const double = () => {
    count1State.count2 * 2;
  };

  const half = () => {
    count1State.count2 / 2;
  };

  return { ...toRefs(count1State), double, half };
};

type Count2StoreType = ReturnType<typeof count2Store>;
export const count2StoreKey: InjectionKey<Count2StoreType> =
  Symbol("count2Store");

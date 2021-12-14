import { createEffect } from "effector";

async function f1() {}
const oneFx = createEffect();

const finalFx = createEffect(async function () {
  await f1();
  await oneFx(1);
});

export { finalFx };

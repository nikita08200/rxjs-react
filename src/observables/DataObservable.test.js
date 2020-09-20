import dataObservable from "./DataObservable";

it("test DataObservable", async () => {
  await dataObservable.subscribe({
    next(data) {
      except(data).toHaveLength(3);
    },
  });
});

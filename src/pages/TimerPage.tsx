import { Component, createSignal, onCleanup, onMount } from "solid-js";

const TimerPage: Component = () => {
  const [time, setTime] = createSignal(0);

  onMount(() => {
    const start = Date.now().valueOf();
    const interval = setInterval(() => {
      setTime(Date.now().valueOf() - start);
    }, 10);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  return (
    <>
      <h2>{time().toLocaleString()} ms</h2>
    </>
  );
};

export default TimerPage;

import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.initialAmount || 0);

  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const Counter = (props) => {
//     const { amount, decrement, increment } = useAmount(10);

//     return (
//       <WrappedComponent
//         {...props}
//         amount={amount}
//         decrement={decrement}
//         increment={increment}
//       />
//     );
//   };

//   return Counter;
// };

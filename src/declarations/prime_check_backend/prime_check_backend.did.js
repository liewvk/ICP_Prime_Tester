export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkPrime' : IDL.Func([IDL.Nat], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

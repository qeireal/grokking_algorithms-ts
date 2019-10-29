export function factorialRecursion(value: bigint): bigint {
   if (value === BigInt(0) || value === BigInt(1)) {
       return BigInt(1);
   }

   return value * factorialRecursion(value - BigInt(1));
}
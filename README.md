# ICP_Prime_Tester
This is an ICP Canister for testing prime number.
a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
The  code logic in motoko is as follows:
func isPrime(n: Nat): Bool {
        if (n < 2) {
            return false;
        };
        var i: Nat = 2;
        while (i * i <= n) {
            if (n % i == 0) {        //if remainder is 0, that means n is not a prime number
                return false;
            };
            i += 1;
        };
        return true;
    };

    The modulus operator, also known as the remainder operator, is a mathematical operation that returns the remainder of a division problem. It's represented by the percent sign (%) in many programming languages, including C, C++, and Python. 

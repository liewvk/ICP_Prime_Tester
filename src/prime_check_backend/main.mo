import Int "mo:base/Int";

actor {
    // Private function for checking if a number is prime
    func isPrime(n: Nat): Bool {
        if (n < 2) {
            return false;
        };
        var i: Nat = 2;
        while (i * i <= n) {
            if (n % i == 0) {
                return false;
            };
            i += 1;
        };
        return true;
    };

    // Shared query function with explicit async return type
    public query func checkPrime(n: Nat): async Text {
        let nText = Int.toText(n);  // Convert Nat to Text using Int.toText
        if (isPrime(n)) {
            return "Prime: The number " # nText # " is prime.";
        } else {
            return "Not Prime: The number " # nText # " is not prime.";
        };
    }
};





